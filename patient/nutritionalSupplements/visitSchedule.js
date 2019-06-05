import {RuleFactory, VisitScheduleBuilder} from 'rules-config/rules';

const moment = require("moment");
const _ = require("lodash");
const RuleHelper = require('../../RuleHelper');

const NutritionalSupplementsEnrolmentBasedVisitsRule = RuleFactory("21d6e41b-0853-4f7c-9ec1-b98d1972a2fe", "VisitSchedule");
const NutritionalSupplementsBasedVisitsRule = RuleFactory("9436187e-b003-4574-9224-0389edc02a71", "VisitSchedule");
const CaAndMgSupplementsBasedVisitsRule = RuleFactory("9e195f3f-4e2d-4469-b8e5-3a894607f66a", "VisitSchedule");
const NutritionalSupplementsBasedCancellationVisitsRule = RuleFactory("6eb1662c-8435-4645-997e-870b09c3bce2", "VisitSchedule");
const CaAndMgSupplementsBasedCancellationVisitsRule = RuleFactory("2065e52e-22e8-4ade-ac65-db091e7d4746", "VisitSchedule");

@NutritionalSupplementsEnrolmentBasedVisitsRule("e155459b-75eb-43ff-90e5-fd04fbc4198f", "Nutritional supplements Enrolment based visit rule", 100.0)
class NutritionalSupplementsEnrolmentBasedVisitsRuleArghyam {

    static exec(programEnrolment, visitSchedule = [], scheduleConfig) {
        let scheduleBuilder = RuleHelper.createProgramEncounterVisitScheduleBuilder(programEnrolment, visitSchedule);

        if (!programEnrolment.hasEncounterOfType('Additional conditions') && programEnrolment.individual.isFemale()) {
            const monthNamePrefix = moment(programEnrolment.enrolmentDateTime).format('MMMM');
            const lastDayOfMonth = moment(programEnrolment.enrolmentDateTime).endOf('month').date();
            const numberOfDaysForMaxOffset = (lastDayOfMonth - moment(programEnrolment.enrolmentDateTime).date());
            return RuleHelper.scheduleThreeVisits(scheduleBuilder, 'Additional conditions', 'Additional conditions', programEnrolment.enrolmentDateTime, 0,
                'Nutrition supplements ' + monthNamePrefix, 'Nutrition supplements', programEnrolment.enrolmentDateTime, numberOfDaysForMaxOffset,
                'Ca and Mg Supplements ' + monthNamePrefix, 'Ca and Mg supplements', programEnrolment.enrolmentDateTime, numberOfDaysForMaxOffset);
        } else {
            const monthNamePrefix = moment(programEnrolment.enrolmentDateTime).format('MMMM');
            const lastDayOfMonth = moment(programEnrolment.enrolmentDateTime).endOf('month').date();
            const numberOfDaysForMaxOffset = (lastDayOfMonth - moment(programEnrolment.enrolmentDateTime).date());
            return RuleHelper.scheduleTwoVisits(scheduleBuilder, 'Nutrition supplements ' + monthNamePrefix, 'Nutrition supplements', programEnrolment.enrolmentDateTime, numberOfDaysForMaxOffset,
                'Ca and Mg Supplements ' + monthNamePrefix, 'Ca and Mg supplements', programEnrolment.enrolmentDateTime, numberOfDaysForMaxOffset)
        }
    }
}

@NutritionalSupplementsBasedVisitsRule("c6ca0801-9c1b-46d6-998a-2ad43a50026a", "Nutritional Supplements Based Visits Rule", 100.0)
class NutritionalSupplementsBasedVisitsRuleArghyam {
    static exec(programEncounter, visitSchedule = [], scheduleConfig) {
        let scheduleBuilder = RuleHelper.createProgramEncounterVisitScheduleBuilder(programEncounter, visitSchedule);
        const earliestVisitDate = RuleHelper.firstOfNextMonth(programEncounter.encounterDateTime);
        const lastDayOfMonth = moment(earliestVisitDate).endOf('month').date();
        const numberOfDaysForMaxOffset = (lastDayOfMonth - moment(earliestVisitDate).date());
        const monthNamePrefix = moment(earliestVisitDate).format('MMMM');
        return RuleHelper.scheduleOneVisit(scheduleBuilder, 'Nutrition supplements ' + monthNamePrefix, 'Nutrition supplements',
            earliestVisitDate, numberOfDaysForMaxOffset);
    }
}

@CaAndMgSupplementsBasedVisitsRule("6c46e66b-1fa9-4a31-b838-011f3ecfd310", "Ca And Mg Supplements Based Visits Rule", 100.0)
class CaAndMgSupplementsBasedVisitsRuleArghyam {
    static exec(programEncounter, visitSchedule = [], scheduleConfig) {
        let scheduleBuilder = RuleHelper.createProgramEncounterVisitScheduleBuilder(programEncounter, visitSchedule);
        const earliestVisitDate = RuleHelper.firstOfNextMonth(programEncounter.encounterDateTime);
        const lastDayOfMonth = moment(earliestVisitDate).endOf('month').date();
        const numberOfDaysForMaxOffset = (lastDayOfMonth - moment(earliestVisitDate).date());
        const monthNamePrefix = moment(earliestVisitDate).format('MMMM');
        return RuleHelper.scheduleOneVisit(scheduleBuilder, 'Ca and Mg Supplements ' + monthNamePrefix, 'Ca and Mg supplements',
            earliestVisitDate, numberOfDaysForMaxOffset);
    }
}

@NutritionalSupplementsBasedCancellationVisitsRule("e99c448e-2900-4704-8112-5f1e0cb86afc", "Nutrition supplements Cancel Visits Rule", 100.0)
class NutritionalSupplementsBasedCancellationVisitsRuleArghyam {
    static exec(programEncounter, visitSchedule = [], scheduleConfig) {
        let scheduleBuilder = RuleHelper.createProgramEncounterVisitScheduleBuilder(programEncounter, visitSchedule);
        const earliestVisitDate = RuleHelper.firstOfNextMonth(programEncounter.cancelDateTime);
        const lastDayOfMonth = moment(earliestVisitDate).endOf('month').date();
        const numberOfDaysForMaxOffset = (lastDayOfMonth - moment(earliestVisitDate).date());
        const monthNamePrefix = moment(earliestVisitDate).format('MMMM');
        return RuleHelper.scheduleOneVisit(scheduleBuilder, 'Nutrition supplements ' + monthNamePrefix, 'Nutrition supplements',
            earliestVisitDate, numberOfDaysForMaxOffset);
    }
}

@CaAndMgSupplementsBasedCancellationVisitsRule("52a29fe6-0858-4408-bb7f-48ab986577c1", "Ca And Mg Supplements Cancel Visits Rule", 100.0)
class CaAndMgSupplementsBasedCancellationVisitsRuleArghyam {
    static exec(programEncounter, visitSchedule = [], scheduleConfig) {
        let scheduleBuilder = RuleHelper.createProgramEncounterVisitScheduleBuilder(programEncounter, visitSchedule);
        const earliestVisitDate = RuleHelper.firstOfNextMonth(programEncounter.cancelDateTime);
        const lastDayOfMonth = moment(earliestVisitDate).endOf('month').date();
        const numberOfDaysForMaxOffset = (lastDayOfMonth - moment(earliestVisitDate).date());
        const monthNamePrefix = moment(earliestVisitDate).format('MMMM');
        return RuleHelper.scheduleOneVisit(scheduleBuilder, 'Ca and Mg Supplements ' + monthNamePrefix, 'Ca and Mg supplements',
            earliestVisitDate, numberOfDaysForMaxOffset);
    }

}

module.exports = {
    NutritionalSupplementsEnrolmentBasedVisitsRuleArghyam,
    NutritionalSupplementsBasedVisitsRuleArghyam,
    CaAndMgSupplementsBasedVisitsRuleArghyam,
    NutritionalSupplementsBasedCancellationVisitsRuleArghyam,
    CaAndMgSupplementsBasedCancellationVisitsRuleArghyam
};
