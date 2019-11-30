import React from "react";
import styled from "styled-components";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { css } from "glamor";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import DashboardFormDetails from "../components/DashboardFormDetails";
import RecentActivities from "../components/RecentActivities";
import ResponseRate from "../components/ResponseRate";

const Dashboard = (props) => {
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
                props.history.push(`/forms/${id}`);
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
      <ToastContainer className="toast-container" hideProgressBar={true} />
      <Topbar history={props.history} />
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
