import React from "react";
import styled from "styled-components";
import NotificationBadge from "react-notification-badge";
import "react-toastify/dist/ReactToastify.css";
import { openNotifications } from '../utils/toast-helper'
import { Effect } from "react-notification-badge";
import { connect } from "react-redux";



const Topbar = ({
  data: {
    credentials: { username },
    notificationCount
  },
  history
}) => {

  return (
    <Div>
      <div>
        <button onClick={openNotifications(notificationCount, history)}>Notify !</button>
        <NotificationBadge
          count={notificationCount ? notificationCount.length : 0}
          effect={Effect.SCALE}
        />
        <i className="fas fa-bell"></i>
      </div>
      <i className="fas fa-bell"></i>
      <i className="fas fa-bell"></i>
      {username} <i className="fas fa-caret-down"></i>
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
  .fas.fa-bell {
    margin-right: 50px;
  }
`;

export default connect(state => state.user)(Topbar);
