import React from "react";
import styled from "styled-components";
import NotificationBadge from "react-notification-badge";
import { css } from "glamor";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Effect } from "react-notification-badge";
import { connect } from "react-redux";

toast.configure();

const Topbar = ({
  data: {
    credentials: { username },
    notificationCount
  },
  history
}) => {
  const openNotifications = array => {
    let index = 0;
    console.log(index)
    if (array) {
      return notify;
    }

    function notify() {
      if (index !== array.length) {
        const id = array[index].formId;

        if (toast.isActive(id)) {
          return null;
        }

        toast.info(
          `${array[index].notification_count} new ${
            array[index].notification_count > 1 ? "people have " : "person has "
          }filled out ${array[index].form_title}`,
          {
            className: "toast",
         
            onClick: () => {
              history.push(`/forms/${id}`);
            },
            bodyClassName: css({
              fontSize: "0.9rem"
            })
          }
        );

        console.log(index);
        index++;
        return notify();
      } else index = 0;
    }
  };

  return (
    <Div>
      <div>
        <button onClick={openNotifications(notificationCount)}>Notify !</button>
        {/* <ToastContainer className="toast-container" hideProgressBar={true} /> */}
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
