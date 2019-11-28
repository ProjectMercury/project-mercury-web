import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const DashboardFormDetils = ({ data: { forms, responseCount } }) => {
  return (
    <Div>
      <div>
        <h1>{forms && forms.length}</h1> <div>Forms Created</div>
      </div>
      <div>
        <h1>{responseCount.length}</h1> <div>Total Responses Received </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  width: 75vw;
  height: 35vh;
  border-radius: 10px;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1);
  margin-left: 20vw;
  margin-top: 7vh;
  background: white;
  display: flex;
  padding: 50px;
  justify-content: space-around;
  align-items: center;
`;

export default connect(state => state.user)(DashboardFormDetils);
