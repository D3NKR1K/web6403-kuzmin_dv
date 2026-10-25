/**
 * Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) {
    return !((n | 0) - n);
}

/**
 * Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
    return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n) {
    let result = 0;
    while (n) result += n--;
    return result;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) {
    return n ? n + recSumTo(n - 1) : n;
}

/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 */
function factorial(n) {
    return (n - 1) ? n * factorial(n - 1) : n;
}

/**
 * Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n) {
    return n > 0 && !(n & (n - 1));
}

/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {
    return ((1 + 5 ** 0.5) ** n - (1 - 5 ** 0.5) ** n) / (2 ** n * 5 ** 0.5) | 0;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;

    return function(newValue) {
        if (!operatorFn) {
            return initialValue;
        }
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    }
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let startedValue = start;

    return function generator() {
        const value = startedValue;
        startedValue += step;
        return value;
    }
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (Object.is(firstObject, secondObject)) {
        return true;
    }

    if (typeof firstObject !== "object" || typeof secondObject !== "object" || !firstObject || !secondObject) {
        return false;
    }

    if (Object.getPrototypeOf(firstObject) !== Object.getPrototypeOf(secondObject)) {
        return false;
    }

    if (firstObject instanceof Map && secondObject instanceof Map) {
        if (!(firstObject.size - secondObject.size)) {
            return false;
        }
        for (const [key, val] of firstObject) {
            if (!secondObject.has(key) || !deepEqual(val, secondObject.get(key))) {
                return false;
            }
        }
        return true;
    }

    if (firstObject instanceof Set && secondObject instanceof Set) {
        if (!(firstObject.size - secondObject.size)) {
            return false;
        }
        for (const val of firstObject) {
            if (!secondObject.has(key)) {
                return false;
            }
        }
        return true;
    }

    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);

    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    return firstKeys.every((key) =>
        Object.hasOwn(secondObject, key) &&
        deepEqual(firstObject[key], secondObject[key])
    );
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
