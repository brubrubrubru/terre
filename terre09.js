const arg1 = process.argv[2];
if(!arg1 || isNaN(arg1) 
    || arg1 < 0 || process.argv.length > 3){
    console.log("erreur");
} else {
    console.log(Math.sqrt(arg1));
}