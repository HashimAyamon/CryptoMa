import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        border: "1px solid gold",
        borderRadius: 5,
        padding: "10px 20px",
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "gold" : "transparent",
        color: selected ? "black" : "white",
        fontWeight: selected ? 700 : 500,
        width: "22%",
        textAlign: "center",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;
