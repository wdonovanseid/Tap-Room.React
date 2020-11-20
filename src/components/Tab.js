import React from 'react';
import PropTypes from "prop-types";
import Pint from "./Pint";
import { v4 } from 'uuid';

function Tab(props) {
  return (
    <React.Fragment>
      <div className="card">
        <h2>Your Tab</h2>
        <hr />
        <ul>
          {props.pintList.map((x) =>
            <Pint
              whenCancelClicked={props.onClickingCancelOrder}
              name={x.name}
              quantity={x.quantity}
              id={x.id}
              key={v4()} />
          )}
        </ul>
      </div>
    </React.Fragment>
  );
}

Tab.propTypes = {
  pintList: PropTypes.array
};

export default Tab;