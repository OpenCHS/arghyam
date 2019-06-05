import {
    RuleFactory,
    FormElementsStatusHelper,
    FormElementStatusBuilder,
    StatusBuilderAnnotationFactory,
    FormElementStatus,
    VisitScheduleBuilder,
    ProgramRule,
    RuleCondition
} from 'rules-config/rules';

import lib from '../../lib';

const moment = require("moment");

const validation = RuleFactory('9436187e-b003-4574-9224-0389edc02a71', 'Validation');

@validation("e0740596-39f6-4e59-a386-9425f594a980", "Arghyam Nutrition Supplements visit validation", 100.0)
class NutritionSupplementsFailureArghyam {
    validate(programEncounter) {
        const validationResults = [];
        const isAfter = moment(programEncounter.encounterDateTime).isAfter(programEncounter.maxVisitDateTime);
        if (isAfter) {
            validationResults.push(lib.C.createValidationError('nutritionSupplementsAfterOverdueDateNotAllowed'));
        }
        return validationResults;
    }

    static exec(programEncounter, validationErrors) {
        return new NutritionSupplementsFailureArghyam().validate(programEncounter);
    }
}


module.exports = {NutritionSupplementsFailureArghyam};
