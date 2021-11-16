import express from 'express';
import graphqlServer from './graphql'

const app = express();

const start = async () => {

    await graphqlServer.start()

    graphqlServer.applyMiddleware({
        app,
    }); 

}

start()

export default app;