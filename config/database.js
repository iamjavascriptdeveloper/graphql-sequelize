import { Sequelize } from 'sequelize';

const shiyousho = new Sequelize({
    dialect: 'sqlite',
    storage: './storage/Shiyousho.db'
});

export { 
    shiyousho
}