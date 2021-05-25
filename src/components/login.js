import React, { Component, setState, useState } from "react";
import "./styles/form.css";
import axios from "axios";
import { Formik } from "formik";
import { url } from "../PostUrl";

function Login() {
  //Estados
  const [form, setForm] = useState({
    Email: "",
    password: "",
  });
  // function prueba() {
  //   axios
  //     .post(url, {
  //       Email: "challenge@alkemy.org",
  //       Password: "react",
  //     })
  //     .then(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }
  // Error 401 Unauthorized, no lo pude resolver :(
    // function prueba2() {
    //   fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: "challenge@alkemy.org",
    //       password: "react",
    //     }),
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded" 
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    // }

    // prueba2();
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

          if (!values.password) {
            errors.password = "Escriba una contraseña";
          } else if (/^[a-z0-9_]{3,6}$/i.test(values.password)) {
            errors.password =
              "La contraseña debe tener entre 3 y 6 caracteres mínimo";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);

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
        }) => (
          <div className="mt-5">
            <div className="wrapper fadeInDown   ">
              <div id="formContent">
                <div className=" fadeIn first">
                  <h5>SuperHero</h5>
                </div>

                <form className="text-center" onSubmit={handleSubmit}>
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
                  <div className="errores">
                    {errors.email && touched.email && errors.email}
                  </div>
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
                  <div className="errores">
                    {errors.password && touched.password && errors.password}
                  </div>

                  <input
                    type="submit"
                    className="fadeIn fourth"
                    value="Log In"
                    disabled={isSubmitting}
                  />
                </form>

                <div id="formFooter"></div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
}
export default Login;
