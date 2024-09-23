let RAcounter = 0 //contantori
let WAcounter = 0

let var1V = "francesco"
let var2V = "si"
let var3V = "bari"

let var1 = prompt("Come si chiama il creatore di questo sito? -> ")
if(var1 === null) {
    // codice da eseguire se la condizione è vera
    while(var1 === null)
    {
        var1 = prompt("completa il campo richiesto: ")
    }
}
var1 = var1.toLocaleLowerCase()
var1 = var1.trim()

if(var1 === var1V){
    RAcounter++
    alert("risposta esatta")
}
else{
    WAcounter++
    alert("risposta sbagliata, versione corretta: ", + var1V)
}



let var2 = prompt("Prof. Mastrandrea è il migliore? (si/no) -> ")
if(var2 === null) {
    // codice da eseguire se la condizione è vera
    while(var2 === null)
    {
        var2 = prompt("completa il campo richiesto: ")
    }
}
var2 = var2.toLocaleLowerCase()
var2 = var2.trim()

if(var2 === var2V){
    RAcounter++
    alert("risposta esatta")
}
else{
    WAcounter++
    alert("risposta sbagliata, versione corretta: ", + var2V)
}



let var3 = prompt("In che provincia si trova Bitritto? -> ")
if(var3 === null) {
    // codice da eseguire se la condizione è vera
    while(var3 === null)
    {
        var3 = prompt("completa il campo richiesto: ")
    }
}
var3 = var3.toLocaleLowerCase()
var3 = var3.trim()

if(var3 === var3V){
    RAcounter++
    alert("risposta esatta")
}
else{
    WAcounter++
    alert("risposta sbagliata, versione corretta: ", + var3V)
}