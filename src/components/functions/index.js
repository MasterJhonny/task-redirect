import moment from "moment";
import { toast } from 'react-toastify';

const utils = {
    runAlarma: function validateAlarm(list) {

        const duration = list.map((item) => {
            const dateAlarm = moment(item.time, 'hh:mm');
            const dateToday = moment()
            const dayToday = dateToday.day()
            const diferencia = dateAlarm.diff(dateToday)

            if (item.days.includes(dayToday)) {

                if(diferencia > 0) {
                    setTimeout(() => {
                        window.open(item.url,"view","width=1920,height=1080")
                    }, diferencia)
        
                } else {
                    console.warn('Today nott alarm!!')
                }
                return {
                    ...item,
                    diferencia,
                    id: item._id,
                } 
            } else {
                return {
                    ...item,
                    diferencia: null,
                    id: item._id,
                } 
            }
            
        })
        return duration;
    }    
}


const functions = {
    saveCookies: function(name, token) {
        const date =  new Date(Date.now() + 360 * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${token};expires=${date}`;
    },
    readCookies: function(name) {
        const cookies = document.cookie.split(';');
        const verifyCookie = cookies.find(item  => item.includes(name));
        if(!verifyCookie) {
          return false;  
        }
        return verifyCookie.replace(`${name}=`, '');
    },
    deleteCookies: function() {
        document.cookie = 'auth=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
}

// funcion para copiar enlace en el potapapeles
const copyToClipBoard = (link) => {
    navigator.clipboard.writeText(link)
        .then(() => {
        toast.success("se copio el enlace!", {
            autoClose: 1500,
            pauseOnHover: false,
            hideProgressBar: true
        })
    })
        .catch(err => {
        console.log('Something went wrong', err);
        toast.error("no se copio!", {
            autoClose: 1500,
            pauseOnHover: false,
            hideProgressBar: true
        })
    })
}


export { utils, functions, copyToClipBoard };