// This is the only file you will need to edit!
// Follow the instructions to define each function and complete the requirements.
function kmToMiles(number) {
    let miles = number;
    let km = ((miles / 8) * 5);
    return Math.floor(km)
}

function countLetters(sentence, character) {
    let characterCount = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (character === sentence[i]) {
            characterCount++
        }
    }
    return characterCount
}



function rightToVote(object) {
    let age = object.age
    typeof age;
    
    if (typeof age !== 'number') {
        throw 'error'
    }

    if (age >= 18) {
        return true
    }
    
    if (age < 18) {
        return false
    }

    
}