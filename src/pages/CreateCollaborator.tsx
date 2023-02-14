import { useState } from "react";
import TextInput from "../components/TextInput";

const CreateCollaborator: React.FC = () => {
  const initialState = {
    fullname: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  };
  const handleInputChange = () => {};
  const [values, setValues] = useState(initialState);
  return (
    <div className="w-full p-2">
      <div className="rounded-md bg-white shadow-sm">
        <div className="h-32 bg-dark-blue text-center text-white    ">
          <h2 className="mt-8 text-2xl">Create collaborator</h2>
          <p className="text-sm leading-none">Fill out the form below</p>
        </div>
        <div className="p-4 font-poppins">
          <h3 className="text-xl font-medium">Contact</h3>
        </div>
        <form className="mx-3 flex flex-wrap gap-x-4 text-sm">
          <TextInput
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
            placeholder="Jhon doe"
            className="w-72"
          />
          <TextInput
            type="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder="Jhondoe@example.com"
            className="w-72"
          />
          <TextInput
            type="text"
            name="phone"
            value={values.phoneNumber}
            onChange={handleInputChange}
            placeholder="(+216) 50 123 123"
            className="w-72"
          />
          <TextInput
            type="text"
            name="username"
            value={values.username}
            onChange={handleInputChange}
            placeholder="jhondoe"
            className="w-72"
          />
          <TextInput
            type="password  "
            name="password  "
            value={values.password}
            onChange={handleInputChange}
            className="w-72"
          />
          <div className="flex flex-col justify-center">
            <label htmlFor="image">Set profile Image</label>
            <input
              type="file"
              className="file:bg-dark-blue file:py-0 file:text-white file:hover:cursor-pointer"
              name="image"
              id="image"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCollaborator;
