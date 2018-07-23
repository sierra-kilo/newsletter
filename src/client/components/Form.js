import React from 'react';
import Button from './Button'

const handleSubmit = (e) => {
  e.preventDefault()
  alert("you clicked submit")
}

const Form = (props) => (
  <div>
    <form onSubmit={(e) => {
          handleSubmit(e)
          props.changeState()
        }}>
      <input></input>
      <Button/>
    </form>
  </div>
);

export default Form;
