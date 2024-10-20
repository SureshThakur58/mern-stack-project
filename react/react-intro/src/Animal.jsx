import React from 'react';
import PropTypes from "prop-types";
const Animal = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Average age:{props.age}</p>
    </div>
  )
}

export default Animal