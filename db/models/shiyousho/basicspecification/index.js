import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize';

import BasicSpecificationValue from './basicspecificationvalue';
import BasicSpecificationCategory from './basicspecificationcategory';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/Shiyousho.db'
});

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
    }
}, {
    // Other model options go here
    tableName: 'BasicSpecifications',
    timestamps: false,
    sequelize,
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