import { DataTypes, Model } from 'sequelize';
import { shiyousho } from '../../../../config';

class RoomCategory extends Model{}

RoomCategory.init({
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
}, {
    // Other model options go here
    tableName: 'RoomCategories',
    timestamps: false,
    sequelize: shiyousho,
});

export default RoomCategory