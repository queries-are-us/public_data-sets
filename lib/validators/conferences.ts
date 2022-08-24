import ConferenceSchema from '../data_types/conferences.schema.json';
import conferences_dataset from '../../data_sets/conferences/conferences_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

export default function ValidateConferencesDataSet() {
    const ajv = new Ajv();
    addFormats(ajv)

    console.log(`--- [2] Validation for Conferences:`)
    if (!Array.isArray(conferences_dataset)) {
        console.log(`--- [2] Object conferences_dataset MUST be of type array`)
    }

    console.log(`--- [2] Validating ${conferences_dataset.length} entries`)
    conferences_dataset.forEach(conference => {
        if (!ajv.validate(ConferenceSchema, conference)) {
            console.log(`--- [2] Error for entity "${conference.id}":`, ajv.errors);
        }
    });
    console.log(`--- [2] Validation completed.`)
}

if (require.main === module) {
    ValidateConferencesDataSet()
}
