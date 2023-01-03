/* task 1
Дана пара переменных:

const a = 5;
const b = 10;
Проведите все доступные в JS математические операции с этими переменными (+, -, /, *). Результат каждой операции выведите в консоль. Подпишите каждое значение, что бы было понятно, чем является каждое значение в консоли.

P.S. Всегда подписывайте значения, которые выводите в консоль. Это хорошая привычка, которая поможет вам не путаться в будущем.
const a = 5;
const b = 10;
*/

console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);

/*task 2
Без запуска кода ответьте, какое значение будет результатом каждого из выражений ниже, а также напишите, является это значние правдивым или ложным.*/

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


/*task 3
Спросить с помощью prompt у пользователя 2 числа и записать их в переменные.
Сравнить полученные числа.
С помощью alert вывести на экран сообщение о том, какое число больше. Если числа равны - сообщить что числа равны
Например:

Пользователь ввел числа 2 и 5 - вывести на экран сообщение Число 5 больше, чем число 2
Пользователь ввел числа 10 и 10 - вывести на экран сообщение Числа равны
Подсказка: Воспользуйтесь условным оператором if. Для того что бы вывести итоговое сообщение, вам понадобится конкатенация строк. Если интересно, почитайте про синтаксис шаблонных строк в js и воспользуйтесь им вместо конкатенации.
*/
const numberOne = Number(prompt("Введите первое число"));
const numberTwo = Number(prompt("Введите второе число"));

if (numberOne > numberTwo){
    alert(`Число ${numberOne} больше, чем число ${numberTwo}`);
}else if(numberTwo > numberOne){
    alert(`Число ${numberTwo} больше, чем число ${numberOne}`);
}else{
    alert("Числа равны");
}

/*task 4
Реализовать калькулятор используя prompt и alert.

Последовательно спросить у пользователя два числа и желаемое действие.
Действия могут быть следующие: + - / *
Выполнить математическую операцию с полученными значениями.
Результат показать пользователю
Подсказка: В данном задании используйте оператор switch case
*/
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

/*task 5
Напишите простую программу допуска посетителей на американские горки. Необходимо спросить у пользователя возраст, далее проанализровать и дать ему ответ о допуске на аттракцион.

Возможные варианты:

пенисионерам (60-80 лет) и подросткам (12-18 лет) доступ разрешен с разрешения взрослых. По этому если возраст посетителя находится в указанных возрастных диапазонах, то нужно дополнительно спросить его о разрешении от взрослых.
взрослым вход разрешен
детям и очень пожилым людям вход запрещен
Подсказка: для обработки первого варианта вы можете использовать условный оператор if внутри другого, то есть воспользоваться вложенной конструкцией.
*/
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
