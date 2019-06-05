const _ = require('lodash');

module.exports = _.merge({},
    require('./watersource/registration/registrationFormHandler'),
    require('./watersource/waterquality/waterQualityTestingFormHandler'),
    require('./watersource/waterquality/visitSchedule'),
    require('./watersource/waterquality/cancelFormHandler'),
    require('./patient/nutritionalSupplements/visitSchedule'),
    require('./patient/nutritionalSupplements/caAndMgSupplementsFormHandler'),
    require('./patient/nutritionalSupplements/nutritionSupplementsFormHandler'),
    require('./patient/nutritionalSupplements/nutritionSupplementsCancelFormHandler'),
    require('./patient/nutritionalSupplements/caAndMgSupplimentsCancelFormHandler'),
);
