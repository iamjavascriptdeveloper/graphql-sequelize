import {BasicSpecification, BasicSpecificationCategory, BasicSpecificationValue} from "../../../db/models/shiyousho"

const planQueries = {
  BasicSpecification: async (_, args) => {

    const basicSpecification = await BasicSpecification.findOne({
      include: [
        {
          model: BasicSpecificationValue
        },
        {
          model: BasicSpecificationCategory
        }
      ]
    })

    return basicSpecification 
  },

  BasicSpecifications: async (_, args) => {
    
  }
};
  
export default planQueries;