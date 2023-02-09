const arg1 = process.argv[2];
const arg2 = process.argv[3];

if(!arg1 || !arg2 || 
    isNaN(arg1) || isNaN(arg2) 
    || arg2 < 0 || process.argv.length > 4){
    console.log("erreur");
} else {
    console.log(Math.pow(arg1, arg2));
}

