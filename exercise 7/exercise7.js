// Ćwiczenie 7: Dany jest tekst: "Lorem ipsum dolor sIt amet, consecTetur adipiscing elit, sed do eiusmod 
// tempor". Utwórz zmienną, której wartość będzie równa 5, 10, 15, 20 i 25 znaku z tekstu.

let text = "Lorem ipsum dolor sIt amet, consecTetur adipiscing elit, sed do eiusmod tempor";

// 1st method
console.log(text[5], text[10], text[15], text[20], text[25]);

// 2nd method
let fiveSigns = text[5] + text[10] + text[15] + text[20] + text[25]; //konkatenacja stringów
console.log(fiveSigns);