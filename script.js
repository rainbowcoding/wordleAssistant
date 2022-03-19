function sort() {
    let word = document.getElementById("word").value.toLowerCase();
    let emojis = document.getElementById("emojis").value.toLowerCase();


    for (let i = 0; i < 5; i++) {
        let letter = word.charAt(i);


        let emoji = emojis.charAt(i);

        console.log(letter);
        console.log(emoji);

        if (emoji == "g") {
            sortGreen(letter, i);
        }
        if (emoji == "y") {
            sortYellow(letter, i);
        }
        if (emoji == "b") {
            let amtLetters = new RegExp(letter, 'g');
            let count = word.match(amtLetters).length;
            if (count > 1) {
                for (let x = 0; x < 5; x++) {
                    if ((word.charAt(x) == letter) && (x != i)) {
                        if (emojis.charAt(x) == "b") {
                            sortGrey(letter, i);
                        }
                    }
                }
            } else {
                console.log("sorted grey");
                sortGrey(letter, i);
            }
        }
    }

    viewWords();

}

function viewWords() {
    //from https://joshtronic.com/2022/02/20/how-to-display-a-javascript-array-in-html tysm <3
    document.getElementById("output").innerHTML = "<i>Possible amount of words left: " + possible.length + "</i>" + `<ul>${possible.map((item) => "" + `<li>${item}</li>`).join('')}</ul>` + "<b>This is the end of the list. </b>";
}






//all the scrabble words
words = words;

//split the list of words into an array
words = words.split(" ");
let possible = words;


//sort all the words with grey letters and delete them
function sortGrey(letter, spot) {
    let i = possible.length;
    //repeat this for evey word that can still be a possible answer, backwards loop so the program goes through all the letters and can delete them without bugs
    while (i--) {
        if (possible[i].includes(letter)) {
            possible.splice(i, 1);
        }
    }
}

//sort all the words with yellow letters and delete the ones that don't contain any of the yellow letters, delete all the words with the yellow letters in the wrong spot
function sortYellow(letter, spot) {
    let i = possible.length;
    //repeat this for evey word that can still be a possible answer, backwards loop so the program goes through all the letters and can delete them without bugs
    while (i--) {
        if (possible[i].charAt(spot) == letter) {
            possible.splice(i, 1);
        }
    }
    i = possible.length;
    while (i--) {
        if (!possible[i].includes(letter)) {
            possible.splice(i, 1);
        }
    }
}

//delete all the words where the green letter isn't in the right spot
function sortGreen(letter, spot) {
    let i = possible.length;
    //repeat this for evey word that can still be a possible answer, backwards loop so the program goes through all the letters and can delete them without bugs
    while (i--) {
        if (possible[i].charAt(spot) !== letter) {
            possible.splice(i, 1);
        }
    }
}
