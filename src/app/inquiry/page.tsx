"use client";
import { memo, useEffect, useState } from "react";
import Model from "./Model";
import Header from "@/components/Header";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { inquiryTable } from "@/store/atoms";

const Inquery = () => {
  return (
    <>
      <Header active="Inquery" />
      <RecoilRoot>
        <InqueryBody />
      </RecoilRoot>
    </>
  );
};

function InqueryBody() {
  const [model, setModel] = useState<boolean>(false);
  const [inquiryData, setInquiryData] = useRecoilState(inquiryTable);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  function handleSave() {
    event?.preventDefault();
    if (name.length > 0) {
      // inquiryData[value].name = name;
      setInquiryData((prevData) =>
        prevData.map((item) =>
          item.id === value ? { ...item, name: name } : item,
        ),
      );
    }
    if (email.length > 0) {
      // inquiryData[value].name = name;
      setInquiryData((prevData) =>
        prevData.map((item) =>
          item.id === value ? { ...item, email: email } : item,
        ),
      );
    }
    if (mobile.length > 0) {
      // inquiryData[value].name = name;
      setInquiryData((prevData) =>
        prevData.map((item) =>
          item.id === value ? { ...item, mobile: mobile } : item,
        ),
      );
    }
    if (desc.length > 0) {
      // inquiryData[value].name = name;
      setInquiryData((prevData) =>
        prevData.map((item) =>
          item.id === value ? { ...item, description: desc } : item,
        ),
      );
    }
    setName("");
    setEmail("");
    setMobile("");
    setDesc("");
    setModel(false);
  }

  return (
    <div className="flex flex-col items-center min-h-[90vh] py-32 bg-[#F4F4F9] ">
      <div className="lg:w-[60vw] w-[90vw]">
        <div className="text-center text-4xl pb-16">Inquiry</div>
        {/* Table  */}
        <div className="w-full overflow-auto shadow ">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  S.no.
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap">
                  Email
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Mobile no.
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Description
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y ">
              {inquiryData.map((item: any) => {
                return (
                  <tr className="bg-white " key={item.id}>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.id < 9 ? `0${item.id + 1}` : item.id + 1}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.mobile}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.description}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <span
                        className="bg-blue-600 font-semibold rounded-sm text-white py-1 px-3 cursor-pointer"
                        onClick={() => {
                          setModel(true);
                          setValue(item.id);
                        }}
                      >
                        Edit
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Model isVisible={model}>
        <div>
          <div className="text-2xl font-semibold">Edit Inquiry Details</div>
          <div>
            <div className="flex gap-5 my-3 flex-wrap">
              <div className="flex items-center ">
                <div className="w-28">Name:</div>
                <input
                  type="text"
                  value={name}
                  placeholder={inquiryData[value].name}
                  className="focus:outline-none bg-gray-200 p-1 text-gray-500"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="flex items-center">
                <div className="w-28">Email iD:</div>
                <input
                  type="text"
                  className="focus:outline-none bg-gray-200 p-1 text-gray-500"
                  value={email}
                  placeholder={inquiryData[value].email}
                  onChange={(event) => {
                    setEmail(event?.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex items-center my-3">
              <div className="w-28">Mobile No.:</div>
              <input
                type="text"
                className="focus:outline-none bg-gray-200 p-1 text-gray-500"
                value={mobile}
                placeholder={inquiryData[value].mobile}
                onChange={(event) => {
                  setMobile(event.target.value);
                }}
              />
            </div>
            <div className="flex items-center my-3 ">
              <div className="md:w-[133px] w-[150px]">Description:</div>
              <input
                type="text"
                className="focus:outline-none bg-gray-200 p-1 text-gray-500 w-full"
                value={desc}
                placeholder={inquiryData[value].description}
                onChange={(event) => {
                  setDesc(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="py-2 px-3 bg-gray-200 rounded-md font-semibold"
              onClick={() => setModel(false)}
            >
              Cancel
            </button>
            <button
              className="py-2 px-5 text-white bg-blue-600 rounded-md font-semibold"
              onClick={() => handleSave()}
            >
              Save
            </button>
          </div>
        </div>
      </Model>
    </div>
  );
}

export default memo(Inquery);
