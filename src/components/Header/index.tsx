"use client";
import { memo, ReactNode, useState } from "react";
import logo from "../../../public/assets/Logo.png";
import cross from "../../../public/assets/cross.svg";
import menu from "../../../public/assets/menu.svg";
import Link from "next/link";

function Header({ active }: { active: string }) {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="bg-[#000000] text-white flex justify-between items-center lg:py-3">
      <div>
        <Link href={"/"}>
          <img src={logo.src} className="h-[60px]" />
        </Link>
      </div>
      <div
        className="lg:hidden pr-10 cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <img src={menu.src} alt="menu svg" className="h-10 w-10" />
      </div>
      <div className="flex mr-14 items-center hidden lg:block">
        <Link
          href={"/"}
          className={
            active == "Home"
              ? "2xl:text-2xl lg:text-xl font-semibold bg-[#222222] p-2 mx-6  rounded-sm cursor-pointer"
              : "2xl:text-2xl lg:text-xl font-semibold cursor-pointer mx-6 p-2"
          }
        >
          Home
        </Link>
        <Link
          href={"/pincode"}
          className={
            active == "Pincode"
              ? "2xl:text-2xl lg:text-xl font-semibold bg-[#222222]  p-2 mx-6 rounded-sm cursor-pointer"
              : "2xl:text-2xl lg:text-xl font-semibold cursor-pointer mx-6 p-2"
          }
        >
          Search Pincode
        </Link>
        <Link
          href={"/inquiry"}
          className={
            active == "Inquery"
              ? "2xl:text-2xl lg:text-xl font-semibold bg-[#222222] p-2 mx-6 rounded-sm cursor-pointer"
              : "2xl:text-2xl lg:text-xl font-semibold cursor-pointer mx-6 p-2"
          }
        >
          Inquiry Table
        </Link>
        <Link
          href={"/signup"}
          className={
            active == "Signup"
              ? "2xl:text-2xl lg:text-xl font-semibold bg-[#FFFFFF] text-[#000000] p-2 mx-6 border  rounded-md cursor-pointer"
              : "2xl:text-2xl lg:text-xl font-semibold cursor-pointer border border-white mx-6 p-2  rounded-md"
          }
        >
          Signup
        </Link>
        <Link
          href={"/login"}
          className={
            active == "Login"
              ? "2xl:text-2xl lg:text-xl font-semibold bg-[#FFFFFF] text-[#000000] p-2  border mx-6 rounded-md cursor-pointer"
              : "2xl:text-2xl lg:text-xl font-semibold cursor-pointer border border-white p-2  mx-6 rounded-md"
          }
        >
          Login
        </Link>
      </div>
      <MobileMenu isVisible={isVisible}>
        <div className="flex flex-col items-center py-10">
          <img
            src={cross.src}
            alt="cross svg"
            className="h-20 w-20"
            onClick={() => setVisible(false)}
          />
          <div className="flex flex-col gap-10">
            <div
              className={
                active == "Home"
                  ? "bg-white text-gray-700 font-semibold w-96 text-center py-4 rounded-lg"
                  : "bg-gray-700 w-96 text-center py-4 rounded-lg"
              }
            >
              <Link
                className="text-2xl"
                href={"/"}
                onClick={() => setVisible(false)}
              >
                Home
              </Link>
            </div>
            <div
              className={
                active == "Pincode"
                  ? "bg-white text-gray-700 font-semibold w-96 text-center py-4 rounded-lg"
                  : "bg-gray-700 w-96 text-center py-4 rounded-lg"
              }
            >
              <Link
                className="text-2xl"
                href={"/pincode"}
                onClick={() => setVisible(false)}
              >
                Search Pincode
              </Link>
            </div>
            <div
              className={
                active == "Inquery"
                  ? "bg-white text-gray-700 font-semibold w-96 text-center py-4 rounded-lg"
                  : "bg-gray-700 w-96 text-center py-4 rounded-lg"
              }
            >
              <Link
                className="text-2xl"
                href={"/inquiry"}
                onClick={() => setVisible(false)}
              >
                Inquiry Table
              </Link>
            </div>
            <div
              className={
                active == "Signup"
                  ? "bg-white text-gray-700 font-semibold w-96 text-center py-4 rounded-lg"
                  : "bg-gray-700 w-96 text-center py-4 rounded-lg"
              }
            >
              <Link
                className="text-2xl"
                href={"/signup"}
                onClick={() => setVisible(false)}
              >
                Signup
              </Link>
            </div>
            <div
              className={
                active == "Login"
                  ? "bg-white text-gray-700 font-semibold w-96 text-center py-4 rounded-lg"
                  : "bg-gray-700 w-96 text-center py-4 rounded-lg"
              }
            >
              <Link
                className="text-2xl"
                href={"/login"}
                onClick={() => setVisible(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </MobileMenu>
    </div>
  );
}

function MobileMenu({
  isVisible,
  children,
}: {
  isVisible: boolean;
  children: ReactNode;
}) {
  if (!isVisible) {
    return null;
  }

  return <div className="fixed inset-0 bg-black ">{children}</div>;
}

export default memo(Header);
