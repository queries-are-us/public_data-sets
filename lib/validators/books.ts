import BookSchema from '../data_types/books.schema.json';
import books_dataset from '../../data_sets/books/books_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

export default function ValidateBooksDataSet() {
    const ajv = new Ajv();
    addFormats(ajv)

    console.log(`--- [1] Validation for Books:`)
    if (!Array.isArray(books_dataset)) {
        console.log(`--- [1] Object books_dataset MUST be of type array`)
    }

    console.log(`--- [1] Validating ${books_dataset.length} entries`)
    books_dataset.forEach(book => {
        if (!ajv.validate(BookSchema, book)) {
            console.log(`--- [1] Error for entity "${book.id}":`, ajv.errors);
        }
    });
    console.log(`--- [1] Validation completed.`)
}

if (require.main === module) {
    ValidateBooksDataSet()
}
