"use client";
import { useState } from "react";
export default function InquiryForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  function handleSumbit() {
    event?.preventDefault();
    console.log("saved");
  }
  return (
    <div className="flex flex-col justify-center items-center bg-white py-10 px-20">
      <div className="text-3xl font-bold">Inquiry</div>
      <form className="md:w-[60vw]">
        <div className="w-full flex justify-center items-center border-b my-3">
          <label className="pr-4 w-28">Name</label>
          <input
            type="text"
            className="w-full p-4 focus:outline-none text-gray-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center items-center border-b my-3">
          <label className="pr-4 w-28">Email Id</label>
          <input
            type="text"
            className="w-full p-4 focus:outline-none text-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center items-center border-b my-3">
          <label className="pr-4 w-28">Mobile No.</label>
          <input
            type="text"
            className=" w-full p-4 focus:outline-none text-gray-500"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-center items-center border-b my-3">
          <label className="pr-4 w-28">Description</label>
          <textarea
            className="text-gray-500 w-full p-4 focus:outline-none overflow-hidden resize-none"
            rows={1}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className=" w-full text-center">
          <button
            className="bg-[#0030D9] py-2 px-16 rounded-full text-white font-semibold text-xl"
            onClick={() => handleSumbit()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
