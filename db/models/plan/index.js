import { DataTypes, Model } from 'sequelize';
import {connectDB} from '../../index';

const planModel = async (ConstructionCode, PlanNo) => {

    const sequelize = await connectDB(ConstructionCode, PlanNo)

    class Plan extends Model{}
    
    Plan.init({
        // Model attributes are defined here
        ConstructionCode: {
            type: DataTypes.STRING(12),
            allowNull: false,
            primaryKey: true
        },
        PlanNo: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        ConstructionName: {
            type: DataTypes.STRING(50),    
        }
    }, {
        // Other model options go here
        tableName: "Plans",
        timestamps: false,
        sequelize,
    });

    class PlanBasicSpecification extends Model{}
    

    PlanBasicSpecification.init({
        
        ConstructionCode: {
            type: DataTypes.STRING(12),
            allowNull: false,
            primaryKey: true
        },
        PlanNo: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        BasicSpecificationId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        ValueId: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'Value'
        }
        
    }, {
        tableName: "PlanBasicSpecifications",
        timestamps: false, 
        sequelize,
    })

    return {
        Plan,
        PlanBasicSpecification
    }

}


export {
    planModel
}