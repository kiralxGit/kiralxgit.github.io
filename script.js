function callByName() {
    let name = prompt("Как вас зовут?");
    alert(`Здравствуйте, ${name}`)
}

function calc(operation) {
    num1 = +document.getElementById("num1").value;
    num2 = +document.getElementById("num2").value;

    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': num2 === 0 ? result = "/ на ноль" : result = num1 / num2;
    }

    document.getElementById("result").value = result;
}
