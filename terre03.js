displayAlphabetFrom(process.argv[2]);

function displayAlphabetFrom(input) {
    var stringToDisplay = "";

    for (let i = input.charCodeAt(0); i < 123; i++){
        stringToDisplay += String.fromCharCode(i);
    }
    
    console.log(stringToDisplay);
    console.log("");
}