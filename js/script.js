var nome = prompt('Quale è il tuo nome?');
var cognome = prompt('Quale è il tuo cognome?');
var colore = prompt('Quale è il tuo colore preferito?');

var messaggio = nome + cognome + colore + '27';

document.getElementById('risultato').innerHTML = messaggio;
