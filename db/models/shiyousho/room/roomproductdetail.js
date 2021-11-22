import { DataTypes, Model } from 'sequelize';
import { shiyousho } from '../../../../config';

class RoomProductDetail extends Model{}

RoomProductDetail.init({
    // Model attributes are defined here
    TypeId: {
        type:  DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    ProductCode: {
        type:  DataTypes.TEXT,
        primaryKey:true,
        allowNull: false
    },
    Hinban:{
        type:  DataTypes.TEXT,
        primaryKey:true,
        allowNull: false
    },
    SortNo: {
        type:  DataTypes.INTEGER,    
        allowNull: false
    }
}, {
    // Other model options go here
    tableName: 'RoomProductDetails',
    timestamps: false,
    sequelize: shiyousho,
});

export default RoomProductDetail