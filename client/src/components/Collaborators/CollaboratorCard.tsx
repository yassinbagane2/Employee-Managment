import { Link } from "react-router-dom";

interface Props {
  id: number;
}

const CollaboratorCard: React.FC<Props> = ({ id }) => {
  return (
    <Link
      to={`${id}`}
      className="flex h-72 w-64 flex-col items-center rounded-md bg-dark-blue p-6 text-white shadow-sm"
    >
      <img
        src="img/profile.avif"
        className="mb-2 h-24 w-24 rounded-full object-cover"
        alt="collaborator"
      />
      <h2 className="text-lg font-medium text-indigo-200">Yassin Bagane</h2>
      <p className="text-sm leading-3">AI department</p>
      <p className="mt-2 text-clip text-center text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        consequatur nulla maxime error praesentium optio totam beatae sit ipsam
        repellat.
      </p>
    </Link>
  );
};

export default CollaboratorCard;
