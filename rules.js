const _ = require('lodash');

module.exports = _.merge({},
    require('./watersource/registration/registrationFormHandler'),
    require('./watersource/waterquality/waterQualityTestingFormHandler'),
    require('./watersource/waterquality/visitSchedule'),
);