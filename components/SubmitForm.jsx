/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
        <label htmlFor="name">ชื่อ</label>
        <span className="input"><input id="name" value={input.name} onChange={e => setInput({ ...input, name: e.target.value })} name="name" type="text" placeholder="Your name" /></span>
        <label htmlFor="body">ข้อความ</label>
        <span className="input"><textarea value={input.body} onChange={e => setInput({ ...input, body: e.target.value })} id="body" name="body" /></span>
        <input className="input button" type="submit" value="ส่ง Dropbox" />
      </form>
    </div>
  );
};

SubmitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SubmitForm;
