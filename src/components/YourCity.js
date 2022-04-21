import React from "react";

const YourCity = (props) => {
  return (
    <div>
      <div>
        <h4> You Live In</h4>
      </div>
      <div>{props.address}</div>
    </div>
  );
};

export default YourCity;
