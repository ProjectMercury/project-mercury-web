import React from "react";
import { Button, Avatar } from "antd";
import { userData } from "../data/mockData";
import "antd/dist/antd.css";

const Dashboard = () => {
  return (
    <div>
      <div className="left-side">
        <div className="user-profile">
          <Avatar size={150} icon="user" />
          <h1>{userData.name}</h1>
          <p>Lambda School</p>
        </div>
        <Button type="primary" icon="plus" size="large">
          Create Form
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
