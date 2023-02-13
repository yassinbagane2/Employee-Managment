import { Link } from "react-router-dom";
import { FiSettings, FiLogOut, FiMenu } from "react-icons/fi";

interface Props {
  hideSidebar: () => void;
}
const Navbar: React.FC<Props> = ({ hideSidebar }) => {
  return (
    <nav className="flex items-center justify-between px-6 z-10 w-full bg-white h-16 border-b">
      <div>
        <button>
          <FiMenu onClick={hideSidebar} className="text-3xl text-dark-blue" />
        </button>
      </div>
      <div className="flex gap-3">
        <Link className="flex items-center gap-2" to={"settings"}>
          <FiSettings className="text-dark-blue text-xl" />
          Settings
        </Link>
        <Link className="flex items-center gap-2" to={"lougout"}>
          <FiLogOut className="text-dark-blue text-xl" />
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
