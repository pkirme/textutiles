import React, { useState } from "react";

const TextForm = (props) => {
  const [txt, setTxt] = useState("Enter text here.");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setTxt(e.target.value);
  };

  const upperOnclickHandler = () => {
    setTxt(txt.toUpperCase());
  };

  const lowerOnclickHandler = () => {
    setTxt(txt.toLowerCase());
  };

  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="text"
            rows="10"
            value={txt}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={upperOnclickHandler}>
          Conver to Uppercase
        </button>
        <button className="btn btn-primary" onClick={lowerOnclickHandler}>
          Conver to Lowercase
        </button>
      </div>
      <div className="container my-3 border">
        <h1>Your text summary:</h1>
        <p>
          Total words : {txt.split(" ").length} Total Charector : {txt.length}
        </p>
        <p>Total time required to read : {0.008 * txt.split(" ").length}Minutes</p>
        <h2>Preview</h2>
        <p>{txt}</p>
      </div>
    </>
  );
};

export default TextForm;
