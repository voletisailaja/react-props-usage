import React from "react";

function Button(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.backgroundColor }}>
        {props.num}
      </button>
    </div>
  );
}

export default Button;
