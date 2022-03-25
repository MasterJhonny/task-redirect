import moment from "moment";

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
                        window.open(item.url)
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

export { utils };