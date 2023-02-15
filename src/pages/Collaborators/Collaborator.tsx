import React from "react";
import { Link, useParams } from "react-router-dom";
import CollaboratorDetails from "../../components/Collaborators/CollaboratorDetails";

const Collaborator: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="m-3 w-full">
      <div className="overflow-hidden rounded-md bg-white shadow-sm">
        <div className="flex h-24 flex-col items-center justify-center bg-dark-blue text-white">
          <h2 className="text-2xl">Yassin Bagane</h2>
          <div className="text-sm leading-none underline">
            <Link to={"edit"}>Edit this collaborator</Link>
            <button className="ml-3 text-sm underline">
              Delete this collaborator
            </button>
          </div>
        </div>
        <div className="mx-6 mt-8 flex items-center justify-between pb-6">
          <div className="flex items-center gap-x-3">
            <img
              className="h-32 w-32 rounded-full object-cover"
              src="/img/profile.avif"
              alt="profile"
            />
            <div className="leading-5">
              <h3 className="text-xl">Yassin Bagane</h3>
              <p>Mobile department</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <CollaboratorDetails />
        </div>
        <div className="mx-6 pb-6">
          <h3 className="text-xl font-medium">Leaves</h3>
          <table className="w-full border border-gray-300">
            <thead className="h-8 border-b">
              <tr className="flex text-left">
                <th className="w-2/4 border-r-2 p-2">Type</th>
                <th className="w-2/4 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <p className="py-1 text-center text-sm text-red-500">
                This collaborator has no leaves.
              </p>
            </tbody>
          </table>
        </div>
        <div className="mx-6 pb-6">
          <h3 className="text-xl font-medium">Skills</h3>
          <table className="w-full border border-gray-300">
            <thead className="h-8 border-b">
              <tr className="flex text-left">
                <th className="w-2/4 border-r-2 p-2">Type</th>
                <th className="w-2/4 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <p className="py-1 text-center text-sm text-red-500">
                This collaborator has no skills.
              </p>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
