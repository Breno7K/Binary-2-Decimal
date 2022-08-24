// getting values
let binaryNumber = document.getElementById('binary-number')
let decimalNumber = document.getElementById('decimal-number')

let convertBtn = document.getElementById('convert')

//function to convert
function convert() {

    if (isBinary(binaryNumber.value) && binaryNumber.value != '' && binaryNumber.value != undefined && binaryNumber.value != null && !binaryNumber.value.includes(" ")) {

        decimalNumber.innerHTML = parseInt(binaryNumber.value, 2)
    }
    else if (binaryNumber.value.includes(' ')) {
        alert("Spaces are not allowed.")
    }
    else {
        alert("Check if you wrote a binary number.")
    }
}

//check if string is binary
function isBinary(str) {
    let i

    for (i = 0; i < str.length; i++) {
        if (str[i] != 0 && str[i] != 1) {
            i = str.length + 1
        }
    }
    return (i == str.length) ? true : false
}

