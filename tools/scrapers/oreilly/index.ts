import axios from 'axios';
import { load as cheerioLoad } from 'cheerio';
import { promises as fsPromises } from 'fs';
import { join } from 'path';
import ShortUniqueId from 'short-unique-id';

interface Publisher {
    entity: string
    website: string
}

interface Link {
    type: string
    address: string
}

interface Book {
    id: string
    title: string
    authors: string[]
    isbn_13: string
    isbn_10: string
    editions: number
    binding: string
    publishers: Publisher[]
    release_date: string
    publication_date: string
    pages: number
    languages: string[]
    links: Link[]
    tags: string[]
    description: string
}

function sleep(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}

function time(): string {
    const now = new Date();
    return `${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;
}

export class OreillyScraper {
    async scrapeTitle(url: string): Promise<Book> {
        await sleep(1000);
        console.log(`[${time()}] Scraping {url}`, url);

        // === O'Reilly =======================================================
        const oreResp = await axios.get(url);
        const $ore = cheerioLoad(oreResp.data);

        const title = $ore('.t-title').text().trim();
        const authors = $ore('.author-name').map((_, element) => {
            return $ore(element).text().trim();
        }).toArray();
        const isbn_13 = $ore('.t-isbn:last()').text().trim();
        const release_date = $ore('.t-release-date').text().trim().replace("Released ", "");
        const oreillyLink = oreResp.request.res.responseUrl;

        console.log(`[${time()}] Scraped data {url}:`, url);
        console.log('  title: {title}', title);
        console.log('  authors: {authors}', JSON.stringify(authors));
        console.log('  isbn_13: {isbn_13}', isbn_13);
        console.log('  release_date: {release_date}', release_date);
        console.log('  oreillyLink: {oreillyLink}', oreillyLink);
        console.log('\n\n');


        // === ISBN ===========================================================
        const isbnSearchUrl = `https://isbnsearch.org/isbn/${isbn_13}`;
        const isbResp = await axios.get(isbnSearchUrl);
        const $isb = cheerioLoad(isbResp.data);

        const isbn_10 = $isb('.bookinfo').find('p:nth(1) a').text().trim();
        const edition = parseInt($isb('.bookinfo').find('p:nth(3)').text().replace("Edition: ", "").trim(), 10);
        const binding = $isb('.bookinfo').find('p:nth(4)').text().replace("Binding: ", "").trim();
        const publication_date = $isb('.bookinfo').find('p:nth(6)').text().replace("Published: ", "").trim();

        console.log(`[${time()}] Scraped data {url}:`, isbnSearchUrl);
        console.log('  isbn_10: {isbn_10}', isbn_10);
        console.log('  edition: {edition}', edition);
        console.log('  binding: {binding}', binding);
        console.log('  publication_date: {publication_date}', publication_date);
        console.log('\n\n');


        // === Open Library ===================================================
        const olSearchUrl = `https://openlibrary.org/isbn/${isbn_13}`;
        // const olResp = await axios.get(olSearchUrl);
        // const $ol = cheerioLoad(olResp.data);

        // const p = $ol('.edition-pages').text().trim();
        // const pages = parseInt(p, 10);
        // const languages = $ol('span[itemprop=inLanguage] > a').map((_, element) => {
        //     return $ore(element).text().trim();
        // }).toArray();

        // console.log(`[${time()}] Scraped data {url}:`, olSearchUrl);
        // console.log('  pages: {pages}', pages);
        // console.log('  languages: {languages}', languages);
        // console.log('\n\n');

        const uid = new ShortUniqueId({ length: 6 });

        return {
            id: `${uid()}-${title.toLowerCase().replace(/[^a-z0-9]+/gimsu, '-')}`,
            title,
            authors: authors,
            isbn_13: isbn_13,
            isbn_10: isbn_10,
            editions: edition,
            binding: binding,
            publishers: [
                {
                    "entity": "O'Reilly Media, Inc.",
                    "website": "https://www.oreilly.com"
                }
            ],
            release_date: release_date,
            publication_date: publication_date,
            pages: -1,
            languages: [],
            links: [
                {
                    "type": "publisher",
                    "address": oreillyLink
                },
                {
                    "type": "amazon uk",
                    "address": `https://www.amazon.co.uk/gp/product/${isbn_10}`
                },
                {
                    "type": "isbn search",
                    "address": isbnSearchUrl
                },
                {
                    "type": "open library",
                    "address": olSearchUrl
                }
            ],
            tags: [],
            description: "string",
        };
    }
}

async function main() {
    console.log(`[${time()}] Starting Oreilly Scraper`);
    const scraper = new OreillyScraper();
    const book = await scraper.scrapeTitle("http://shop.oreilly.com/product/0636920012726.do");

    await fsPromises.writeFile(join(__dirname, './books.json'), JSON.stringify(book, null, 4), {
        flag: 'a+',
    });

    console.log(`[${time()}] All done, thanks bye!`);
}

main();
