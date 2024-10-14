// Задание 1: Определение функций (Function Declaration)

let userName = "Николай";

function greet(name) {
    console.log(`Привет, ${name}!`);
}

greet(userName);

// Задание 2: Function Expression

const multiply = function(a, b) {
    return a * b;
};

let result = multiply(6, 5);
console.log(result);

// Задание 3: Анонимные функции

(function() {
    console.log("Анонимная функция вызвана!");
})();


// Задание 4: Самовызывающаяся функция (IIFE)

(function() {
    console.log("IIFE выполнена");
})();

// Задание 5: Вложенные функции

function outer() {
    function inner() {
        return "Внутренняя функция";
    }
    return inner();
}

let message = outer();
console.log(message); 


// Задание 6: Привязка функции к контексту (bind)

const person = {
    name: 'Стас',
    sayName: function() {
        console.log(this.name);
    }
};

const boundSayName = person.sayName.bind(person);

boundSayName(); 

// Задание 7: Замыкания

function counter() {
    let count = 0; 
    return function() {
        count++; 
        console.log(count);
    };
}

let count = counter();
count();
count(); 

// Задание 8: Передача функции в качестве аргумента

function execute(func, num1, num2) {
    return func(num1, num2);
}

function multiply1(a, b) {
    return a * b;
}

const result1 = execute(multiply1, 2, 5);
console.log(result1); 