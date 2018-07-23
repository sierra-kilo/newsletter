import React from 'react';
import Button from './Button'

const handleSubmit = (e) => {
  e.preventDefault()
  alert("you clicked submit")
}

const Form = ({}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input></input>
      <Button/>
    </form>
  </div>
);

export default Form;
