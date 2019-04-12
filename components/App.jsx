import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Card from './Card';
import SubmitForm from './SubmitForm';

import 'normalize.css';
import '../public/style.scss';

const App = ({ db }) => {
  const [isSent, setSent] = useState(false);
  const handleSubmit = ({ name, body }) => {
    db.collection('dropboxes').add({ name, body });
    setSent(!isSent);
  };
  const alert = (
    <div className="card">
      <h1>ข้อความถูกส่งไปแล้ว</h1>
      <div className="container">
        <button type="button" className="button" onClick={() => setSent(!isSent)}>ส่งอีก</button>
      </div>
    </div>
  );
  const alertOrDialog = (status) => {
    if (status) {
      return (
        alert
      );
    }

    return (
      <SubmitForm handleSubmit={({ name, body }) => handleSubmit({ name, body })} />
    );
  };
  return (
    <div className="app">
      { alertOrDialog(isSent) }
      {/* <Card name="Jira" body="ddgfdghdf" /> */}
    </div>
  );
};

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  db: PropTypes.object.isRequired,
};

export default App;
