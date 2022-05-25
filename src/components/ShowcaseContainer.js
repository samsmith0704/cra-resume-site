import React from "react";
import PictureCard from "./PictureCard";
import ShowcaseCard from "./ShowcaseCard";
import Header from "./Header";

//TODO:
/**
 * Link Github and LinkedIn
 * Fill out showcase cards more, could put TDlist in portfolio, but need something else as well, maybe tlyft for now
 * Add some of the stuff to common component, there is so much repeated code here
 */

const showcaseCardStyle = {
  display: "flex",
};
const showcaseItemTitleStyle = {
  textAlign: "center",
  color: "white",
  backgroundColor: "grey",
  borderRadius: "5px",
};
const headerActivationButtonStyle = {
  position: "fixed",
};
const HeaderActivationButton = ({ onClick }) => {
  return (
    <button
      dataToggle="collapse"
      dataTarget="#header"
      className={"btn btn-primary"}
      style={headerActivationButtonStyle}
      onClick={onClick}
    >
      Show menu
    </button>
  );
};
const ShowcaseContainer = () => {
  const [showHeader, setShowHeader] = React.useState(true);
  const [showHeaderActivationButton, setShowHeaderActivationButton] =
    React.useState(false);

  const handleHeaderActivation = () => {
    setShowHeaderActivationButton(false);
    setShowHeader(true);
    console.log(showHeader);
  };

  return (
    <div
      onWheel={() => {
        setShowHeader(window.scrollY === 0);
        setShowHeaderActivationButton(!showHeader);
      }}
    >
      <Header />
      {/* <div>{showHeader && <Header />}</div> */}
      {/* <div style={{ textAlign: "center" }}>
        {" "}
        {showHeaderActivationButton && (
          <HeaderActivationButton onClick={handleHeaderActivation} />
        )}
      </div> */}

      <br />
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row" id="Skills">
          <div className="col">
            <div>
              <PictureCard />
            </div>
          </div>
          <div className="col-6">
            <div style={showcaseItemTitleStyle}>
              <h3>Skills</h3>
            </div>

            <div style={showcaseCardStyle}>
              <ShowcaseCard
                boldedText={"Extensive Experience: "}
                text="Javascript, React, Python"
              />
              <ShowcaseCard
                boldedText={"Broad Knowledge: "}
                text="Java, SQL, HTML, CSS"
              />
            </div>
          </div>
        </div>
        <div className="row" id="Experience">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={showcaseItemTitleStyle}>Experience</h3>
            <div style={showcaseCardStyle}>
              <ShowcaseCard
                boldedText={"Riggs Lab: "}
                text="Used Python Data Science libraries to analyze eye tracking data"
              />
              <ShowcaseCard
                boldedText={"CoStar Group: "}
                text="CoStar Group: Utilized React and NodeJS to contribute to internal company tool"
              />
            </div>
          </div>
        </div>

        <div className="row" id="Education">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={showcaseItemTitleStyle}>Education</h3>

            <div style={showcaseCardStyle}>
              <ShowcaseCard
                boldedText={"University of Virginia: "}
                text="BA in Computer Science, Cumulative GPA 3.88"
              />
            </div>
          </div>
        </div>

        <div className="row" id="Portfolio">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={showcaseItemTitleStyle}>Portfolio</h3>

            <div style={showcaseCardStyle}>
              <ShowcaseCard link={"https://github.com/samsmith0704/"} />
              <ShowcaseCard text="EMPTY" />
            </div>
          </div>
        </div>
        <div className="row" id="Contact Info">
          <div className="col">
            <div></div>
          </div>
          <div className="col-6">
            <h3 style={showcaseItemTitleStyle}>Contact Info</h3>

            <div style={showcaseCardStyle}>
              <ShowcaseCard
                boldedText={"Email and Phone number: "}
                text="sjs5pg@virginia.edu
              (703)-424-3911"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContainer;
