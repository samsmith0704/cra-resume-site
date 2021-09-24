import React from "react";
import headshot from "../../src/costar_headshot.png";

const pictureStyle = {
  height: "200px",
  borderRadius: "200px",
  boxShadow: " 0 0 2px .5px #888",
};

const pictureColumnStyle = {
  width: "200px",
  margin: "20px",
  textAlign: "center",
  boxShadow: " 0 0 2px .5px #888",
  padding: "10px",
  borderRadius: "20px",
  position: "fixed",
  color: "white",
  backgroundColor: "grey",
};
const captionStyle = {
  textAlign: "center",
  border: "none",
  marginTop: "10px",
  borderRadius: "10px",
  padding: "5px",
  fontSize: "10px",
  boxShadow: " 0 0 2px .5px #888",
  backgroundColor: "White",
  color: "black",
};

const PictureCard = () => {
  return (
    <div style={pictureColumnStyle} id="pictureColumn">
      <h3>
        <b> Sam Smith</b>
      </h3>
      <img style={pictureStyle} src={headshot} alt="" />
      <div style={captionStyle}>
        {" "}
        Associate Software Engineer at CoStar Group
      </div>
    </div>
  );
};

export default PictureCard;
