import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Button, Checkbox, Typography } from "antd";
import "antd/dist/reset.css";

const { Title } = Typography;

const registrationValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is required"),
  agreeToTerms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const RegistrationForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <Title level={2} className="text-center">
          Register
        </Title>
        <Formik
          initialValues={{
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            agreeToTerms: false,
          }}
          validationSchema={registrationValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700">Username *</label>
                <Field
                  as={Input}
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.username && touched.username ? (
                  <div className="text-red-500">{errors.username}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">First Name *</label>
                <Field
                  as={Input}
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-500">{errors.firstName}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name *</label>
                <Field
                  as={Input}
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-500">{errors.lastName}</div>
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
                <label className="block text-gray-700">Password *</label>
                <Field
                  as={Input.Password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Password Confirmation *
                </label>
                <Field
                  as={Input.Password}
                  name="passwordConfirmation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full"
                />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <div className="text-red-500">
                    {errors.passwordConfirmation}
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <Field
                  as={Checkbox}
                  name="agreeToTerms"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  Agree to Our Terms and Conditions
                </Field>
                {errors.agreeToTerms && touched.agreeToTerms ? (
                  <div className="text-red-500">{errors.agreeToTerms}</div>
                ) : null}
              </div>
              <div className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                  Register
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
