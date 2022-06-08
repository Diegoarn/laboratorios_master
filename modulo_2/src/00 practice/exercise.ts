console.log("************** PRACTICE *********************");
console.log("Use folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");
// // letra más larga

function biggestWord(phrase) {
    var phraseArray = phrase.split(" ");
    var longestWord = 0;
    var phraseValue = "";
    for (var i = 0; i < phraseArray.length; i++) {
        if (phraseArray[i].length > longestWord) {
            longestWord = phraseArray[i].length;
            phraseValue = phraseArray[i];
        }
    }
    return phraseValue;
}
console.log("La letra más larga es: " + biggestWord("Esta frase puede contener muchas palabras"));

// // valores

const eso2o = {
    David: 9,
    Maria: 9,
    Jose: 8,
    Juan: 10,
    Blanca: 9,
    Carmen:9,
};

function printAverage(eso2o) {
    var valores:any = Object.values(eso2o);
    var sum = 0;
    var nota:any = 0;
    for (var i = 0; i < valores.length; i++) {
        nota = (sum += valores[i]) / valores.length;
        if (nota === 10) {
            nota = "Matrícula de honor"
        }
        if (nota >= 9 && nota < 10 ) {
            nota = "Sobresaliente"
        }
        if (nota >= 7 && nota < 9) {
            nota = "Notable"
        }
        if (nota >= 6 && nota < 7) {
            nota = "Bien"
        }
        if (nota >= 5 && nota < 6) {
            nota = "Sufuciente"
        }
        if (nota >= 4 && nota < 5) {
            nota = "Insuficiente"
        }
        if (nota < 4) {
            nota = "Muy deficiente"
        }
    }
    return nota;

}
console.log("Nota media de la clase: " + printAverage(eso2o));
