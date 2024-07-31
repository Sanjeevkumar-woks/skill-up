import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Button, Typography } from "antd";

const { Title } = Typography;

const contactUsValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactUsForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-400 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <Title level={2} className="text-center">
          Contact Us
        </Title>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={contactUsValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700">Name *</label>
                <Field
                  as={Input}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.name && touched.name ? (
                  <div className="text-red-500">{errors.name}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email *</label>
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject *</label>
                <Field
                  as={Input}
                  name="subject"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.subject && touched.subject ? (
                  <div className="text-red-500">{errors.subject}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message *</label>
                <Field
                  as={Input.TextArea}
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.message && touched.message ? (
                  <div className="text-red-500">{errors.message}</div>
                ) : null}
              </div>
              <div className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactUsForm;
