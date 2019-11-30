import React, { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FormDetails = ({
  match: {
    params: { id }
  },
  history
}) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/forms/${id}/responses`)
      .then(res => {
        setResponses(res.data);
      });
  }, []);
  return (
    <div>
      <Topbar history={history}/>
      <Sidebar />
      <div>Form: {id}</div>
      {/* {responses.map(response => (
        <div>{response}</div>
      ))} */}
    </div>
  );
};

export default FormDetails;
