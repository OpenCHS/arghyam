import {
    FormElementsStatusHelper,
    FormElementStatus,
    FormElementStatusBuilder,
    RuleFactory,
    StatusBuilderAnnotationFactory,
    VisitScheduleBuilder
} from 'rules-config/rules';


const CancelViewFilter = RuleFactory("2065e52e-22e8-4ade-ac65-db091e7d4746", "ViewFilter");

@CancelViewFilter("61ffe965-a454-43a0-adcc-d6edce6ab833", "Arghyam Ca And Mg Suppliments Cancellation View Filter", 100.0, {})
class CaAndMgSupplimentsCancelFormHandler {


    otherReason(programEncounter, formElement) {
        const cancelReasonObs = programEncounter.findCancelEncounterObservation('Cancel reason');
        const answer = cancelReasonObs && cancelReasonObs.getReadableValue();
        return new FormElementStatus(formElement.uuid, answer === 'Other');
    }

    static exec(programEncounter, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new CaAndMgSupplimentsCancelFormHandler(), programEncounter, formElementGroup, today);
    }
}

export {
    CaAndMgSupplimentsCancelFormHandler
}
