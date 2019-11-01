import React from 'react';
import { Button, Avatar } from 'antd';
import { userData } from '../data/mockData';
import FormList from '../components/FormList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-side">
        <div className="user-profile">
          <Avatar size={200} icon="user" />
          <h1>{userData.name}</h1>
          <p>Lambda School</p>
          <p>{userData.form_count} forms created</p>
          <p>900 responses </p>
        </div>

        <Link to="/create">
          <Button type="primary" icon="plus" size="large">
            Create Form
          </Button>
        </Link>

        <FormList />
      </div>

      <div className="right-side"></div>
    </div>
  );
};

export default Dashboard;
