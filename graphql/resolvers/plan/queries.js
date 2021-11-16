import { planModel }from "../../../db/models"

const planQueries = {
  plan: async (_, args) => {

    const { ConstructionCode, PlanNo} = args
  
    const Plan = await planModel(ConstructionCode, PlanNo);
    
    return await Plan.findOne()
  },

  plans: (_, args) => {
    return {}
  }
};
  
export default planQueries;