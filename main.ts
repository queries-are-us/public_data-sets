import ConferenceSchema from './lib/data_types/conferences.schema.json';
import conferences_dataset from './data_sets/conferences/conferences_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv)

console.log(`=== Start Data Sets Validation ================================================`)

if (!Array.isArray(conferences_dataset)) {
    console.log(`Object conferences_dataset MUST be of type array`)
}

conferences_dataset.forEach(conference => {
    if (!ajv.validate(ConferenceSchema, conference)) {
        console.log(ajv.errors);
    }
});

console.log(`=== Data Sets Validation Finished =============================================`)
