function func(arg1, arg2, arg3){
    if(isNaN(arg1) || isNaN(arg2) || isNaN(arg3))
{
    console.log("erreur");
} else {    

    arg1 = parseInt(arg1);
    arg2 = parseInt(arg2);
    arg3 = parseInt(arg3);
    if((arg1 > arg2 && arg1 < arg3) || (arg1 > arg3 && arg1 < arg2)) 
    {
        console.log(arg1);
    } else if ((arg2 > arg1 && arg2 < arg3) || (arg2 > arg3 && arg2 < arg1))
    {
        console.log(arg2);
    } else if ((arg3 > arg2 && arg3 < arg1) || (arg3 > arg1 && arg3 < arg2)) 
    {
        console.log(arg3);
    } else 
    {
        console.log("erreur");
    }
}
}

func(process.argv[2], process.argv[3], process.argv[4]);
