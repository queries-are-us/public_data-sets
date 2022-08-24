import VolunteeringSchema from '../data_types/volunteering.schema.json';
import volunteering_dataset from '../../data_sets/volunteering/volunteering_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

export default function ValidateVolunteeringDataSet() {
    const ajv = new Ajv();
    addFormats(ajv)

    console.log(`--- [7] Validation for Volunteering:`)
    if (!Array.isArray(volunteering_dataset)) {
        console.log(`--- [7] Object volunteering_dataset MUST be of type array`)
    }

    console.log(`--- [7] Validating ${volunteering_dataset.length} entries`)
    volunteering_dataset.forEach(volunteering => {
        if (!ajv.validate(VolunteeringSchema, volunteering)) {
            console.log(`--- [7] Error for entity "${volunteering.id}":`, ajv.errors);
        }
    });
    console.log(`--- [7] Validation completed.`)
}

if (require.main === module) {
    ValidateVolunteeringDataSet()
}
