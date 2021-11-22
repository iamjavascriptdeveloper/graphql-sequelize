import { DataTypes, Model } from 'sequelize';
import { shiyousho } from '../../../../config';

import RoomCategory from './roomcategory';
import RoomHeight from './roomheight';
import RoomProduct from './roomproduct';
import RoomProductDetail from './roomproductdetail';

class Room extends Model{}

Room.init({
    // Model attributes are defined here
    Id: {
        type:  DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    JapaneseName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    EnglishName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ShiyoushoName:{
        type: DataTypes.TEXT,
    },
    CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SortNo: {
        type: DataTypes.INTEGER
    },
    ColorR: {
        type: DataTypes.INTEGER,
        allowNull: false   
    },
    ColorG: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ColorG: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ShowName: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    ShowJyo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Comment: {
        type: DataTypes.TEXT  
    },
    NeedFlooring: {
        type: DataTypes.BOOLEAN,
        allowNull: false    
    },
    NeedWall: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    NeedCeiling: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    WithOuterWall: {
        type: DataTypes.BOOLEAN,
    },
    IsKyoshitsu: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    DeletedDate: {
        type: DataTypes.DATE,
    }
}, {
    // Other model options go here
    tableName: 'Rooms',
    timestamps: false,
    sequelize: shiyousho,
});

Room.hasOne( RoomCategory, {
    constraints: false,
    foreignKey: 'Id',
    sourceKey: 'CategoryId'
})

RoomCategory.belongsTo( Room, {
    constraints: false,
    foreignKey: 'Id',
    sourceKey: 'CategoryId'
})

Room.hasMany( RoomHeight, {
    constraints: false,    
    foreignKey: 'RoomId',
    sourceKey: 'Id'
})

RoomHeight.belongsTo( Room, {
    constraints: false,
    foreignKey: 'RoomId',
    sourceKey: 'Id'
})

RoomHeight.hasMany( RoomProduct, {
    constraints: false,    
    foreignKey: 'TypeId',
    sourceKey: 'MethodTypeId'  
})

RoomProduct.belongsTo( RoomHeight, {
    constraints: false,    
    foreignKey: 'TypeId',
    sourceKey: 'MethodTypeId'     
})

RoomProduct.hasMany( RoomProductDetail, {
    constraints: false, 
    foreignKey: 'TypeId',
    sourceKey: 'TypeId'     
})

RoomProductDetail.belongsTo( RoomProduct, {
    constraints: false,    
    foreignKey: 'TypeId',
    sourceKey: 'TypeId'      
})

export {
    Room,
    RoomCategory,
    RoomHeight,
    RoomProduct,
    RoomProductDetail
}