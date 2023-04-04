// deklarasi calculatorScreen
const calculatorScreen = document.querySelector('.calculator-screen')

// untuk mengupdate number yang diklik
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
// updateScreen dijalankan
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

// menyimpan angka-angka dan operator untuk melakukan kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// agar bisa menginput angka dan mengupdate angka 0 menjadi angka yg diinput
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// fungsi untuk number agar bisa terinput
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// click event untuk operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

// mendefinisikan function inputOperator
// agar memberikan nilai yang tersimpan di currentNumber ke prevNumber
// operator diberikan ke calculationOperator as argument
// kosongkan currentNumber
const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

// mengaktifkan fungsi kalkulasi ke app calculator
// hanya satu elemen yg dipakai, jadi gunakan querySelector
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    // jalankan function calculate saat (=) diklik dan perbarui layarnya
    calculate()
    updateScreen(currentNumber)
})

//definisikan fungsi calculate
const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            // ubah angka berupa string ini menjadi integer dengan methode parseFloat
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
    }
    // perbarui variable currentNumber dengan hasil tsb
    // (nilai dari calculationOperator seharusnya kosong)
    currentNumber = result
    calculationOperator = ''
}

// untuk tombol AC
const clearButton = document.querySelector('.all-clear')

clearButton.addEventListener('click', () => {
    console.log('AC button is pressed')
})

// definisikan function clear-all dan tetapkan 0 ke currentNumber
// kosongkan 2 variable yg lain
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// jalankan func AC diklik dan update tampilan layar
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// membuat kalkulasi angka desimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
})

// mendefinisi function inputDecimal dan menambahkan titik desimal ke currentNumber
inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})