const input1 = process.argv[2];
const input2 = process.argv[3];

let value = input1 / input2;
let integer = (Math.floor(value));
let rest = input1 % input2;

if(value == 'Infinity' || rest == 'Nan' || value < 1){
    console.log("erreur.");
} else {
    console.log("Résulat : " + integer);
    console.log("Reste : " + rest);
    }