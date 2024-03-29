import React from "react";
import Link from "next/link";
import { CgMenu } from 'react-icons/cg';
import ButtonOutline from "./misc/ButtonOutline";

function NavBar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link href="/">
                <a
                    className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
                >
                <span className="text-xl text-red-700">ADA</span>ethics.com
                </a>
              </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <CgMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                  <Link href="/">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                    </a>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link href="/parking/1">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Disability Parking</span>
                    </a>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link href="/ada-compliance/1">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">ADA Failures</span>
                    </a>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link href="/submit">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2"><ButtonOutline>Submit</ButtonOutline></span>
                    </a>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;