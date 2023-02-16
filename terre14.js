const func = () => {

    let sorted = true;
    let error = false;

    for(let i = 2; i < process.argv.length; i++ )
    {

        if(isNaN(process.argv[i]))
        {
            error = true;
            break;
        }

        if(parseInt(process.argv[i]) > parseInt(process.argv[i + 1]))
        {
            sorted = false;
            break;
        }
    }

    if(error)
    {
        console.log("Erreur.");
    } else 
    {
        if(sorted)
        {
            console.log("Triés.");
        } else 
        {
            console.log("Pas trié.");
        } 
    }

};

func();

