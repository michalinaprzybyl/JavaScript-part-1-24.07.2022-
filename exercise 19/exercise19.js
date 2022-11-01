// Ćwiczenie 19: Napisz pętlę, która wyświetla liczby parzyste od 0 do 10.

// 1st method
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 2nd method
for (let i = 0; i <= 10; i = i + 2) {
    console.log(i);
}