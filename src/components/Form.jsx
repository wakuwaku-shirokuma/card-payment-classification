//import React, { Component } from 'react';

const Form = (props) => (
  <form className="siimple-form" onSubmit={props.handleAdd}>
    <div className="siimple-form-field">
      <label className="siimple-label siimple--color-white">支払い項目</label>
      <input name="title" type="text" className="siimple-input"/>　
      <input type="submit" value="追加" className="siimple-btn siimple-btn--teal"/>
    </div>
  </form>
);

export default Form;
