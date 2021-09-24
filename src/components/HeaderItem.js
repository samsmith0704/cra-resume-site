import React from "react";

const HeaderItem = ({ headerItemTitle, onMenuClick }) => {
  const btnStyle = {
    border: "none",
    borderRadius: "20px",
    marginLeft: "30px",
    marginRight: "30px",
    marginBottom: "0px",
    color: "grey",
    padding: "0px",
    backgroundColor: "AliceBlue",
  };

  return (
    <button
      style={btnStyle}
      onClick={(e) => {
        onMenuClick(e);
      }}
    >
      <h5>{headerItemTitle}</h5>
    </button>
  );
};

export default HeaderItem;
