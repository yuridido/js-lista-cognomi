// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
// Consigli del giorno:
// 1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.

var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var inserimento = prompt('inserisci il tuo cognome');
var cognome = inserimento.charAt(0).toUpperCase() + inserimento.slice(1).toLowerCase();
var elenco ='';
var i = 0;
var corrispondenza = false;

//inserisco il cognome nell'array e ordino alfabeticamente
listaCognomi.push(cognome);
listaCognomi.sort();
// creo la lista nomi da stampare e la stampo
do {
    elenco = elenco + "<li>" + listaCognomi[i] + "</li>";
    i++;
} while(i < listaCognomi.length);
document.getElementById('elenco-cognomi').innerHTML = elenco;

// stampo con while
for (var j=0; j < listaCognomi.length; j++) {
    if (listaCognomi[j] == cognome) {
        var numerazione = ++j;
        j = listaCognomi.length;
    }
}
document.getElementById('posizione').innerHTML = "la posizione del tuo cognome è: "+ numerazione;

// stampo con l'indexOf
// var a = listaCognomi.indexOf(cognome) + 1;
// document.getElementById('posizione').innerHTML = "la posizione del tuo cognome è: "+ a;
