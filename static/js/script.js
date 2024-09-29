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



    let var4 = prompt("Qual é la nazione piú grande al mondo? -> ");
    while (var4 === null || var4 === "") {
        var4 = prompt("Completare il campo richiesto: ");
    }
    var4 = var4.toLocaleLowerCase();
    var4 = var4.trim();

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
    var5 = var5.toLocaleLowerCase();
    var5 = var5.trim();

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
    var6 = var6.toLocaleLowerCase();
    var6 = var6.trim();

    if (var6 === var6V) {
        RAcounter++;
        alert("Risposta esatta");
    } else {
        WAcounter++;
        alert(`Risposta sbagliata, risposta corretta: ${var6V}`);
    }



    let var7 = prompt("Come si chiama il creatore di questo sito? -> ");
    while (var7 === null || var7 === "") {
        var7 = prompt("Completare il campo richiesto: ");
    }
    var7 = var7.toLocaleLowerCase();
    var7 = var7.trim();

    if (var7 === var7) {
        RAcounter++;
        alert("Risposta esatta");
    } else {
        WAcounter++;
        alert(`Risposta sbagliata, risposta corretta: ${var7}`);
    }


    let totaleDomande = 7;
    let percentualeCorrette = (RAcounter / totaleDomande) * 100;
    let percentualeSbagliate = (WAcounter / totaleDomande) * 100;

    alert(`Risultato finale: ${RAcounter} risposte esatte (${percentualeCorrette.toFixed(2)}%) e ${WAcounter} risposte sbagliate (${percentualeSbagliate.toFixed(2)}%)`);
}