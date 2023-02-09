const arg = process.argv[2];
const arg2 = process.argv[3];

if(!arg && !arg.includes(" ") || arg2){
    console.log("erreur.")
} else {
    console.log(arg.length);
}