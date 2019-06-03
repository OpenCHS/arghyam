import {RuleFactory, VisitScheduleBuilder} from 'rules-config/rules';

const moment = require("moment");
const _ = require("lodash");
const RuleHelper = require('../../RuleHelper');

const NutritionalSupplementsEnrolmentBasedVisitsRule = RuleFactory("21d6e41b-0853-4f7c-9ec1-b98d1972a2fe", "VisitSchedule");



@NutritionalSupplementsEnrolmentBasedVisitsRule("e155459b-75eb-43ff-90e5-fd04fbc4198f", "Nutritional supplements Enrolment based visit rule", 100.0)
class NutritionalSupplementsEnrolmentBasedVisitsRuleAragyam {

    static exec(programEnrolment, visitSchedule = [], scheduleConfig) {
        let scheduleBuilder = RuleHelper.createProgramEncounterVisitScheduleBuilder(programEnrolment, visitSchedule);

        if (!programEnrolment.hasEncounterOfType('Additional conditions') && programEnrolment.individual.isFemale()){
            RuleHelper.addSchedule(scheduleBuilder, 'Additional conditions', 'Additional conditions', programEnrolment.enrolmentDateTime, 0);
        }

        return scheduleBuilder.getAllUnique("encounterType");
    }
}

module.exports = {NutritionalSupplementsEnrolmentBasedVisitsRuleAragyam};
