import React from "react";

const Button = ({ isActive, clicked }) => {
  const style = {
    marginLeft: "0px",
    marginTop: "20px",
    padding: "15px",
    borderRadius: "6px",
    border: "1px solid #3333",
    cursor: "pointer",
    outline: "none",
    fontSize: "18px",
    color: "white",
    background: "#333",
    transition: "0.3s",
  };
  return (
    <div>
      <button className="btn" onClick={clicked} style={style}>
        {isActive ? "Get another user" : "Get User"}
      </button>
    </div>
  );
};

export default Button;
