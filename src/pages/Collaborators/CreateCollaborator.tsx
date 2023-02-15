import { useState } from "react";
import SelectOption from "../../components/UI/SelectOption";
import TextInput from "../../components/UI/TextInput";
import {
  AiOutlineIdcard,
  HiOutlinePencilAlt,
  AiOutlineStar,
  TiChartBarOutline,
  TiTree,
} from "./index";
const CreateCollaborator: React.FC = () => {
  const initialState = {
    fullname: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    birthdate: "",
    address: "",
    status: "",
    cardId: "",
  };
  const handleInputChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
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
        <form className="mx-3 text-sm">
          <div className="flex flex-wrap gap-x-3">
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
          </div>

          <div className="mt-10 flex items-start gap-5 pb-6">
            <div className="w-80 rounded-md bg-gray-800 text-white">
              <ul className="flex h-full flex-col justify-between">
                <li className="mt-1 flex cursor-pointer items-center gap-2 bg-gray-700 py-2 pl-3">
                  <AiOutlineIdcard className="text-lg text-indigo-200" />
                  Informations
                </li>
                <li className="mt-1 flex cursor-pointer items-center gap-2 pb-2 pl-3">
                  <HiOutlinePencilAlt className="text-lg text-indigo-200" />
                  Employment contract
                </li>
                <li className="mt-1 flex cursor-pointer items-center gap-2 pb-2 pl-3">
                  <TiTree className="text-lg text-indigo-200" />
                  Leaves counter
                </li>
                <li className="mt-1 flex cursor-pointer items-center gap-2 pb-2  pl-3">
                  <AiOutlineStar className="text-lg text-indigo-200" /> Skills
                </li>
                <li className="mt-1 flex cursor-pointer items-center gap-2 pb-2 pl-3">
                  <HiOutlinePencilAlt className="text-lg text-indigo-200" />
                  Trainings
                </li>
                <li className="mt-1 flex cursor-pointer  items-center gap-2 pb-2 pl-3">
                  <TiChartBarOutline className="text-lg text-indigo-200" />
                  Evaluations
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-x-3">
              <TextInput
                name="bithdate"
                type="date"
                value={values.birthdate}
                onChange={handleInputChange}
                placeholder="yyyy-dd-dd"
                className="w-72 cursor-pointer"
              />
              <TextInput
                name="address"
                type="text"
                value={values.address}
                onChange={handleInputChange}
                className="w-72"
              />
              <TextInput
                name="status"
                label="Civil status"
                type="text"
                value={values.status}
                onChange={handleInputChange}
                className="w-72"
              />
              <SelectOption name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </SelectOption>
              <TextInput
                name="cardId"
                label="ID card number"
                type="text"
                value={values.cardId}
                onChange={handleInputChange}
                className="w-72"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCollaborator;
