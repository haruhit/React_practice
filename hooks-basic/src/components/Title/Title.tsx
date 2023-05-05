import React from "react";

type Props = {
  titleText: string;
};

const Title: React.VFC<Props> = ({ titleText }) => {
  return <h2>{titleText}</h2>;
};

export default Title;
