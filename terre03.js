var stringToDisplay = "";

const input = process.argv[2];

for (let i = input.charCodeAt(0); i < 123; i++){
    stringToDisplay += String.fromCharCode(i);
}

console.log(stringToDisplay);
console.log("");