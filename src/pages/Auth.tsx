import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import TextInput from "../components/UI/TextInput";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Login: React.FC = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e: any) => {};
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
