import { Link } from "react-router-dom";
import CollaboratorCard from "../components/CollaboratorCard";
import SearchInput from "../components/SearchInput";

const Collaborators = () => {
  return (
    <div className="w-full p-2">
      <div className="mx-4 rounded-md bg-white p-6 shadow-sm">
        <div className="mb-2 flex w-full justify-between">
          <div>
            <Link
              to={"/collaborators/create"}
              className="flex items-center gap-1"
            >
              <span className="text-3xl font-medium text-dark-blue">+</span> Add
              new collaborators
            </Link>
          </div>
          <div>
            <SearchInput />
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <CollaboratorCard />
          <CollaboratorCard />
          <CollaboratorCard />
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
