import { DataTypes, Model } from 'sequelize';
import {connectDB} from '../index'

const PlanModel = async (ConstructionCode, PlanNo) => {

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
        timestamps: false,
        sequelize,
    });

    return Plan
}


export default PlanModel