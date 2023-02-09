const args = process.argv;

args.forEach((element, index) => {
    if(index > 1){
        console.log(element);
    }
});

// ça ne marche pas dans un for ?
for (let i = 2; i < process.argv.lenght; i++){
    console.log(process.argv[i]);
}