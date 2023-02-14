import { useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const Settings: React.FC = () => {
  const handleInputChange = (e: any) => {
    e.preventDefault();
  };
  const initiailState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const [values, setValues] = useState(initiailState);
  return (
    <div className="w-full">
      <div className="mx-auto mt-6 h-[610px] w-[420px] rounded-md bg-white shadow-sm">
        <div className="flex h-28 flex-col items-center justify-center bg-dark-blue text-white">
          <h2 className="text-2xl">Settings</h2>
          <p className="text-sm">Fill out the form below</p>
        </div>
        <form className="mx-4 px-3 py-2 text-sm">
          <TextInput
            name="fullname"
            onChange={handleInputChange}
            type="text"
            value={values.fullname}
            placeholder={"Jhon doe"}
          />
          <TextInput
            name="username"
            onChange={handleInputChange}
            type="text"
            value={values.username}
            placeholder="jhondoe"
          />
          <TextInput
            name="email"
            onChange={handleInputChange}
            type="email"
            value={values.email}
            placeholder="jhondoe@example.com"
          />
          <TextInput
            name="password"
            onChange={handleInputChange}
            type="password"
            value={values.password}
          />
          <TextInput
            name="repeat-password"
            onChange={handleInputChange}
            type="password"
            value={values.repeatPassword}
          />
          <label htmlFor="profile-img">Change profile image</label>
          <input type="file" name="image" id="image" />
          <Button className="rounded-full duration-200 hover:bg-dark-blue/90">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
