function getAge(inputString){
    return Number(inputString.substring(0,1))
}

// Una forma mucho mas interesante de hacerlo es con parseInt, ya que solo devolvera el entero
function getAge(inputString){
    return parseInt(inputString);
}

console.log(getAge("4 years old"))
