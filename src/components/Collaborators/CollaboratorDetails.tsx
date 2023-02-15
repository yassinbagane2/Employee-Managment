import React from "react";
import {
  AiFillIdcard,
  AiFillMail,
  AiFillPhone,
  AiFillHome,
  FaBirthdayCake,
  MdFamilyRestroom,
  IoMaleFemaleSharp,
} from "../../pages/Collaborators/index";
const CollaboratorDetails: React.FC = () => {
  return (
    <div className="text-sm text-gray-600">
      <ul className="flex flex-col items-end">
        <li className="flex items-center gap-1">
          12345678
          <AiFillIdcard className="text-lg text-blue-500" />
        </li>
        <li className="flex items-center gap-1">
          yassin.bagane2@gmail.com
          <AiFillMail className="text-lg text-blue-500" />
        </li>
        <li className="flex items-center gap-1">
          52544318
          <AiFillPhone className="text-lg text-blue-500" />
        </li>
        <li className="flex items-center gap-1">
          Lorem ipsum dolor sit.
          <AiFillHome className="text-lg text-blue-500" />
        </li>
        <li className="flex items-center gap-1">
          25/12/1985
          <FaBirthdayCake className="text-lg text-blue-500" />
        </li>
        <li className="flex items-center gap-1">
          Single
          <MdFamilyRestroom className="text-lg text-blue-500" />
        </li>
        <li className="flex items-center gap-1">
          Female
          <IoMaleFemaleSharp className="text-lg text-blue-500" />
        </li>
      </ul>
    </div>
  );
};

export default CollaboratorDetails;
