const func = (arg1 = process.argv[2], am = 'AM', pm = 'PM') => {
    if(!arg1 && !arg1.include(":")){
        console.log("erreur");
    } else {
        const array = arg1.split(":");
        const hours = array[0];
        const minutes = array[1];
    
        if(array.length > 2 || hours.length > 2 || minutes.length > 2 ||
            isNaN(hours) || isNaN(minutes) ||
            minutes > 59 || hours > 24){
            console.log("erreur");
        } else {
            if(hours > 12){
                if(hours == 24){
                    console.log('00' + ':' + minutes + am);
                } else {
                    if(hours - 12 < 10){
                        console.log('0' + (hours - 12) + ":" + minutes + pm);
                    } else {
                        console.log(hours - 12 + ":" + minutes + pm);
                    }
                }
            } else {
                if(hours.length == 1){
                    console.log('0' + arg1 + am);
                } else {
                    console.log(arg1 + am);
                }
            }
        }
    }
};

func();
