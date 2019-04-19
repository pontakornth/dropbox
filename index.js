/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
// import App from './components/App';
import { StaticRouter as Router, Route, Link } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';
import Home from './pages/Home';
import Completed from './pages/Completed';
import View from './pages/View';

import 'normalize.css';
import './public/style.scss';

const App = () => (
  <Router>
    <div className="app">
      <Route path="/" exact component={Completed} />
      {/*
      <Route path="/sent" component={Completed} />
      <Route path="/views" exact component={View} />
      */
      }
    </div>
  </Router>
);

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <App db={firebase.firestore()} />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
);
