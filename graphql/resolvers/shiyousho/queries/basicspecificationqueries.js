import {
    BasicSpecification, 
    BasicSpecificationCategory, 
    BasicSpecificationValue, 
  } from "../../../../db/models/shiyousho"

  const basicSpecificationQueries = {
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
       const basicspecifications = await BasicSpecification.findAll({
        include: [
          {
            model: BasicSpecificationValue
          },
          {
            model: BasicSpecificationCategory
          }
        ]  
       })

       return basicspecifications
      } 
  }

  export default basicSpecificationQueries