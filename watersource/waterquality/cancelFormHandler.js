import {
    FormElementsStatusHelper,
    FormElementStatus,
    FormElementStatusBuilder,
    RuleFactory,
    StatusBuilderAnnotationFactory,
    VisitScheduleBuilder
} from 'rules-config/rules';

const WithStatusBuilder = StatusBuilderAnnotationFactory('programEncounter', 'formElement');
const CancelViewFilter = RuleFactory("609825ea-e8cb-4a78-b28d-3ca63bcf37e1", "ViewFilter");

@CancelViewFilter("4296f7d6-da8a-4e08-ba18-64e78a36ba59", "Arghyam Water quality testing Cancellation View Filter", 100.0, {})
class CancellationViewFilterHandlerArghyam {


    otherReason(programEncounter, formElement) {
        const cancelReasonObs = programEncounter.findCancelEncounterObservation('Visit cancel reason');
        const answer = cancelReasonObs && cancelReasonObs.getReadableValue();
        return new FormElementStatus(formElement.uuid, answer === 'Other');
    }

    static exec(programEncounter, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new CancellationViewFilterHandlerArghyam(), programEncounter, formElementGroup, today);
    }
}

export {
    CancellationViewFilterHandlerArghyam
}