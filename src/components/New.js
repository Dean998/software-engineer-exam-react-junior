import React from "react";

const New = ({ text, onClick }) => {
  return <span onClick={onClick}>{text}</span>;
};

export default New;
