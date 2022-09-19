import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from "react-router-dom"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { loginAction } from '../redux/actions/adminAction'
export default function Login() {
    const { login } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: 'super@gmail.com',
            password: '123'
        },
        validationSchema: yup.object({
            email: yup.string().required("Please Enter Email"),
            password: yup.string().required("Please Enter password")
        }),
        onSubmit: values => dispatch(loginAction(values))
    })
    useEffect(() => {
        if (login && login.super) {
            navigate("/admin/dashboard")
        }
    }, [login])
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="form-label">First Email</label>
                                    <input
                                        type="text" name='email' value={formik.values.email} className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password" name='password' value={formik.values.password} className={formik.errors.password && formik.touched.password ? "form-control is-invalid" : "form-control"} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                                <p className="text-center mt-3">
                                    Dont Have Account? <a >Create Account</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}