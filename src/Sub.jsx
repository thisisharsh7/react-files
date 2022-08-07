import React from "react";

const Sub = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>{" "}
        <li style={{ listStyleType: "none" }}>{props.text}</li>
      </div>
    </>
  );
};

export default Sub;
