import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './components/App';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <App db={firebase.firestore()} />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
);
