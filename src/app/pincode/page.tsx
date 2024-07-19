"use client";
import { memo, useEffect, useState } from "react";
import axios from "axios";
import Go from "../../../public/assets/Go.png";
import Header from "@/components/Header";
const Pincode = () => {
  const [data, setData] = useState<any[]>([]);
  const [status, setStatus] = useState<string>("");
  const [pincode, setPincode] = useState<number>(110001);

  function getData() {
    event?.preventDefault();
    if (isNaN(pincode)) {
      return;
    }
    setData([]);
    axios.get(`https://api.postalpincode.in/pincode/${pincode}`).then((res) => {
      const resData = res.data[0].PostOffice;
      setData(resData);
      setStatus(res.data[0].Status);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header active="Pincode" />
      <div className="flex flex-col justify-center items-center min-h-[90vh] py-32 bg-[#F4F4F9] ">
        <div className="lg:w-[50vw] xl:w-[40vw] w-[80vw] md:w-[70vw]">
          <div className="text-3xl text-center">Search Pincode</div>
          <form
            onSubmit={getData}
            className="my-10 h-[60px] rounded-full px-5 bg-white flex items-center justify-between"
          >
            <input
              type="text"
              className="text-xl w-full focus:outline-none"
              onChange={(event) => {
                setPincode(parseInt(event.target.value));
              }}
            />
            <button type="submit">
              <img src={Go.src} className="h-10 w-10" />
            </button>
          </form>
          <div className="border-b border-t border-black">
            <div className="text-3xl py-3">
              Count : {status == "Error" ? 0 : data.length}
            </div>
          </div>
          <div>
            {status == "Error" ? (
              "No data found"
            ) : (
              <PostOfficeData data={data} />
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

const PostOfficeData = memo(({ data }: PostofficeType) => {
  return (
    <div className="">
      {data.map((item: any) => {
        return (
          <div className="my-10 p-2 bg-white">
            <div className="text-xl text-[#0030D9] pb-2">Post Office</div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex">
                <div className="w-32">Name</div>
                <div>:- {item.name === null ? "null" : item.Name}</div>
              </div>
              <div className="flex">
                <div className="w-32">Division</div>
                <div>:- {item.Division === null ? "null" : item.Division}</div>
              </div>
              <div className="flex">
                <div className="w-32">Description</div>
                <div>
                  :- {item.Description === null ? "null" : item.Description}
                </div>
              </div>
              <div className="flex">
                <div className="w-32">Region</div>
                <div>:- {item.Region === null ? "null" : item.Region}</div>
              </div>
              <div className="flex">
                <div className="w-32">BranchType</div>
                <div>
                  :- {item.BranchType === null ? "null" : item.BranchType}
                </div>
              </div>
              <div className="flex">
                <div className="w-32">Block</div>
                <div>:- {item.Block === null ? "null" : item.Block}</div>
              </div>
              <div className="flex">
                <div className="w-32">DeliveryStatus</div>
                <div>
                  :-{" "}
                  {item.DeliveryStatus === null ? "null" : item.DeliveryStatus}
                </div>
              </div>
              <div className="flex">
                <div className="w-32">State</div>
                <div>:- {item.State === null ? "null" : item.State}</div>
              </div>
              <div className="flex">
                <div className="w-32">Circle</div>
                <div>:- {item.Circle === null ? "null" : item.Circle}</div>
              </div>
              <div className="flex">
                <div className="w-32">Country</div>
                <div>:- {item.Country === null ? "null" : item.Country}</div>
              </div>
              <div className="flex">
                <div className="w-32">District</div>
                <div>:- {item.District === null ? "null" : item.District}</div>
              </div>
              <div className="flex">
                <div className="w-32">Pincode</div>
                <div>:- {item.Pincode === null ? "null" : item.Pincode}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});
interface PostofficeType {
  data: any[];
}

export default memo(Pincode);
