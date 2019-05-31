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


const WithRegistrationStatusBuilder = StatusBuilderAnnotationFactory('individual', 'formElement');
const RegistrationViewFilter = RuleFactory("2f68e73f-5ddd-4923-b04b-503e9abcc69d", "ViewFilter");


@RegistrationViewFilter("b454eec8-dc06-4d5a-9192-c5ca86a19986", "Aragyam Patient Registration View Filter", 100.0, {})
class RegistrationViewHandlerAragyam {
    static exec(individual, formElementGroup) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new RegistrationViewHandlerAragyam(), individual, formElementGroup);
    }
}

module.exports = {RegistrationViewHandlerAragyam};

