import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import DashboardFormDetails from "../components/DashboardFormDetails";
import RecentActivities from "../components/RecentActivities";
import ResponseRate from "../components/ResponseRate";

import { getDetails } from "../redux/actions/userActions";

const Dashboard = ({ getDetails }) => {
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Div>
      <Topbar />
      <div>
        <Sidebar />
        <DashboardFormDetails />
        <div className="bottom">
          <RecentActivities />
          <ResponseRate />
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  background: #f0f4ff;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 17vw;
    margin-top: 10vh;
    width: 75vw;
  }
`;

export default connect(null, { getDetails })(Dashboard);
