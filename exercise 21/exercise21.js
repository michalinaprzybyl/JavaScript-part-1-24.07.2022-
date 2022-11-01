// Ćwiczenie 21: Napisz program, który będzie pytał użytkownika o hasło tak długo, aż użytkownik nie
// poda poprawnego hasła.

let password = "butter";

// 1st method
let passUser = "";
do {
    passUser = prompt("Enter password here");
} while (passUser !== password);

// 2nd method
do {
    password = prompt("Enter password here");
} while (password !== "butter"); 
