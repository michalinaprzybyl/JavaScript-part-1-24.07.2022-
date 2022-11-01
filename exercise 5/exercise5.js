// Ćwiczenie 5: Dany jest tekst: "Lorem ipsum dolor sIt amet, consecTetur adipiscing elit, sed do eiusmod 
// tempor". Napisz skrypt, który wyświetli słowo "amet" z powyższego tekstu. Napisz to w taki sposób, aby 
// zmiana tekstu do wyświetlania wymagała minimalnej modyfikacji skryptu. 

let text = "Lorem ipsum dolor sIt amet, consecTetur adipiscing elit, sed do eiusmod tempor";

let a = text.indexOf("amet");
let b = a + 4;
console.log(text.substring(a, b));
