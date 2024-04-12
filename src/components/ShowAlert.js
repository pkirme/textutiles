import React from "react";

const Alert = (props) => {
  const capChar = (word) => {
    let lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alertMsg && (
      <div
        class={`alert alert-${props.alertMsg.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capChar(props.alertMsg.type)}:</strong> {props.alertMsg.msg}
      </div>
    )
  );
};

export default Alert;
