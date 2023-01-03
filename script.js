// task 1
const a = 5;
const b = 10;

console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);

//task 2
// true && true = true;
// false || true = true;
// true && 'false' = 'false';
// 0 && 1 || ' ' && 42 = 42
// null == undefined = false;
// '' == 0 = true;
// 1 === '1' = false;
// NaN === NaN && true = true;
// true || false && true || false = true;
// (true || false) && (true || false) = true;
// 10 || 0 && 'dog' || '' = 10;
// (10 || 0) && ('dog' || '') = 'dog';


//task 3
const numberOne = Number(prompt("Введите первое число"));
const numberTwo = Number(prompt("Введите второе число"));

if (numberOne > numberTwo){
    alert(`Число ${numberOne} больше, чем число ${numberTwo}`);
}else if(numberTwo > numberOne){
    alert(`Число ${numberTwo} больше, чем число ${numberOne}`);
}else{
    alert("Числа равны");
}

//task 4
const firstNumder = Number(prompt("Введите первое число"));
const secondNumber = Number(prompt("Введите второе число"));
const operator = prompt("Введите математический оператор");

switch(operator){
    case "+":
        alert(firstNumder+secondNumber);
        break;
    case "-":
        alert(firstNumder-secondNumber);
        break;
    case "*":
        alert(firstNumder*secondNumber);
        break;
    case "/":
        alert(firstNumder/secondNumber);
        break;
    default:
        alert("Введен не верный оператор")
}

//task 5
const age = Number(prompt("Введите свой возраст"));
if (age < 12){
    alert("Вход запрещен")
}else if((age >=12 && age <=18) || (age >=60 && age <=80)){
    const escort = prompt("Вы в сопровождеии взрослых?");
    if(escort === "Да"){
        alert("Вход разрешен")
    }else if(escort === "Нет"){
        alert("Вход запрещен")
    }
}else if(age > 80){
    alert("Вход запрещен")
}else{
    alert("Вход разрешен")
}
