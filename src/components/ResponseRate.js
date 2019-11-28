import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

import { getDaysEdited, getDaysInteger, getDates } from "../utils/getDays";

const ResponseRate = ({ data: { responseCount } }) => {
  const data = {
    labels: getDaysEdited().reverse(),
    datasets: [
      {
        label: "Response Rate",
        backgroundColor: "#4D68EB",
        borderColor: "#F0F4FF",
        borderWidth: 1,
        hoverBackgroundColor: "#4D68EB",
        hoverBorderColor: "#4D68EB",
        data: getDates(new Date())
          .map(
            day =>
              responseCount.filter(
                response =>
                  response.createdAt.substring(0, 10) ===
                  day.toISOString().substring(0, 10)
              ).length
          )
          .reverse()
      }
    ]
  };
  return (
    <Div>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </Div>
  );
};

const Div = styled.div`
  width: 35vw;
  height: 35vh;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1);
  background: white;
`;

export default connect(state => state.user)(ResponseRate);
