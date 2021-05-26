import React, { useEffect } from "react";
import "./styles/form.css";
import axios from "axios";
import { Formik } from "formik";
import { url } from "../PostUrl";
import { useHistory } from "react-router-dom";

function Login() {
  // History(para ir a una ruta anterior)
  const history = useHistory();
  //Función que llama al token
  function ApiToken() {
    axios
      .post(
        url,
        {
          email: "challenge@alkemy.org",
          password: "react",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(
        (response) => {
          console.log(response.data.token);
          localStorage.setItem("Token", response.data.token);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  useEffect(() => {
    // Verifico si hay un token en Local Storage, si hay redirecciono a busqueda
    let localToken = JSON.stringify(localStorage.getItem("Token"));
    if (localToken !== undefined) {
      console.log(localToken, "lt");
      history.push("/busqueda");
    }
  });
  return (
    <React.Fragment>
      <Formik
        validateOnChange
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
          } else if (/^[a-z0-9_]{1,6}$/i.test(values.password)) {
            errors.password =
              "La contraseña debe tener entre 3 y 6 caracteres mínimo";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          ApiToken();
          console.log(values);
          setSubmitting(false);
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
