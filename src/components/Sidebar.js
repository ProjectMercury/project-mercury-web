import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ButtonPrimary, TextButton } from "./~reusables/atoms/Button";

const Sidebar = ({
  data: {
    credentials: { username }
  }
}) => {
  return (
    <Div>
      <div>
        <Img
          alt="avatar"
          src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg`}
        />
        <h1>{username}</h1>
      </div>
      <ButtonPrimary>
        <Link to="/create" style={{ color: "white" }}>
          Create Form <i className="fas fa-plus"></i>
        </Link>
      </ButtonPrimary>
      <div className="links">
        <TextButton>
          <Link to="/dashboard">
            <i className="fas fa-home"></i> Overview
          </Link>
        </TextButton>
        <TextButton>
          <Link to="/forms">
            <i className="fas fa-file-alt"></i> My Forms
          </Link>
        </TextButton>
      </div>

      <Line />

      <div className="links">
        <TextButton>
          <i className="fas fa-cog"></i> Settings
        </TextButton>
        <TextButton>
          <i className="fas fa-sign-out-alt"></i> Sign out
        </TextButton>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 30px;
  justify-content: space-evenly;
  align-items: center;
  width: 20vw;

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid grey;
  width: 80%;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default connect(state => state.user)(Sidebar);
