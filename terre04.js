const input = process.argv[2];

if(isNaN(input)){
    console.log("Tu ne me la mettras pas à l’envers.");
} else {
    if(input % 2 == 0){
        console.log("Pair");
    } else {
        console.log("Impair");
    }
}