const prime = (arg1 = process.argv[2], premier = true) => {
    if(!arg1 || isNaN(arg1) 
    || arg1 < 1 || process.argv.length > 3){
    console.log("erreur");
} else {
    for(let i = 2; i < arg1; i++){
        if(arg1 % i == 0){
            premier = false;
        }
    }

    if(premier){
        console.log(arg1 + " est premier.")
    } else {
        console.log(arg1 + " n'est pas premier.")
    }
}
};

prime();