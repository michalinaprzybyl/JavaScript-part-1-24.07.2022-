// Ćwiczenie 17: Napisz program, który pobierze od użytkownika informacje o jego wieku, a następnie
// wyświetli w zależności od wieku komunikat:
// a. jeśli wiek jest mniejszy od 25, wyświetl “Hey”;
// b. jeśli wiek jest większy lub równy 25 i mniejszy od 50, wyświetl “Hello”;
// c. w przeciwnym przypadku wyświetl "Hi".

let age = parseInt(prompt("Enter your age"));

if (age < 25) {
    console.log("Hey");
} else if (25 <= age && age < 50) {
    console.log("Hello");
} else {
    console.log("Hi");
}
