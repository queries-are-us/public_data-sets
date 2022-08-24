import UserGroupSchema from '../data_types/usergroups.schema.json';
import usergroups_dataset from '../../data_sets/usergroups/usergroups_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

export default function ValidateUserGroupsDataSet() {
    const ajv = new Ajv();
    addFormats(ajv)

    console.log(`--- [6] Validation for UserGroups:`)
    if (!Array.isArray(usergroups_dataset)) {
        console.log(`--- [6] Object usergroups_dataset MUST be of type array`)
    }

    console.log(`--- [6] Validating ${usergroups_dataset.length} entries`)
    usergroups_dataset.forEach(usergroup => {
        if (!ajv.validate(UserGroupSchema, usergroup)) {
            console.log(`--- [6] Error for entity "${usergroup.id}":`, ajv.errors);
        }
    });
    console.log(`--- [6] Validation completed.`)
}

if (require.main === module) {
    ValidateUserGroupsDataSet()
}
