import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"


export default function Register() {



    const formik = useFormik({
        initialValues: ({
            firstname: "john",
            email: "john@gmail.com",
            password: "123",
            conformpassword: "123"
        }),
        validationSchema: yup.object({
            firstname: yup
                .string()
                .required("Please Entre your first name "),
            email: yup
                .string()
                .required("Please Entre your Email ID"),
            password: yup
                .string()
                .required("Please  Entre The PassWord ")
                .min(3, "Please Enter minium 4 charactere")
                .max(6, "Please Enter Maximum 5  character"),
            conformpassword: yup
                .string()
                .required("Please  Entre The Conform  PassWord ")
                .min(3, "Please Enter minium 4 charactere")
                .max(6, "Please Enter Maximum 5  character")
                .oneOf([yup.ref("password")], "password not match"),

        }),
        onSubmit: (values,{resetForm}) => {

            console.log(values);
            resetForm()
        }
    })
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">

                        <div className="card">
                            <div className="card-header bg-warning">Signup</div>
                            <div className="card-body bg-success">
                                <form onSubmit={formik.handleSubmit}>  <div>
                                    <label for="name" className="form-label">First name</label>
                                    <input
                                        type="text"
                                        name='firstname'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.firstname && formik.touched.firstname ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.firstname}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.firstname}</div>
                                </div>
                                    <div className="mt-2">
                                        <label for="email" className="form-label"> Email</label>
                                        <input
                                            type="text"
                                            name='email'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}
                                            id="email"
                                            value={formik.values.email}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.email}</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="password" className="form-label">Password</label>
                                        <input
                                            type="text"
                                            name='password'
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            className={formik.errors.password && formik.touched.password ? "form-control is-invalid" : "form-control"}
                                            id="password"
                                            value={formik.values.password}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.password}</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="cpassword" className="form-label">Confirm Password</label>
                                        <input
                                            type="text"
                                            name='conformpassword'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.conformpassword && formik.touched.conformpassword ? "form-control is-invalid" : "form-control"}
                                            id="cpassword"
                                            value={formik.values.conformpassword}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            {formik.errors.conformpassword}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Signup
                                    </button>
                                    <p className="text-center mt-3">
                                        Already Have Account? <a href="#">Login</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}