import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Card } from "../components/~reusables/molecues/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { heading_1 } from "../components/~reusables/variables/font-sizes";

const MyForms = ({ data: { forms }, history }) => {
  const handleClick = id => {
    history.push(`/forms/${id}`);
  };

  return (
    <Div>
      <Topbar />
      <Sidebar />
      <h1 className="heading">My Forms</h1>
      <div className="cards">
        {forms.map(form => (
          <Card key={form.formId} onClick={() => handleClick(form.formId)}>
            <h3>{form.title}</h3>
            <p>{form.description}</p>
            <a href={`http://localhost:3000/respondents/${form.formId}`}>
              http://localhost:3000/respondents/{form.formId}
            </a>
          </Card>
        ))}
      </div>
    </Div>
  );
};

const Div = styled.div`
  background: #f0f4ff;
  min-height: 100vh;
  height: 100%;
  .cards {
    margin-left: 20vw;
    margin-right: 200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 70px;
  }
  .heading {
    margin-top: 20px;
    font-size: ${heading_1};
  }
`;
export default connect(state => state.user)(MyForms);
