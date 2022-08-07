import React from "react";
import { useState } from "react";
import Sub from "./Sub";

function List() {
  const [inText, inputText] = useState("");
  const [liText, listText] = useState([]);
  function storText(event) {
    inputText(event.target.value);
  }
  function add() {
    listText((preValue) => {
      return [...preValue, inText];
    });
    inputText("");
  }
  function deletOne(id) {
    console.log("deleted");
    listText((preValue) => {
      return preValue.filter((arr, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Type Here"
        className="inField"
        onChange={storText}
        value={inText}
      />{" "}
      <button onClick={add}> + </button>
      <ol>
        {liText.map((itemVal, index) => {
          return (
            <Sub key={index} text={itemVal} id={index} onSelect={deletOne} />
          );
        })}
      </ol>
    </>
  );
}

export default List;
