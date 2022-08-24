import NewsletterSchema from '../data_types/newsletters.schema.json';
import newsletters_dataset from '../../data_sets/newsletters/newsletters_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

export default function ValidateNewslettersDataSet() {
    const ajv = new Ajv();
    addFormats(ajv)

    console.log(`--- [4] Validation for Newsletters:`)
    if (!Array.isArray(newsletters_dataset)) {
        console.log(`--- [4] Object newsletters_dataset MUST be of type array`)
    }

    console.log(`--- [4] Validating ${newsletters_dataset.length} entries`)
    newsletters_dataset.forEach(newsletter => {
        if (!ajv.validate(NewsletterSchema, newsletter)) {
            console.log(`--- [4] Error for entity "${newsletter.id}":`, ajv.errors);
        }
    });
    console.log(`--- [4] Validation completed.`)
}

if (require.main === module) {
    ValidateNewslettersDataSet()
}
