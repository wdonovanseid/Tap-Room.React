import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>{keg.name} Details</h2>
      <h3>Brand: {keg.brand}</h3>
      <p>Price: ${keg.price.toFixed(2)}</p>
      <p>Alcohol Content: {keg.alcoholContent}%</p>
      <p>Pints: {keg.pints > 0 ? keg.pints : 'Out of Stock'}</p>
    </React.Fragment >
  );

}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;