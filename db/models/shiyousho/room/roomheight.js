import { DataTypes, Model } from 'sequelize';
import { shiyousho } from '../../../../config';

class RoomHeight extends Model{}

RoomHeight.init({
    // Model attributes are defined here
    RoomId: {
        type:  DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    MethodId: {
        type:  DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    Kanabakari:{
        type:  DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    Floor: {
        type:  DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    Height: {
        type:  DataTypes.REAL,    
        allowNull: false
    }
}, {
    // Other model options go here
    tableName: 'RoomHeights',
    timestamps: false,
    sequelize: shiyousho,
});

export default RoomHeight