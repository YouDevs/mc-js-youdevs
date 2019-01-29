// ámbito global!
let n1 = 10;

function suma(n2) {
    // ámbito local!
    let n1 = 20;
    return n1 + n2;
}

console.log(suma(3));
console.log(n1);
