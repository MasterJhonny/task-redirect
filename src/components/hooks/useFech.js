import { functions } from '../functions';
import { config } from "../../config";

async function isAuthent (callback) {
    const token = functions.readCookies('auth');
    const API_URL = `${config.API_BASE_URL}users/auth/`

    if(token) {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    "authorization": token
                }
            });
            const data = await res.json();
            console.log(data)
            callback(data);
        } catch (error) {
            console.error('Ups, un error!!', error);
        }
    }
}

export { isAuthent };