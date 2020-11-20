import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
            <p>Name: <input
              type='text'
              name='name'
              // placeholder='Name'
              defaultValue={props.keg.name}
              required /></p>
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
            {props.formButtonText === 'Edit Keg' &&
            <p>Pints: <input
              type='number'
              name='pints'
              defaultValue="124"
              min="0" /></p>}
          <button type="button" className="btn btn-primary" type='submit'>{props.formButtonText}</button>
        </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  formButtonText: PropTypes.string
};

export default ReusableForm;