displayArgs();

function displayArgs(){
    const args = process.argv;

    args.forEach((element, index) => {
        if(index > 1){
            console.log(element);
        }
    });
}

