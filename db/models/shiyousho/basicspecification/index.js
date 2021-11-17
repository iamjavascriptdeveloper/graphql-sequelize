import { DataTypes, Model } from 'sequelize';
import { shiyousho } from '../../../../config';

import BasicSpecificationValue from './basicspecificationvalue';
import BasicSpecificationCategory from './basicspecificationcategory';

class BasicSpecification extends Model{}

BasicSpecification.init({
    // Model attributes are defined here
    Id: {
        type:  DataTypes.INTEGER,
        primaryKey:true
    },
    JapaneseName: {
        type: DataTypes.TEXT,
    },
    EnglishName: {
        type: DataTypes.TEXT,
    },
    CategoryId: {
        type: DataTypes.INTEGER,
    },
    EntryTypeId: {
        type: DataTypes.INTEGER,
    }
}, {
    // Other model options go here
    tableName: 'BasicSpecifications',
    timestamps: false,
    sequelize: shiyousho,
});

BasicSpecification.hasMany( BasicSpecificationValue, {
    constraints: false,
    foreignKey: 'BasicSpecificationId',
    sourceKey: 'Id'
})

BasicSpecification.hasOne( BasicSpecificationCategory, {
    constraints: false,
    foreignKey: 'Id',
    sourceKey: 'CategoryId'
})

BasicSpecificationValue.belongsTo(BasicSpecification, {
    constraints: false,
    foreignKey: 'ValueId',
    sourceKey: 'BasicSpecificationId'
});

BasicSpecificationCategory.belongsTo( BasicSpecification, {
    constraints: false,
    foreignKey: 'Id',
    sourceKey: 'CategoryId'
})

export { 
    BasicSpecification,
    BasicSpecificationValue,
    BasicSpecificationCategory
}