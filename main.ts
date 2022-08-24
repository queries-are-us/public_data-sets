import ValidateBlogsDataSet from "./lib/validators/blogs";
import ValidateBooksDataSet from "./lib/validators/books";
import ValidateConferencesDataSet from "./lib/validators/conferences";
import ValidateEducationDataSet from "./lib/validators/education";
import ValidateNewslettersDataSet from "./lib/validators/newsletters";
import ValidatePodcastsDataSet from "./lib/validators/podcasts";
import ValidateUserGroupsDataSet from "./lib/validators/usergroups";
import ValidateVolunteeringDataSet from "./lib/validators/volunteering";

console.log(`>>> Running all DataSets validations ...`)

ValidateBlogsDataSet();
ValidateBooksDataSet();
ValidateConferencesDataSet();
ValidateEducationDataSet();
ValidateNewslettersDataSet();
ValidatePodcastsDataSet();
ValidateUserGroupsDataSet();
ValidateVolunteeringDataSet();

console.log(`<<< Validation Completed!`)
