import {
    FormElementsStatusHelper,
    FormElementStatus,
    FormElementStatusBuilder,
    RuleFactory,
    StatusBuilderAnnotationFactory,
    WithName
} from 'rules-config/rules';

const CancelViewFilter = RuleFactory("6eb1662c-8435-4645-997e-870b09c3bce2", "ViewFilter");

@CancelViewFilter("6001ebe5-2e1f-4c57-88c1-fd77ba5dbcde", "Arghyam Nutrition Supplements Cancellation View Filter", 100.0, {})
class NutritionSupplementsCancelFormHandler {


    otherReason(programEncounter, formElement) {
        const cancelReasonObs = programEncounter.findCancelEncounterObservation('Cancel reason');
        const answer = cancelReasonObs && cancelReasonObs.getReadableValue();
        return new FormElementStatus(formElement.uuid, answer === 'Other');
    }

    static exec(programEncounter, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new NutritionSupplementsCancelFormHandler(), programEncounter, formElementGroup, today);
    }
}

export {
    NutritionSupplementsCancelFormHandler
}
