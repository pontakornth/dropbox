/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SubmitForm = ({ handleSubmit }) => {
  const [input, setInput] = useState({
    name: '',
    body: '',
  });
  const submit = (e) => {
    e.preventDefault();
    handleSubmit(input);
  };
  return (
    <div className="form-box">
      <form className="form" action="#" onSubmit={submit}>
        <label htmlFor="name">
          <p>ชื่อ</p>
          <input className="input" id="name" value={input.name} onChange={e => setInput({ ...input, name: e.target.value })} name="name" type="text" placeholder="Your name" />
        </label>
        <label htmlFor="body">
          <p>ข้อความ</p>
          <textarea className="input" value={input.body} onChange={e => setInput({ ...input, body: e.target.value })} id="body" name="body" />
        </label>
        <input className="input button" type="submit" value="ส่ง Dropbox" />
      </form>
    </div>
  );
};

SubmitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitForm;
