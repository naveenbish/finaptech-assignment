"use client";
import Header from "@/components/Header";
import Validation from "@/components/Validation";
import { memo, useState } from "react";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [validate, setValidate] = useState<boolean>(false);

  function handleSubmit() {
    event?.preventDefault();
    setValidate(true);
    if (!name || !email || !phone || !pass) {
      return;
    }
    console.log(name, email, phone, pass);
    setName("");
    setEmail("");
    setPhone("");
    setPass("");
    setValidate(false);
  }
  return (
    <>
      <Header active="Signup" />
      <div className="flex justify-center items-center">
        <div className="shadow-2xl w-fit lg:p-10 p-5 m-5 my-14">
          <div className="text-5xl font-bold text-center">
            Create an account
          </div>
          <form className="py-5 flex flex-col gap-6">
            <div className="border-b border-black">
              <input
                type="text"
                value={name}
                placeholder="Name"
                className="w-full py-4 placeholder-gray-700 focus:outline-none text-2xl"
                onChange={(e) => setName(e.target.value)}
              />
              <Validation validate={validate} value={name} type="Name" />
            </div>
            <div className="border-b border-black">
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="w-full py-4 placeholder-gray-700 focus:outline-none text-2xl"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Validation validate={validate} value={email} type="email" />
            </div>
            <div className="border-b border-black">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                className="w-full py-4 placeholder-gray-700 focus:outline-none text-2xl"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Validation validate={validate} value={phone} type="Phone" />
            </div>
            <div className="border-b border-black">
              <input
                type="password"
                placeholder="Password"
                value={pass}
                className="w-full py-4 placeholder-gray-700 focus:outline-none text-2xl"
                onChange={(e) => setPass(e.target.value)}
              />
              <Validation validate={validate} value={pass} type="Password" />
            </div>
            <button
              className="bg-gray-800 text-white py-4 w-full  rounded-md text-3xl font-bold"
              onClick={() => handleSubmit()}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(Signup);
