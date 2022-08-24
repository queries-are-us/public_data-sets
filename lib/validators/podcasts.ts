import PodcastSchema from '../data_types/podcasts.schema.json';
import podcasts_dataset from '../../data_sets/podcasts/podcasts_dataset.json';
import Ajv from 'ajv';
import addFormats from "ajv-formats";

export default function ValidatePodcastsDataSet() {
    const ajv = new Ajv();
    addFormats(ajv)

    console.log(`--- [5] Validation for Podcasts:`)
    if (!Array.isArray(podcasts_dataset)) {
        console.log(`--- [5] Object podcasts_dataset MUST be of type array`)
    }

    console.log(`--- [5] Validating ${podcasts_dataset.length} entries`)
    podcasts_dataset.forEach(podcast => {
        if (!ajv.validate(PodcastSchema, podcast)) {
            console.log(`--- [5] Error for entity "${podcast.id}":`, ajv.errors);
        }
    });
    console.log(`--- [5] Validation completed.`)
}

if (require.main === module) {
    ValidatePodcastsDataSet()
}
