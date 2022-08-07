import React from "react";
import Matching from "./Matching";
import NotMatching from "./NotMatching";

const SlotM = (props) => {
  //   let x = props.x;
  //   let y = props.y;
  //   let z = props.z;
  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <h3>
          {x} {y} {z}
        </h3>
        <Matching />
      </>
    );
  } else {
    return (
      <>
        <h3>
          {x} {y} {z}
        </h3>
        <NotMatching />
      </>
    );
  }
};

export default SlotM;
