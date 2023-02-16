const func = (arg1 = process.argv[2], arg2 = process.argv[3]) => {
    if(!arg1 || !arg2 || 
        isNaN(arg1) || isNaN(arg2) 
        || arg2 < 0 || process.argv.length > 4){
        console.log("erreur");
    } else {
        let value = arg1;

        for(i = 1; i < arg2; i++){
            value *= arg1;
        };
        console.log(value);
    }
    
};

func();
