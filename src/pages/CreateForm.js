import React, { useState } from 'react';
import { Modal, Icon } from 'antd';
import { withFormik } from 'formik';
import CreateFormInput from '../components/CreateFormInput';

const C = props => {
  const [loading, setLoading] = useState(false);
  const [inputCount, setInputCount] = useState(1);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      props.toggleForm(false);
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    props.toggleForm(false);
  };

  const { handleSubmit } = props;

  return (
    <div>
      <Modal
        title="Title"
        visible={props.showForm}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit}>
          {[...Array(inputCount)].map((_, i) => (
            <CreateFormInput key={i} {...props} />
          ))}
        </form>
        <Icon
          type="plus-circle"
          onClick={() => setInputCount(inputCount + 1)}
        />
      </Modal>
    </div>
  );
};

export const CreateForm = withFormik({
  mapPropsToValues: () => ({ username: '', password: '' }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  }
})(C);
