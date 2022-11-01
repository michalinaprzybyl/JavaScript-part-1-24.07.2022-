// Ćwiczenie 18: Napisz program konwertujący czas na godziny. Użytkownik wprowadza wartość, a
// następnie określa czy wprowadzona wartość to: sekundy, minuty, godziny, dni, tygodnie, 
// miesiące (zakładamy, że miesiąc ma 30 dni), lata (zakładamy, że rok ma 365 dni). Program 
// wyświetla ile to jest w godzinach.

let time = parseInt(prompt("Enter the time value"));
let unit = prompt("Specify the unit of time: 1. seconds, 2. minutes, 3. hours, 4. days, 5. weeks, 6. months, 7. years.");

// IF ... ELSE method
if (unit === "1" || unit === "seconds") {
    console.log(time * (1 / 3600) + " h");
} else if (unit === "2" || unit === "minutes") {
    console.log(time * (1 / 60) + " h");
} else if (unit === "3" || unit === "hours") {
    console.log(time + " h");
} else if (unit === "4" || unit === "days") {
    console.log(time * 24 + " h");
} else if (unit === "5" || unit === "weeks") {
    console.log(time * 24 * 7 + " h");
} else if (unit === "6" || unit === "months") {
    console.log(time * 24 * 30 + " h");
} else if (unit === "7" || unit === "years") {
    console.log(time * 24 * 365 + " h");
} else {
    console.log("Incorrect choice");
}

// SWITCH method
switch (unit) {
    case "1":
    case "seconds":
        console.log(time * (1 / 3600) + " h");
        break;
    case "2":
    case "minutes":
        console.log(time * (1 / 60) + " h");
        break;
    case "3":
    case "hours":
        console.log(time + " h");
        break;
    case "4":
    case "days":
        console.log(time * 24 + " h");
        break;
    case "5":
    case "weeks":
        console.log(time * 24 * 7 + " h");
        break;
    case "6":
    case "months":
        console.log(time * 24 * 30 + " h");
        break;
    case "7":
    case "years":
        console.log(time * 24 * 365 + " h");
        break;
    default:
        console.log("Incorrect choice");
        break;
}