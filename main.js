let input = document.querySelector('input');
let tableDiv = document.querySelector('.table');


function multiplication() {
    var numberString = input.value;
    var number = parseFloat(numberString)
    let table = '';

    for (let i = 1; i <= 10; i++ ){
        table+= number + " x " + i +" = " + (number*i) + " <br>";
    }
    tableDiv.innerHTML = table
}


