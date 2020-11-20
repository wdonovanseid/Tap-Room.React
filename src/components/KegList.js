import React from 'react';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <h2>Keg List</h2>
      <hr />
      {props.kegList.map((x) =>
        <Keg
          name={x.name}
          brand={x.brand}
          price={x.price}
          alcoholContent={x.alcoholContent}
          pints={x.pints}
          id={x.id}
          key={x.id} />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;