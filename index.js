import {port} from './config/environment';
import app from './app';
import {shiyoushoConnect} from './db';

const start = async () => {

    try {
        await shiyoushoConnect()
        await app.listen(port);    
        console.log(`run ${port}`)
    } catch (e) {
        console.error(e)  
    }
    
}

start()

