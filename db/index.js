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

export {
    connectDB
}