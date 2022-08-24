import BlogSchema from '../data_types/blogs.schema.json';
import blogs_dataset from '../../data_sets/blogs/blogs_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

export default function ValidateBlogsDataSet() {
    const ajv = new Ajv();
    addFormats(ajv)

    console.log(`--- [0] Validation for Blogs:`)
    if (!Array.isArray(blogs_dataset)) {
        console.log(`--- [0] Object blogs_dataset MUST be of type array`)
    }

    console.log(`--- [0] Validating ${blogs_dataset.length} entries`)
    blogs_dataset.forEach(blog => {
        if (!ajv.validate(BlogSchema, blog)) {
            console.log(`--- [0] Error for entity "${blog.id}":`, ajv.errors);
        }
    });
    console.log(`--- [0] Validation completed.`)
}

if (require.main === module) {
    ValidateBlogsDataSet()
}
