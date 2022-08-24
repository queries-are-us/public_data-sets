# Public DataSets

The intention for this repository is to be a source for a few useful data sets, starting with conferences and volunteering opportunities.
It will be expanded to include other interesting sets, from books, blogs, and podcasts, to local user groups and anything useful containing interesting data to be used.

Note this is the main data source for the website https://www.queries-are-us.com/. It's public both to be available to anyone and to allow easier contribution and collaboration.

This will be a long term project, very slow to grow, and if possible I'll resort to crawlers and scraping the web, but I would prefer to keep it as curated as possible.

Also if you want it to include more data sets not mentioned/planned, please join https://discord.gg/kqv2GFsa4y to discuss plans and suggestions.

## Introduction

This repository is all about the data, you can find it in raw format here: [./data_sets](./data_sets).

Contributions are welcomed, if you feel like open a PR :)
I'll expand on guidelines as soon as it's valuable (i have little time), for now it's more about winging it.
In doubts open an Issue, or join discord.

## Data Sets status

Current state:
- [./data_sets/conferences_dataset.json](./data_sets/conferences_dataset.json) : Just started working on it!
- [./data_sets/volunteering_dataset.json](./data_sets/volunteering_dataset.json) : ... placeholder for now.

## Project setup and how to run

### Data Set

There isn't much here, only validation for now.
To install do a classic `npm install` or equivalent, and then `npm start`.

### Web

This project is meant to expose the data set as api using https://nextjs.org/.
To work with it change your working directory to it: `cd web`.
To install do a classic `npm install` or equivalent, and then `npm run dev`.

## Validation

To ensure any change to the data sets it's compatible, run the command: `npm start`.

### Update JSON Schema

Requires/uses https://github.com/YousefED/typescript-json-schema, to install you can use the command: `npm install typescript-json-schema -g`.

To create or update the datasets json schema:
- `typescript-json-schema .\tsconfig.json Blogs > .\lib\data_types\blogs.schema.json`
- `typescript-json-schema .\tsconfig.json Book > .\lib\data_types\books.schema.json`
- `typescript-json-schema .\tsconfig.json Conference > .\lib\data_types\conferences.schema.json`
- `typescript-json-schema .\tsconfig.json LearningPlatform > .\lib\data_types\education.schema.json`
- `typescript-json-schema .\tsconfig.json Newsletter > .\lib\data_types\newsletters.schema.json`
- `typescript-json-schema .\tsconfig.json Podcast > .\lib\data_types\podcasts.schema.json`
- `typescript-json-schema .\tsconfig.json UserGroup > .\lib\data_types\usergroups.schema.json`
- `typescript-json-schema .\tsconfig.json Volunteering > .\lib\data_types\volunteering.schema.json`
