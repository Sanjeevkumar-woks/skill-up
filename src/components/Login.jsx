import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Button, Typography } from "antd";
import "antd/dist/reset.css";

const { Title } = Typography;

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-700 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <Title level={2} className="text-center">
          Login
        </Title>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form>
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
              <div className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
                >
                  Login
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
