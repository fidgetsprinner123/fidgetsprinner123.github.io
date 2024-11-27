let listeSpørsmål = ["Hvem er favorittlæreren min?", "Hva er favorittfaget mitt?", "1 + 1 = ?"];
let listeSvar     = ["Øyvind",                     , "Friminuttene"];

for (let spørsmålsnummer = 0; spørsmålsnummer < listeSpørsmål.length; spørsmålsnummer++ ) {
    console.log(listeSpørsmål[spørsmålsnummer]);
    document.getElementById("spørsmål").innerText = listeSpørsmål[spørsmålsnummer];
}