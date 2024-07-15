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
  const handleSubmit = (values, { resetForm }) => {
    onAdd({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="div" />
          </label>

          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
