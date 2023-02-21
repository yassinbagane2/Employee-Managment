import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import TextInput from "../components/UI/TextInput";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { useFormik } from "formik";
import * as yup from "yup";

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("this filed is required"),
      password: yup.string().required("this filed is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-3 flex min-h-[520px] w-[720px] rounded-md bg-white shadow-sm">
        <div className="relative w-2/4 bg-[url('/img/desktop.jpg')] bg-cover bg-center backdrop-sepia-0">
          <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/80 text-white">
            <h2 className="text-4xl font-medium">Satoripop</h2>
            <p>Shine clever</p>
          </div>
        </div>
        <div className="flex w-2/4 flex-col justify-between p-4">
          <h1 className="text-5xl font-thin">Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <TextInput
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="user@exmaple.com"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            ) : (
              ""
            )}
            <TextInput
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm text-red-500">{formik.errors.password}</p>
            ) : (
              ""
            )}
            <div className="flex flex-row-reverse justify-between">
              <Link to="reset" className="font-poppins text-dark-blue">
                Forgot Password ?
              </Link>
              <div className="flex items-center gap-1">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label
                  className="font-poppins text-dark-blue"
                  htmlFor="rememberMe"
                >
                  Remeber Me?
                </label>
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
          <div>
            <ul className="flex justify-center gap-2 p-2">
              <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-blue-700 duration-200 hover:scale-110">
                <FiFacebook />
              </li>
              <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-blue-500 duration-200 hover:scale-110">
                <FiTwitter />
              </li>
              <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-pink-600 duration-200 hover:scale-110">
                <FiInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
