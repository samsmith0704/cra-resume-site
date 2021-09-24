import React from "react";
import HeaderItem from "./HeaderItem";

const innerHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "15px",
  marginRight: "15px",
};

const outerHeaderStyle = {
  position: "fixed",
  width: "100%",
  height: "15%",
  backgroundColor: "AliceBlue",
};

const Header = () => {
  const [currentHeaderItem, setCurrentHeaderItem] = React.useState(null);
  const [changeTracker, setChangeTracker] = React.useState(false);
  const onMenuClick = (event) => {
    setChangeTracker(!changeTracker);
    setCurrentHeaderItem(event.target.innerHTML);
  };

  React.useEffect(() => {
    console.log(currentHeaderItem);

    const yOffset = -100;
    const element = document.getElementById(currentHeaderItem);
    const y = element?.getBoundingClientRect().top + yOffset;

    if (currentHeaderItem !== null) {
      // document.getElementById(currentHeaderItem)?.scrollIntoView(true, {
      //   behavior: "smooth",
      // });
      window.scrollBy(0, y);
    }
  }, [changeTracker]);
  return (
    <div style={outerHeaderStyle}>
      <br />
      <div style={innerHeaderStyle}>
        <HeaderItem headerItemTitle={"Skills"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Experience"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Education"} onMenuClick={onMenuClick} />
        <HeaderItem headerItemTitle={"Portfolio"} onMenuClick={onMenuClick} />
        <HeaderItem
          headerItemTitle={"Contact Info"}
          onMenuClick={onMenuClick}
        />
      </div>
    </div>
  );
};
//TODO: Make header fixed

export default Header;
