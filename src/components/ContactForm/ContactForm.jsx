import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("This field is required"),
  number: Yup.number()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("This field is required"),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
    });
    e.target.reset();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
      >
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="number">Number</label>
          <Field name="number" />
          <ErrorMessage name="number" component="div" />

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
