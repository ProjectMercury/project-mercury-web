import React from 'react';

const CreateFormOptions = ({ type }) => {
  let options = null;

  switch (type) {
    case 'checkboxes':
      options = <></>;
      break;

    case 'radio':
      options = <></>;
      break;

    default:
      break;
  }
  return <>{options}</>;
};

export default CreateFormOptions;
