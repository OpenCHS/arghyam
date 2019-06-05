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

const validation = RuleFactory('9e195f3f-4e2d-4469-b8e5-3a894607f66a', 'Validation');

@validation("05dcbe53-2394-418f-b73d-56dd0bfe73df", "Arghyam Ca and Mg Supplements visit validation", 100.0)
class CaAndMgSupplementsFailureArghyam {
    validate(programEncounter) {
        const validationResults = [];
        const isAfter = moment(programEncounter.encounterDateTime).isAfter(programEncounter.maxVisitDateTime);
        if (isAfter) {
            validationResults.push(lib.C.createValidationError('caAndMgSupplementsAfterOverdueDateNotAllowed'));
        }
        return validationResults;
    }

    static exec(programEncounter, validationErrors) {
        return new CaAndMgSupplementsFailureArghyam().validate(programEncounter);
    }
}

module.exports = {CaAndMgSupplementsFailureArghyam};
