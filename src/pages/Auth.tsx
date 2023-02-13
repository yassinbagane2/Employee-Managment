import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Login: React.FC = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = () => {};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="mx-3 bg-white rounded-md shadow-sm w-[720px] min-h-[520px] flex overflow-hidden">
        <div className="w-2/4 bg-[url('/img/desktop.jpg')] bg-center bg-cover backdrop-sepia-0 relative">
          <div className="text-white flex items-center justify-center flex-col absolute w-full h-full bg-black/80">
            <h2 className="text-4xl font-medium">Satoripop</h2>
            <p>Shine clever</p>
          </div>
        </div>
        <div className="w-2/4 flex flex-col justify-between p-4">
          <h1 className="text-5xl font-thin">Login</h1>
          <form>
            <TextInput
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="user@exmaple.com"
            />
            <TextInput
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
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
            <Button>Submit</Button>
          </form>
          <div className="flex justify-center">
            <ul className="flex gap-4">
              <li className="bg-gray-200 text-blue-700 rounded-full w-8 h-8 hover:scale-110 duration-200 flex items-center justify-center cursor-pointer">
                <FiFacebook />
              </li>
              <li className="bg-gray-200 text-blue-500 rounded-full w-8 h-8 hover:scale-110 duration-200 flex items-center justify-center cursor-pointer">
                <FiTwitter />
              </li>
              <li className="bg-gray-200 text-pink-600 rounded-full w-8 h-8 hover:scale-110 duration-200 flex items-center justify-center cursor-pointer">
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
