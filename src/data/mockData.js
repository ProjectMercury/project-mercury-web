export const formTypes = [
  {
    id: 'checkboxes',
    name: 'Checkboxes'
  },
  {
    id: 'radio',
    name: 'Radio Buttons'
  },
  {
    id: 'text',
    name: 'Text'
  },
  {
    id: 'data',
    name: 'Data'
  },
  {
    id: 'time',
    name: 'Time'
  }
];

export const userData = {
  user_id: '123231',
  form_count: 2,
  forms: [2, 3],
  name: 'John Doe',
  date_joined: '2019-10-16T11:57:05.576Z',
  profile_picture:
    'https://mpng.pngfly.com/20180521/ocp/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e4f1ce65.9760504415269493489905.jpg'
};

export const formData = {
  1: {
    title: 'Test, title',
    description: 'Test Descriprion',
    form_type: 1,
    accepting_responses: true,
    time_created: '2019-10-16T11:57:05.576Z',
    responses: {
      A: 23,
      B: 20,
      C: 50
    }
  },
  2: {
    title: 'Test, title',
    description: 'Test Descriprion',
    form_type: 2,
    accepting_responses: true,
    time_created: '2019-10-16T11:57:05.576Z',
    responses: {
      A: 23,
      B: 20,
      C: 50
    }
  },
  3: {
    title: 'Test, title',
    description: 'Test Descriprion',
    form_type: 6,
    accepting_responses: true,
    time_created: '2019-10-16T11:57:05.576Z',
    responses: ['Response 1', 'Response 2']
  }
};
