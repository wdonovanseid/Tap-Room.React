import React from 'react';
import PropTypes from "prop-types";
import Pint from "./Pint";
import { v4 } from 'uuid';

function Tab(props) {
  // let totalPrice = 0.00;
  // props.pintList.map((x) => {
  //   totalPrice += x.price;
  // })
  return (
    <React.Fragment>
      <div className="card">
        <h2>Your Tab - ${props.totalTab.toFixed(2)}</h2>
        <hr />
        <ul>
          {props.pintList.map((x) =>
            <Pint
              whenCancelClicked={props.onClickingCancelOrder}
              name={x.name}
              quantity={x.quantity}
              price={x.price}
              id={x.id}
              key={v4()} />
          )}
        </ul>
      </div>
    </React.Fragment>
  );
}

Tab.propTypes = {
  pintList: PropTypes.array,
  totalTab: PropTypes.number
};

export default Tab;