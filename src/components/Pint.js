import React from "react";
import PropTypes from "prop-types";

function Pint(props) {
  return (
    <React.Fragment>
      <h4>{props.name} - x{props.quantity}
        <button type="button" className="btn btn-info" onClick={() => props.whenCancelClicked(props.id)}>Cancel Order</button></h4>
      <hr />
    </React.Fragment>
  );
}

Pint.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCancelClicked: PropTypes.func
};

export default Pint;