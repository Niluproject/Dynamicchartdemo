import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "bootstrap/dist/css/bootstrap.css";
function Signup() {

    const LoginSchema = Yup.object().shape({
        username: Yup.string()
            .required("Username is required"),
        email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address format")
            .required("Email is required"),
        password: Yup.string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        confirmPassword: Yup.string()
            .required("Please confirm your password")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik
                        initialValues={
                            {
                                username: '',
                                email: '',
                                password: '',
                                confirmPassword: ''
                            }
                        }
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            alert("Form is validated! Submitting the form...");
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) =>
                            !isSubmitting ? (
                                <div>
                                    <div className="row mb-5">
                                        <div className="col-lg-12 text-center">
                                            <h1 className="mt-5">Register Form</h1>
                                        </div>
                                    </div>
                                    <Form>

                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <Field
                                                type="text"
                                                name="username"
                                                placeholder="Enter username"
                                                autoComplete="off"
                                                className={`mt-2 form-control ${touched.username && errors.username ? "is-invalid" : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="username"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                autocomplete="off"
                                                className={`mt-2 form-control
                            ${touched.email && errors.email ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="mt-3">
                                                Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Enter password"
                                                className={`mt-2 form-control
                            ${touched.password && errors.password
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirmPassword" className="mt-3">
                                                Confirm Password
                                            </label>
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm password"
                                                className={`mt-2 form-control
      ${touched.confirmPassword && errors.confirmPassword
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="confirmPassword"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block mt-4"
                                        >
                                            Submit
                                        </button>
                                    </Form>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="p-3 mt-5">Form Submitted</h1>

                                    <div className="alert alert-success mt-3">
                                        Thank for your connecting with us. Here's what we got from
                                        you !
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item">Username: {values.username}</li>
                                        <li className="list-group-item">Email: {values.email}</li>
                                        <li className="list-group-item">
                                            Password: {values.password}
                                        </li>
                                        <li className="list-group-item">
                                            Confir Password: {values.confirmPassword}
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Signup





