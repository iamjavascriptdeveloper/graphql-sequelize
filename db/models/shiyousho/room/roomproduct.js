import { DataTypes, Model } from 'sequelize';
import { shiyousho } from '../../../../config';

import RoomProductDetail  from './roomproductdetail';

class RoomProduct extends Model{}

RoomProduct.init({
    // Model attributes are defined here
    TypeId: {
        type:  DataTypes.INTEGER,
        references: {
            model: RoomProductDetail,
            key: 'TypeId'
        },
        primaryKey:true,
        allowNull: false
    },
    ProductCode: {
        type:  DataTypes.TEXT,
        primaryKey:true,
        allowNull: false
    },
    JapaneseName:{
        type:  DataTypes.TEXT,
        allowNull: false
    },
    EnglishName: {
        type:  DataTypes.TEXT,
        allowNull: false
    },
    SortNo: {
        type:  DataTypes.INTEGER,    
        allowNull: false
    }
}, {
    // Other model options go here
    tableName: 'RoomProducts',
    timestamps: false,
    sequelize: shiyousho,
});

export default RoomProduct