import React from "react";

type Props = {
  titleText: string;
};

const Title = ({ titleText: Props }) => {
  return <h2>{titleText}</h2>;
};

export default Title;
