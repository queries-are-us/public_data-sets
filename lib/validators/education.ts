import LearningPlatformSchema from '../data_types/education.schema.json';
import education_dataset from '../../data_sets/education/education_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

export default function ValidateEducationDataSet() {
    const ajv = new Ajv();
    addFormats(ajv)

    console.log(`--- [3] Validation for Education/LearningPlatform:`)
    if (!Array.isArray(education_dataset)) {
        console.log(`--- [3] Object education_dataset MUST be of type array`)
    }

    console.log(`--- [3] Validating ${education_dataset.length} entries`)
    education_dataset.forEach(learning_platform => {
        if (!ajv.validate(LearningPlatformSchema, learning_platform)) {
            console.log(`--- [3] Error for entity "${learning_platform.id}":`, ajv.errors);
        }
    });
    console.log(`--- [3] Validation completed.`)
}

if (require.main === module) {
    ValidateEducationDataSet()
}
