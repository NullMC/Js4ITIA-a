let RAcounter = 0; //contatori
let WAcounter = 0;

let var1V = "francesco";
let var2V = "si";
let var3V = "bari";

let var1 = prompt("Come si chiama il creatore di questo sito? -> ");
while (var1 === null || var1 === "") {
    var1 = prompt("Completare il campo richiesto: ");
}
var1 = var1.toLocaleLowerCase();
var1 = var1.trim();

if (var1 === var1V) {
    RAcounter++;
    alert("Risposta esatta");
} else {
    WAcounter++;
    alert(`Risposta sbagliata, risposta corretta: ${var1V}`);
}

let var2 = prompt("Prof. Mastrandrea è il migliore? (si/no) -> ");
while (var2 === null || var2 === "") {
    var2 = prompt("Completare il campo richiesto: ");
}
var2 = var2.toLocaleLowerCase();
var2 = var2.trim();

if (var2 === var2V) {
    RAcounter++;
    alert("Risposta esatta");
} else {
    WAcounter++;
    alert(`Risposta sbagliata, risposta corretta: ${var2V}`);
}

let var3 = prompt("In che provincia si trova Bitritto? -> ");
while (var3 === null || var3 === "") {
    var3 = prompt("Completare il campo richiesto: ");
}
var3 = var3.toLocaleLowerCase();
var3 = var3.trim();

if (var3 === var3V) {
    RAcounter++;
    alert("Risposta esatta");
} else {
    WAcounter++;
    alert(`Risposta sbagliata, risposta corretta: ${var3V}`);
}