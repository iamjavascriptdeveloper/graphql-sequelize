import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/Shiyousho.db'
});

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
    sequelize,
});

export default BasicSpecificationValue