import React from "react";
import styled from "styled-components";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import DashboardFormDetails from "../components/DashboardFormDetails";
import RecentActivities from "../components/RecentActivities";
import ResponseRate from "../components/ResponseRate";

const Dashboard = () => {
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
    margin-left: 20vw;
    margin-top: 10vh;
    width: 75vw;
  }
`;

export default Dashboard;
