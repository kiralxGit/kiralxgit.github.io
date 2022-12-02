function callByName() {
    name = prompt("Как вас зовут?");
    alert(`Здрбавствуйте, ${name}`)
}

function calc(o) {
    num1 = +document.getElementById("num1").value;
    num2 = +document.getElementById("num2").value;

    switch (true) {
        case o === '+': result = num1 + num2; break;
        case o === '-': result = num1 - num2; break;
        case o === '*': result = num1 * num2; break;
        case o === '/' && num2 === 0: result = "/ на ноль"; break;
        case o === '/': result = num1 / num2; break;
    }

    document.getElementById("result").value = result;
}
