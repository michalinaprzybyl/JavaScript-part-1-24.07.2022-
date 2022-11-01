// Ćwiczenie 16: Ten oto kod symuluje rzut kostką do gry: int result = (int) (Math.random() * 6 + 1).
// Wyświetl informację, czy wynik jest parzysty, czy nieparzysty. Jeśli wyrzucono wartość 6, napisz 
// WYGRAŁEŚ, zamiast parzysty.

let k = Math.floor(Math.random() * (7 - 0) + 0);

// 1st method
if (k !== 6) {
    if (k % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
} else {
    console.log("YOU WIN");
}

// 2nd method
if (k % 2 === 0 && k !== 6) {
    console.log("The number is even");
} else if (k % 2 === 1 && k !== 6) {
    console.log("The number is odd");
}

if (k === 6) {
    console.log("YOU WIN");
}

// 3rd method
if (k === 6) {
    console.log("YOU WIN");
} else if (k % 2 === 1) {
    console.log("The number is odd");
} else {
    console.log("The number is even");
}
