import React from "react";
import { Form, Formik } from "formik";

import { Button, Header, Icon, Segment } from "semantic-ui-react";
import * as Yup from "yup";

import UqiTextInput from "../components/UqiTextInput";




const SignUpPage = (props) => {

  

  const initialValues = { username: "", name: "", password: "" };
  const schema = Yup.object({
    username: Yup.string().email().required("E-mail is required"),
    name: Yup.string().required("Name-Surname is required"),
    password: Yup.string().required("Password is required")
  });

  const onClickSignUp = async values => {

  

    try {
     console.log('success')
    //  toast.success(t("Redirecting..."), { autoClose: 500 });
      
    } catch (apiError) {
    //  toast.error(t("Sign up failed..."), { autoClose: 750 });
   
    }
  };

  return (<div>
    <Segment inverted color="blue">
      <Header as="h2" icon textAlign="center">
        <Icon inverted color="pink" name="signup" circular />
        <Header.Content>Sign Up</Header.Content>
      </Header>
      <Formik initialValues={initialValues}
              validationSchema={schema}
              onSubmit={async (values, { resetForm }) => {
                await onClickSignUp(values);
                resetForm();
              }}>
        <Form className="ui form">
          <UqiTextInput name="username" placeholder="Username"></UqiTextInput>
          <UqiTextInput name="name" placeholder="Name-Surname"></UqiTextInput>
          <UqiTextInput name="password" placeholder="Password" type="password"></UqiTextInput>
          <Button color="pink" type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </Segment>
  </div>);

};

export default SignUpPage;