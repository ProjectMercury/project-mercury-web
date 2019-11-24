import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';

const PreviewPage = ({ lastFormId }) => {
  return (
    <div>
      <h1>Show form preview</h1>
      <h3>
        Congratulations! Your survey has beem created. Your unique url is{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`localhost:3001/${lastFormId}`}
        >
          http://localhost:3001/{lastFormId}
        </a>
      </h3>

      <Link to="/dashboard">
        <Button>Back to Dashboard</Button>
      </Link>
    </div>
  );
};

export default connect(state => state.user)(PreviewPage);
