// Ćwiczenie 9: Dany jest tekst: "Lorem ipsum dolor sIt amet, consecTetur adipiscing elit, sed do eiusmod 
// tempor". Zamień wszystkie wielkie litery na znak X.

let text = "Lorem ipsum dolor sIt amet, consecTetur adipiscing elit, sed do eiusmod tempor";

text = text.replace("L", "X");
text = text.replace("I", "X");
text = text.replace("T", "X");
console.log(text);