import axios from 'axios';
import cheerio from 'cheerio';
import { promises as fsPromises } from 'fs';
import { join } from 'path';
import { stringify } from 'querystring';
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
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const title = $('.t-title').text().trim();
        // const authors = $('.author-name');
        // const authors = $('.author-name').map((element) => {
        //     return $(element).text().trim();
        // });
        const authors = $('.author-name').each((element) => {
            console.log('=== {element}', typeof (element), JSON.stringify(element));
            // const text = $(element).text().trim();
            // console.log('=== {text}', typeof (text), JSON.stringify(text));
        });
        console.log(`[${time()}] Scraped data:`);
        console.log('  title: {title}', title);
        console.log('  authors: {authors}', typeof (authors), JSON.stringify(authors));

        const uid = new ShortUniqueId({ length: 10 });

        return {
            id: `${uid()}-${title.replace(/^[A-z0-9]+/i, '-').toLowerCase()}`,
            title,
            authors: [],
            isbn_13: "string",
            isbn_10: "string",
            editions: 0,
            binding: "string",
            publishers: [],
            release_date: "string",
            publication_date: "string",
            pages: 0,
            languages: [],
            links: [],
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
