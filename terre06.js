const func = (input = process.argv[2]) => {
    if(input){

        let output = "";
    
    
        for(var e in input){
            output = input[e] + output;
        }
    
        console.log('"' + output + '"');
    }
};

func();