const rulesConfigInfra = require('rules-config/infra');
const IDI = require('openchs-idi');
const secrets = require('../secrets.json');

module.exports = IDI.configure({
    "name": "aragyam",
    "chs-admin": "admin",
    "org-name": "Aragyam",
    "org-admin": "admin@aragyam",
    "secrets": secrets,
    "files": {
        "adminUsers": {
            // "prod": ["admin-user.json"],
            "dev": ["users/dev-admin-user.json"],
        },
        "forms": [
            "watersource/registration/registrationForm.json",
            "watersource/waterquality/enrolmentNullForm.json",
            "watersource/waterquality/waterQualityTesting.json",

        ],
        "formMappings": [
            "formMappings.json",
        ],
        "formDeletions": [
        ],
        "formAdditions": [
        ],
        "catchments": [
            "catchments.json",
        ],
        "checklistDetails": [
        ],
        "concepts": [
            "watersource/registration/registrationConcepts.json",
            "watersource/waterquality/concepts.json",
        ],
        "locations": [
            "addressLevel/locations.json",
        ],
        "addressLevelTypes": [
            "addressLevel/addressLevelType.json",
        ],
        "programs": ["programs.json"],
        "encounterTypes": ["encounterTypes.json"],
        "operationalEncounterTypes": ["operationalModules/operationalEncounterTypes.json"],
        "operationalPrograms": ["operationalModules/operationalPrograms.json"],
        "subjectTypes": ["subjectTypes.json"],
        "operationalSubjectTypes": ["operationalModules/operationalSubjectTypes.json"],
        "users": {
            "dev": ["users/dev-users.json"]
        },
        "rules": [
            "./rules.js"
        ],
        "organisationSql": [
            /* "create_organisation.sql"*/
        ]
    }
}, rulesConfigInfra);
