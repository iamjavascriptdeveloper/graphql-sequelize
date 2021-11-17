import {port} from './config/environment';
import app from './app';

const start = async () => {

    try {
        await app.listen(port);    
        console.log(`run ${port}`)
    } catch (e) {
        console.error(e)  
    }
    
}

start()

