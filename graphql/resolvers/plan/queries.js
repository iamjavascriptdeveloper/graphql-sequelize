import { planModel } from "../../../db/models";
import { BasicSpecification, BasicSpecificationValue, BasicSpecificationCategory } from "../../../db/models/shiyousho";

const planQueries = {
  plan: async (_, args) => {

    const { ConstructionCode, PlanNo} = args
  
    const {Plan, PlanBasicSpecification} = await planModel(ConstructionCode, PlanNo);
    
    const plan = await Plan.findAll()

    let PlanBasicSpecifications = await PlanBasicSpecification.findAll()
    let basics = [];

    for (let basic of PlanBasicSpecifications){
      console.log( basic )
      
      basics.push( await BasicSpecification.findOne({ 
        include: [
          {
            model: BasicSpecificationValue,
            where: {
              BasicSpecificationId: basic.BasicSpecificationId, 
              ValueId: +basic.ValueId
            }
          }
        ],
        where: { id: basic.BasicSpecificationId } }) )
    }
  


    return plan
      
  },

  plans: (_, args) => {
    return {}
  }
};
  
export default planQueries;