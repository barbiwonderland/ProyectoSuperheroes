import React, { Component, setState, useState } from "react";
import "./styles/form.css";
import { setUserSession } from "../common";
import axios from "axios";
import { Formik } from "formik";

function Login() {
  return (
    <React.Fragment>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Obligatorio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email incorrecto";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="mt-5">
            <div className="wrapper fadeInDown   ">
              <div id="formContent">
                <div className=" fadeIn first">
                  <h5>SuperHero</h5>
                </div>

                <form className="text-center"  onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    id="login"
                    className="fadeIn second"
                    placeholder="Usuario"
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="password"
                    className="fadeIn third"
                    placeholder="Contraseña"
                  />
                  {errors.password && touched.password && errors.password}

                  <input
                    type="submit"
                    className="fadeIn fourth"
                    value="Log In"
                    disabled={isSubmitting}
                  />
                </form>

                <div id="formFooter">
                  {/* <a className="underlineHover" href="#">Forgot Password?</a> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default Login;
