import React from "react";

const span_text = (props) => {
  return (
    <div>
      <p>
        I am a<span>{props.name}</span>
      </p>
    </div>
  );
};

export default span_text;
