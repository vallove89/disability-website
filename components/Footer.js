import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from "next/link";
import ButtonOutline from "./misc/ButtonOutline";

function Footer() {
  return (
      <footer className="bg-blue-500">
        <div className="bg-white-300 pt-10 pb-10">
            <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
                <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">

                <p className="mb-4 text-white">
                Have a picture or storie that demonstrates abuses of ADA laws and principle. Please, share by submiting below.
                    <Link href="/submit">
                        <a className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75">
                            <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2"><ButtonOutline>Submit</ButtonOutline></span>
                        </a>
                    </Link>
                </p>
                <div className="flex w-full mt-2 mb-8 -mx-2">
                    <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md bg-white">
                    <FaFacebook className="h-6 w-6" />
                    </div>
                    <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md bg-white">
                    <FaTwitter className="h-6 w-6" />
                    </div>
                    <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md bg-white">
                    <FaInstagram className="h-6 w-6" />
                    </div>
                </div>
                <p className="text-gray-400">©2022ADAethics.com</p>
                </div>
                <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-10 flex flex-col">
                <p className="text-black-600 mb-4 font-medium text-lg text-white">Main Menu</p>
                <ul className="text-white">
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                        <Link href="/">
                            <a>Home{" "}</a>
                        </Link>
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                        <Link href="/about">
                            <a>About Us{" "}</a>
                        </Link>
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                        <Link href="/submit">
                            <a>Submit{" "}</a>
                        </Link>
                    </li>
                </ul>
                </div>
                <div className="row-span-2 sm:col-span-3 sm:col-start-10 sm:col-end-13 flex flex-col">
                <p className="text-white mb-4 font-medium text-lg">Secondary Menu</p>
                <ul className="text-white">
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                        <Link href="/parking/1">
                            <a>Disability Parking{" "}</a>
                        </Link>
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                        <Link href="/ada-compliance/1">
                            <a>ADA Compliance{" "}</a>
                        </Link>
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                        <Link href="/privacy">
                            <a>Privacy Policy{" "}</a>
                        </Link>
                    </li>
                    <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
                        <Link href="/terms">
                            <a>Terms & Conditions{" "}</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;