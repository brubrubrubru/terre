const arg1 = process.argv[2];
const am = 'AM';
const pm = 'PM';

if(!arg1 && !arg1.include(":")){
    console.log("erreur");
} else {
    const array = arg1.split(":");
    const hours = array[0];
    const minutes = array[1];

    if(array.length > 2 || hours.length > 2 || minutes.length > 4 ||
        isNaN(hours) || !isNaN(minutes) || 
        (hours > 12 && minutes.includes(am) || hours > 11 && minutes.includes(pm))){
        console.log("erreur");
    } else {
        if(minutes.includes(am))
        {
            if(hours == 12){
                console.log("00:" + minutes.replace(am, ""));
            } else {
                console.log(hours + ":" + minutes.replace(am, ""));
            }
        }
        else if (minutes.includes(pm))
        {
            console.log(parseInt(hours) + 12 + ":" + minutes.replace(pm, ""));
        }
    }
}
