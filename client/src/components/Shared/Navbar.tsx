import { Link } from "react-router-dom";
import { FiSettings, FiLogOut, FiMenu } from "react-icons/fi";

interface Props {
  hideSidebar: () => void;
}
const Navbar: React.FC<Props> = ({ hideSidebar }) => {
  return (
    <nav className="z-10 flex h-16 w-full items-center justify-between border-b bg-white px-6">
      <div>
        <button>
          <FiMenu onClick={hideSidebar} className="text-3xl text-dark-blue" />
        </button>
      </div>
      <div className="flex gap-3">
        <Link className="flex items-center gap-2" to={"settings"}>
          <FiSettings className="text-xl text-dark-blue" />
          Settings
        </Link>
        <Link className="flex items-center gap-2" to={"/"}>
          <FiLogOut className="text-xl text-dark-blue" />
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
