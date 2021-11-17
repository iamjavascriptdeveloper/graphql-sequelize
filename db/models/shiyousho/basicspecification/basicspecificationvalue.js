import { DataTypes, Model } from 'sequelize';
import { shiyousho } from '../../../../config';

class BasicSpecificationValue extends Model{}

BasicSpecificationValue.init({
    // Model attributes are defined here
    BasicSpecificationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    ValueId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    JapaneseValue: {
        type: DataTypes.TEXT,
    },
    EnglishValue: {
        type: DataTypes.TEXT,
    },
}, {
    // Other model options go here
    tableName: 'BasicSpecificationValues',
    timestamps: false,
    sequelize: shiyousho
});

export default BasicSpecificationValue