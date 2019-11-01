import React from 'react';

import { connect } from 'react-redux';

const CreateFormInput = ({ inputs, options }) => {
  return <div></div>;
};

const mapStateToProps = ({ inputs, options }) => ({
  inputs,
  options
});

export default connect(mapStateToProps)(CreateFormInput);
