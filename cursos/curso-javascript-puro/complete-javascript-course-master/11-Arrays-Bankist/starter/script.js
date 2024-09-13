'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////
// Simple Array Methods

// Arrays são objetos e tem acesso a métodos (funções) especiais que são ferramentas importantes para os arrays

// let arr = ['a', 'b', 'c', 'd', 'e'];

// 1. SLICE

// Não altera o array inicial, apenas faz uma cópia
// console.log(arr.slice(2)); // c, d, e
// console.log(arr.slice(2, 4)); // c, d. O último índice retorna um a menos (2, 3)
// console.log(arr.slice(-2)); // d, e
// console.log(arr.slice(-1)); // e
// console.log(arr.slice(1, -2)); // b, c
// console.log(arr.slice()); // a, b, c, d, e
// console.log([...arr]); // a, b, c, d, e

// 2. SPLICE

// Altera o array inicial. Splice é mais útil para remover elementos do array do que realmente o retorno que ele tras
// console.log(arr.splice(2)); // a, b, d
// arr.splice(-1); // a, b, c, d
// console.log(arr);
// arr.splice(1, 2); // a, d. Retorna o último índice corretamente (1, 2)
// console.log(arr);

// 3. REVERSE

// Altera o array inicial
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // f, g, h, i, j
// console.log(arr2);

// 4. CONCAT

// Não altera o array inicial, apenas faz uma cópia
// const letters = arr.concat(arr2);
// console.log(letters); // a, b, c, d, e, f, g, h, i, j
// console.log([...arr, ...arr2]); // A mesma coisa do concat

// 5. JOIN

// Não altera o array inicial, apenas faz uma cópia
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
// console.log(letters);

//////////////////////
// The new at Method

// 6. AT
// Tentar utilizar o que for mais legível possível. Em um código pequeno [] pode ser melhor, em um mais robusto, at() talvez seja mais fácil de se entender no meio de muita confusão
// const arr = [23, 11, 64];
// console.log(arr[0]); // 23
// console.log(arr.at(0)); // 23

// getting last array element
// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0]); // 64
// console.log(arr.at(-1)); // 64

// Também funciona com Strings
// console.log('Vitor'.at(-1)); // r

///////////////////////////
// Looping Arrays: ForEach

// 7. ForEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   movement > 0
//     ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
//     : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// console.log('----- FOREACH -----');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// });
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// Break e continue não funcionam em forEach

//////////////////////////////
// ForEach with Maps and Sets

// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
