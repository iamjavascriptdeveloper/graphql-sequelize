import { DataTypes, Model } from 'sequelize';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/Shiyousho.db'
});

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
    sequelize,
});

export default BasicSpecificationCategory