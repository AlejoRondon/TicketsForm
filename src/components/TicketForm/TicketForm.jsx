import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './TicketForm.scss'; // Import CSS file for styling

const TicketForm = ({ onSubmit }) => {
  const initialValues = {
    title: '',
    priority: '',
    description: '',
    resolved: false,
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .min(6, 'Title must be at least 6 characters')
      .max(18, 'Title must be at most 18 characters'),
    priority: Yup.number().required('Priority is required'),
    description: Yup.string().max(
      30,
      'Description must be at most 30 characters'
    ),
  });

  return (
    <div className="ticket-form-container">
      <h1>Create Ticket</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <Field
                type="text"
                id="title"
                name="title"
                className="form-control"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority:</label>
              <Field
                as="select"
                id="priority"
                name="priority"
                className="form-control"
              >
                <option value="">Select Priority</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </Field>
              <ErrorMessage
                name="priority"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="form-control"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label>
                <Field type="checkbox" name="resolved" /> Resolved
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TicketForm;
