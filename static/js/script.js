function autoSanitize(string){
    string = string.toLocaleLowerCase();
    string = string.trim();

    return string
}

function calcoloPercentuale(percentuale, totale){
    let perc = (percentuale / totale) * 100

    return perc
}


function startQuiz(){
    let RAcounter = 0; //contatori
    let WAcounter = 0;

    let var1V = "francesco";
    let var2V = "si";
    let var3V = "bari";
    let var4V = "russia";
    let var5V = "tokyo";
    let var6V = "mattarella";
    let var7V = "australia";



    let var1 = prompt("Come si chiama il creatore di questo sito? -> ");
    while (var1 === null || var1 === "") {
        var1 = prompt("Completare il campo richiesto: ");
    }
    var1 = autoSanitize(var1)

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
    var2 = autoSanitize(var2)

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
    var3 = autoSanitize(var3)

    if (var3 === var3V) {
        RAcounter++;
        alert("Risposta esatta");
    } else {
        WAcounter++;
        alert(`Risposta sbagliata, risposta corretta: ${var3V}`);
    }



    let var4 = prompt("Qual é la nazione piú grande al mondo? -> ");
    while (var4 === null || var4 === "") {
        var4 = prompt("Completare il campo richiesto: ");
    }
    var4 = autoSanitize(var4)

    if (var4 === var4V) {
        RAcounter++;
        alert("Risposta esatta");
    } else {
        WAcounter++;
        alert(`Risposta sbagliata, risposta corretta: ${var4V}`);
    }



    let var5 = prompt("Qual é la cittá piú tecnologica del mondo? -> ");
    while (var5 === null || var5 === "") {
        var5 = prompt("Completare il campo richiesto: ");
    }
    var5 = autoSanitize(var5)

    if (var5 === var5V) {
        RAcounter++;
        alert("Risposta esatta");
    } else {
        WAcounter++;
        alert(`Risposta sbagliata, risposta corretta: ${var5V}`);
    }



    let var6 = prompt("Come si chiama il presidente della repubblica italiana? -> ");
    while (var6 === null || var6 === "") {
        var1 = prompt("Completare il campo richiesto: ");
    }
    var6 = autoSanitize(var6)

    if (var6 === var6V) {
        RAcounter++;
        alert("Risposta esatta");
    } else {
        WAcounter++;
        alert(`Risposta sbagliata, risposta corretta: ${var6V}`);
    }



    let var7 = prompt("Dove vivono i canguri? -> ");
    while (var7 === null || var7 === "") {
        var7 = prompt("Completare il campo richiesto: ");
    }
    var7 = autoSanitize(var7)

    if (var7 === var7V) {
        RAcounter++;
        alert("Risposta esatta");
    } else {
        WAcounter++;
        alert(`Risposta sbagliata, risposta corretta: ${var7}`);
    }


    let totaleDomande = 7;

    let percentualeCorrette = calcoloPercentuale(RAcounter, totaleDomande)
    let percentualeSbagliate = calcoloPercentuale(WAcounter, totaleDomande)

    console.log(`Risultato finale: ${RAcounter} risposte esatte (${percentualeCorrette.toFixed(2)}%) e ${WAcounter} risposte sbagliate (${percentualeSbagliate.toFixed(2)}%)`);
}