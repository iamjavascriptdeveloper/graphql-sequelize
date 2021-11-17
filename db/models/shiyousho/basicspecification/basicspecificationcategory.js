import { DataTypes, Model } from 'sequelize';
import { shiyousho } from '../../../../config';

class BasicSpecificationCategory extends Model{}

BasicSpecificationCategory.init({
    // Model attributes are defined here
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    JapaneseName: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    EnglishName: {
        type: DataTypes.TEXT,
    },
}, {
    // Other model options go here
    tableName: 'BasicSpecificationCategories',
    timestamps: false,
    sequelize: shiyousho
    ,
});

export default BasicSpecificationCategory