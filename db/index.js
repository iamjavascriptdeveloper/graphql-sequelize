import { Sequelize } from 'sequelize';

const connectDB = async (ConstructionCode, PlanNo) => {

    try {

        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: `./storage/plans/${ConstructionCode}-${PlanNo}-.db`
        });

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        return sequelize;
    } catch (e) {
        throw new Error(e);
    }

}

const sequelizeShiyousho = new Sequelize({
    dialect: 'sqlite',
    storage: './db/Shiyousho.db'
});

const shiyoushoConnect = async () => {

    try {
            
        await sequelizeShiyousho.authenticate();
        console.log('Shiyousho connection has been established successfully.');
        
    } catch (e) {
        throw new Error(e)
    }

    return sequelizeShiyousho
}

export {
    shiyoushoConnect,
    sequelizeShiyousho,
    connectDB
}