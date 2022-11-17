/*
Задача: написати функцію, яка приймає рядок, що містить дужки і повертає true, якщо дужки правильно парно
відкриваються і закриваються. false - якщо порядок порушений
Дужки можуть бути такі: (), {}, [], <>
*/


/*
1. Створюємо структуру, де будемо зберігати ось ці всі дужки.
2. Перебираємо рядок.
3. Якщо ми зустріли дужку, яка відкривається, покласти її в стек.
4. Якщо ми зустріли дужку, що закривається, проаналізувати її:
    - порівняти, чи є оця закриваюча дужка парною до останнього елементу стеку
    - якщо так, то видалити відкриваючу зі стеку
    - якщо ні, то повертаємо помилку
5. Проаналізувати, чи залишилось щось у стеку. Якщо рядок закінчився (після перебору), а в стеку щось залишилося
то порядок був неправильний. Якщо стек пустий, то все нормально (порядок був правильний)
На базовому рівні ваша функція має працювати тільки з дужками.
Додатково (**): ігнорувати всі символи, крім дужок (щоб можна було крім дужок передавати ще щось, наприклад, числа)
*/

/*
function checkSequence(str, options) {
    const stack = new Stack();
    const braces = options.braces;
    const closeBraces = Object.values(braces);

    for(const symbol of str) {
        if(!(braces[symbol] && closeBraces.includes(symbol))) {
            continue;
        }
        if(braces[symbol]) {
            stack.push(symbol);
            continue;
        }
        if(stack.isEmpty &&closeBraces.includes(symbol)) {
            return false;
        }
        const lastItemFromStack = stack.pick();
        const correctCloseBrace = braces[lastItemFromStack];
        if(correctCloseBrace === Symbol) {
            stack.pop();
        }
    }

    return stack.isEmpty;
}

const options = {
    braces: {
        '(': ')',
        '[': ']',
        '{': '}',
        '[': ']',
    }
}

console.log(
    checkSquence('(2+2)[3-1]2(3*[9/1])', options)
);
*/