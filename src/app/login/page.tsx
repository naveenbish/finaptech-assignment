"use client";
import Header from "@/components/Header";
import { memo, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  function handleLogin() {
    event?.preventDefault();
    console.log(email, pass);
    setEmail("");
    setPass("");
  }
  return (
    <>
      <Header active="Login" />
      <div className="flex justify-center items-center">
        <div className="shadow-2xl w-fit md:p-10 p-2 my-20">
          <div className="text-5xl font-bold text-center">Login</div>
          <form className="py-5 flex flex-col justify-between gap-6 h-full">
            <div className="mb-32">
              <div className="border-b border-black">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-4 placeholder-gray-700 focus:outline-none text-2xl"
                />
              </div>
              <div className="border-b border-black">
                <input
                  type="password"
                  placeholder="Password"
                  value={pass}
                  className="w-full py-4 placeholder-gray-700 focus:outline-none text-2xl"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-[#0030D9] text-white py-4 mb-5 w-full  rounded-md text-3xl font-bold"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(Login);
