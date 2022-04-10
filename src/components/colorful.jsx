import React from "react";

const Colorful = (props) => {
  console.log("カラフル");
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "20px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default Colorful;
