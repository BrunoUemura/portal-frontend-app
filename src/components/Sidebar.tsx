import Link from "next/link";
import Router from "next/router";
import { destroyCookie } from "nookies";
import { useContext } from "react";
import { FaBars, FaTimes, FaAngleLeft } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";

const options = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Expenses",
    href: "/expenses",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

export default function Sidebar() {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    destroyCookie(null, "portal.token");
    Router.push("/login");
  };

  return (
    <div className="w-1/5 h-screen bg-gray-800">
      <h1 className="text-white text-center text-xl mb-10">My Portal</h1>

      {options.map((option) => (
        <Link href={option.href} passHref>
          <button className="w-full py-2 text-lg text-white hover:bg-gray-900">
            {option.label}
          </button>
        </Link>
      ))}

      <button
        className="w-full py-2 text-lg text-white hover:bg-gray-900"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}
