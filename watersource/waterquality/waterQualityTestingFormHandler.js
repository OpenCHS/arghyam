import {
    RuleFactory,
    FormElementsStatusHelper,
    FormElementStatusBuilder,
    StatusBuilderAnnotationFactory,
    FormElementStatus,
    VisitScheduleBuilder,
    ProgramRule,
    RuleCondition,
    complicationsBuilder as ComplicationsBuilder
} from 'rules-config/rules';

import _ from 'lodash';
import lib from '../../lib';
const moment = require("moment");



const WaterQualityDecisions = RuleFactory("2477c54f-9106-4af2-8332-9108e4303296", "Decision");
const validation = RuleFactory('2477c54f-9106-4af2-8332-9108e4303296', 'Validation');

@WaterQualityDecisions("a5de1eff-c555-412d-89ed-8dff26de71a2", "Aragyam Water quality testing Decisions", 100.0, {})
class WaterQualityTestingDecisions {

    static exec(programEncounter, decisions, context, today) {
        const complicationsBuilder = new ComplicationsBuilder({
            programEncounter: programEncounter,
            complicationsConcept: 'Water usage advice'
        });
        complicationsBuilder.addComplication("Water is safe")
            .valueInEncounter("Colour level after test").containsAnyAnswerConceptName('Pink');
        complicationsBuilder.addComplication("Water is unsafe")
            .valueInEncounter("Colour level after test").containsAnyAnswerConceptName('Dark yellow', 'Yellow', 'Light yellow');
        decisions.encounterDecisions.push(complicationsBuilder.getComplications());
        return decisions;
    }
}

@validation("80e088d0-4d28-475c-88d5-1a62ad8bbe27", "Arghyam Water quality testing visit validation", 100.0)
class WaterQualityValidationFailureAragyam {
    validate(programEncounter) {
        console.log("came to validate WaterQualityValidationFailureAragyam");
        const validationResults = [];
        const isAfter = moment(programEncounter.encounterDateTime).isAfter(programEncounter.maxVisitDateTime);
        console.log(isAfter);
        if (isAfter) {
            validationResults.push(lib.C.createValidationError('waterQualityTestingAfterOverdueDateNotAllowed'));
        }
        return validationResults;
    }
    static exec(programEncounter, validationErrors) {
        return new WaterQualityValidationFailureAragyam().validate(programEncounter);
    }
}


module.exports = {WaterQualityTestingDecisions, WaterQualityValidationFailureAragyam};
