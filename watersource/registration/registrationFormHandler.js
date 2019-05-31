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
const RegistrationViewFilter = RuleFactory("1e010020-617b-45a7-ae79-13aedfb6160e", "ViewFilter");


@RegistrationViewFilter("b454eec8-dc06-4d5a-9192-c5ca86a19986", "Aragyam Watersource Registration View Filter", 100.0, {})
class RegistrationViewHandlerAragyam {
    static exec(individual, formElementGroup) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new RegistrationViewHandlerAragyam(), individual, formElementGroup);
    }
}

module.exports = {RegistrationViewHandlerAragyam};

