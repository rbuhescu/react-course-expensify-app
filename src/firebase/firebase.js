import * as firebase from 'firebase';

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
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     let expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         let expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'First description',
//     note: 'First note',
//     amount: 12,
//     createdAt: 20190101
// });

// database.ref('expenses').push({
//     description: 'Second description',
//     note: 'Second note',
//     amount: 34,
//     createdAt: 20190202
// });

// database.ref('expenses').push({
//     description: 'Third description',
//     note: 'Third note',
//     amount: 56,
//     createdAt: 20190303
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Razvan B',
//     age: 55,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Palm Desert',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('age').set(56);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     height: 73,
//     weight: 210
// }).then(() => {
//     console.log('Saved my attributes.');
// }).catch((e) => {
//     console.log('Failed.', e);
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('Removed isSingle.');
// }).catch((e) => {
//     console.log('Failed to remove isSingle.', e);
// });