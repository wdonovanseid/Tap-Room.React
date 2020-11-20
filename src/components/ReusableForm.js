import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
            <p>Name: <input
              type='text'
              name='name'
              placeholder='Name' /></p>
            <p>Brand: <input
              name='brand'
              placeholder='Brand' /></p>
            <p>Price: <input
              type='number'
              name='price'
              defaultValue="0.00"
              min="0"
              step="0.01" /></p>
            <p>Alcohol Content%: <input
              type='number'
              name='alcoholContent'
              defaultValue="0"
              min="0" /></p>
          <button type="button" type='submit'>{props.buttonText}</button>
        </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;