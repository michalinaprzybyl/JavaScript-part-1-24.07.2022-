// Ćwiczenie 15: Pobierz od użytkownika dwie liczby i wyświetl kolejno sumę, różnicę,
// iloczyn i iloraz.

let sign = prompt("Write what kind of operation do you want to perform (+ or - or * or /)");
let i = parseFloat(prompt("Enter 1st number"));
let j = parseFloat(prompt("Enter 2nd number"));

if (sign === "+") {
    console.log(i + j);
} else if (sign === "-") {
    console.log(i - j);
} else if (sign === "*") {
    console.log(i * j);
} else if (sign === "/") {
    if (j !== 0) {
        console.log(i / j);
    }
    else {
        console.log("We do not divide by 0");
    }
} else {
    console.log("There is no such operation");
}