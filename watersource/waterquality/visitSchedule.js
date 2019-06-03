import {RuleFactory, VisitScheduleBuilder} from 'rules-config/rules';

const moment = require("moment");
const _ = require("lodash");
const RuleHelper = require('../../RuleHelper');

const WaterQualityEnrolmentBasedVisitsRule = RuleFactory("c5b2eb03-7ed3-4fbc-95b7-07412219368f", "VisitSchedule");
const WaterQualityTestingBasedVisitsRule = RuleFactory("2477c54f-9106-4af2-8332-9108e4303296", "VisitSchedule");

const testingPeriodicity = new Map([
    ['January', 'January'],
    ['February', 'April'],
    ['March', 'April'],
    ['April', 'April'],
    ['May', 'August'],
    ['June', 'August'],
    ['July', 'August'],
    ['August', 'August'],
    ['September', 'October'],
    ['October', 'October'],
    ['November', 'January'],
    ['December', 'January']
    ]);



@WaterQualityEnrolmentBasedVisitsRule("ad14bca2-2c6b-4daf-b774-7dd54632b91e", "Water Quality Enrolment based visit rule", 100.0)
class WaterQualityEnrolmentBasedVisitsRuleAragyam {

    static exec(programEnrolment, visitSchedule = [], scheduleConfig) {
        let scheduleBuilder = RuleHelper.createProgramEncounterVisitScheduleBuilder(programEnrolment, visitSchedule);
        const currentMonth = moment(programEnrolment.enrolmentDateTime).format("MMMM");
        const monthToSchedule = testingPeriodicity.get(currentMonth);
        const earliestVisitDate = _.isEqual(currentMonth, monthToSchedule) ? moment(programEnrolment.enrolmentDateTime).toDate() : moment().month(monthToSchedule).startOf("month").toDate();
        const visitNameWithSuffix = 'Water quality testing - ' + monthToSchedule;

        const lastDayOfMonth = moment(earliestVisitDate).endOf('month').date();
        const numberOfDaysForMaxOffset = (lastDayOfMonth - moment(earliestVisitDate).date());

        RuleHelper.addSchedule(scheduleBuilder, visitNameWithSuffix, 'Water quality testing',
            earliestVisitDate, numberOfDaysForMaxOffset);

        return scheduleBuilder.getAllUnique("encounterType");
    }
}

@WaterQualityTestingBasedVisitsRule("ab8653d3-1ae5-4cda-96b5-508415270276", "Water quality testing based visit rule", 100.0)
class WaterQualityTestingBasedVisitsRuleAragyam {

    static exec(programEncounter, visitSchedule = [], scheduleConfig) {
        let scheduleBuilder = RuleHelper.createProgramEncounterVisitScheduleBuilder(programEnrolment, visitSchedule);
        const currentMonth = moment(programEncounter.encounterDateTime).format("MMMM");
        const monthToSchedule = testingPeriodicity.get(currentMonth);
        const earliestVisitDate = _.isEqual(currentMonth, monthToSchedule) ? moment(programEncounter.encounterDateTime).toDate() : moment().month(monthToSchedule).startOf("month").toDate();
        const visitNameWithSuffix = 'Water quality testing - ' + monthToSchedule;

        const lastDayOfMonth = moment(earliestVisitDate).endOf('month').date();
        const numberOfDaysForMaxOffset = (lastDayOfMonth - moment(earliestVisitDate).date());

        RuleHelper.addSchedule(scheduleBuilder, visitNameWithSuffix, 'Water quality testing',
            earliestVisitDate, numberOfDaysForMaxOffset);

        return scheduleBuilder.getAllUnique("encounterType");
    }
}

module.exports = {WaterQualityEnrolmentBasedVisitsRuleAragyam, WaterQualityTestingBasedVisitsRuleAragyam};
