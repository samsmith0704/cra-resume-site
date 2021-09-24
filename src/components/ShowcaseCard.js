import React from "react";
//test
const cardStyle = {
  width: "200px",
  height: "150px",
  padding: "20px",
  margin: "15px",
  marginBottom: "150px",
  fontSize: "12px",
  backgroundColor: "LavenderBlush",
  borderRadius: "20px",
  boxShadow: " 0 0 2px .5px #888",
};
const ShowcaseCard = ({ boldedText, text, link }) => {
  const myLink = link ? <a href={link}>Check out my github!</a> : "";

  return (
    <div style={cardStyle}>
      <b>{boldedText}</b>
      <br /> <br />
      {text}
      {myLink}
    </div>
  );
};

export default ShowcaseCard;
