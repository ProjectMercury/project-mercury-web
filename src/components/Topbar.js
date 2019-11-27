import React from "react";
import styled from "styled-components";

const Topbar = props => {
  return (
    <Div>
      John Doe <i className="fas fa-caret-down"></i>
    </Div>
  );
};

const Div = styled.div`
  width: 100vw;
  height: 5vh;
  background: white;
  display: flex;
  justify-content: flex-end;
  padding-right: 5vw;
  align-items: center;
  font-size: 18px;
  font-family: "Muli";
  i {
    margin-left: 20px;
  }
`;

export default Topbar;
