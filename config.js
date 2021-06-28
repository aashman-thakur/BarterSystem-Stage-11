import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBBMQ4sJfREzwpz7qYvzT_wcSgsfBAKcW4',
  authDomain: 'booksanta-3ab32.firebaseapp.com',
  projectId: 'booksanta-3ab32',
  storageBucket: 'booksanta-3ab32.appspot.com',
  messagingSenderId: '745377704847',
  appId: '1:745377704847:web:d0212101bd774e893939fa',
  dataURL: 'https://booksanta-3ab32.firebaseio.com/',
};
// if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()   