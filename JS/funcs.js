import { randLib } from "./JSONS.js";
import { tobe } from "./JSONS.js";
import { pronouns } from "./JSONS.js";
import { nationality } from "./JSONS.js";
import { professions } from "./JSONS.js";
import { allWords } from "./JSONS.js";
import { numbers } from "./JSONS.js";
import { possessivePronouns } from "./JSONS.js";
import { family } from "./JSONS.js";



// let randLib1 = randLib

export function getRandomElenent (a) {
    if (a == 0) {
        let min = Math.ceil(1);
        let max = Math.floor(30);
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randInt);
        return randLib[randInt]
    }
    if (a == 1) {
        let min = Math.ceil(1);
        let max = Math.floor(9);
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randInt);
        return randLib[randInt]
    }
    if (a == 2) {
        let min = Math.ceil(10);
        let max = Math.floor(16);
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randInt);
        return randLib[randInt]
    }
    if (a == 3) {
        let min = Math.ceil(17);
        let max = Math.floor(25);
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randInt);
        return randLib[randInt]
    }
    if (a == 4) {
        let min = Math.ceil(26);
        let max = Math.floor(30);
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randInt);
        return randLib[randInt]
    }
    if (a == 5) {
        let min = Math.ceil(31);
        let max = Math.floor(58);
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randInt);
        return randLib[randInt]
    }
    if (a == 6) {
        let min = Math.ceil(59);
        let max = Math.floor(66);
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randInt);
        return randLib[randInt]
    }
    if (a == 7) {
        let min = Math.ceil(67);
        let max = Math.floor(88);
        let randInt = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randInt);
        return randLib[randInt]
    }
}
// getRandomNum(1)
export function getAnswerToEl(a, b) {
    if (b == 0) {
        return allWords[a]
    }
    if (b == 1) {
        return pronouns[a]
    }
    if (b == 2) {
        return tobe[a]
    }
    if (b == 3) {
        return nationality[a]
    }
    if (b == 4) {
        return professions[a]
    }
    if (b == 5) {
        return numbers[a]
    }
    if (b == 6) {
        return possessivePronouns[a]
    }
    if (b == 7) {
        return family[a]
    }
}

export function capitalize (str) {
    let word = ''
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            word += str[i].toUpperCase()
        } else {
            word += str[i].toLowerCase()
        }
    }
    return word
}


answer.onkeydown = function entr(e) {
    // console.warn(e);
    if (e.key == "Enter"){
        btn.click()
    }
}

export function getTruthOrLie(a, b, c){
    let answersObj = getAnswerToEl(a, b).toLowerCase().split(", ")
    c = c.toLowerCase()

    return answersObj.includes(c)
}