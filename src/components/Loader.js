import React from "react";
import { RiseLoader } from "react-spinners";
import { primary } from "./~reusables/variables/colors";

const override = `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh
`;

const Loader = () => {
  return <RiseLoader css={override} size={20} color={primary} />;
};

export default Loader;
