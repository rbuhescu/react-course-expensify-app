const firebase = require('firebase');

// const config = {
//     apiKey: "AIzaSyBANHfFzhJhp1L964D0j91_wxTAsAG3vl4",
//     authDomain: "expensify-ad831.firebaseapp.com",
//     databaseURL: "https://expensify-ad831.firebaseio.com",
//     projectId: "expensify-ad831",
//     storageBucket: "expensify-ad831.appspot.com",
//     messagingSenderId: "682621425301",
//     appId: "1:682621425301:web:b7c507fa08302203abad9c"
// };
const config = {
    apiKey: "AIzaSyBeJS9q_FWJqOs7vWTztGjYm_bIoIsCvWA",
    authDomain: "expensify-test-5adc8.firebaseapp.com",
    databaseURL: "https://expensify-test-5adc8.firebaseio.com",
    projectId: "expensify-test-5adc8",
    storageBucket: "expensify-test-5adc8.appspot.com",
    messagingSenderId: "331140657710"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBeJS9q_FWJqOs7vWTztGjYm_bIoIsCvWA",
//     authDomain: "expensify-test-5adc8.firebaseapp.com",
//     databaseURL: "https://expensify-test-5adc8.firebaseio.com",
//     projectId: "expensify-test-5adc8",
//     storageBucket: "expensify-test-5adc8.appspot.com",
//     messagingSenderId: "331140657710",
//     appId: "1:331140657710:web:885868d03c8a408b3a65bf"
//   };

firebase.initializeApp(config);

const database = firebase.database();

database.ref('node-test-3').push({
    description: 'First description',
    note: 'First note',
    amount: 12,
    createdAt: 20190101
});
