using {pk} from '../db/schema';


service odataservice {
    @odata.draft.enabled
    entity patient_det1 as projection on pk.patient_det1;


    
         @Common.SideEffects : 
            {
                SourceProperties :
                [
                    'firstnum' , 'secondnum'
                ],
                TargetProperties : [
                     'result'
                ],
            }
            @odata.draft.enabled
    entity patient_det2 as projection on pk.patient_det2;
    


}
