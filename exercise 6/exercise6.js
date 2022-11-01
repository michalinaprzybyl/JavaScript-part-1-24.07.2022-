// Ćwiczenie 6: Dany jest tekst: "Lorem ipsum dolor sIt amet, consecTetur adipiscing elit, sed do eiusmod 
// tempor". Wyświetl 6 liter od końca.

let text = "Lorem ipsum dolor sIt amet, consecTetur adipiscing elit, sed do eiusmod tempor";

console.log(text.length - 6); //79 znaków - 6 = 73 znaki, czyli 72 index
let findtext = text.substring(text.length - 6);
console.log(findtext);
