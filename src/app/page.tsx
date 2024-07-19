import banner from "../../public/assets/banner.png";
import grid1 from "../../public/assets/grid1.png";
import grid2 from "../../public/assets/grid2.png";
import grid3 from "../../public/assets/grid3.png";
import grid4 from "../../public/assets/grid4.png";
import grid5 from "../../public/assets/grid5.png";
import grid6 from "../../public/assets/grid6.png";
import add from "../../public/assets/add.svg";
import Header from "@/components/Header";
import InquiryForm from "@/components/InquiryForm";
import "./gradient.css";

export default function Home() {
  return (
    <>
      <Header active={"Home"} />
      <div className="bg-[#F4F4F9]">
        {/* Banner */}
        <div>
          <img src={banner.src} alt="banner img" />
        </div>
        <div className="py-16 flex flex-col gap-20 justify-center items-center ">
          {/* 1st part */}
          <div className="text-center md:w-[50vw] w-[70vw]  lg:w-[40vw] m-3 lg:m-5 xl:w-[30vw]">
            <p className="text-2xl font-normal mb-6">
              Where Martial Arts Excellence Meets Timeless Tradition
            </p>
            <p className="">
              At dojo, we are not just a martial arts school; we are a community
              dedicated to the pursuit of excellence, personal growth, and the
              age-old traditions of martial arts. Nestled at the heart of [Your
              Location], our dojo is more than just a physical space; it's a
              sanctuary where individuals of all ages and backgrounds come
              together to embark on a transformative journey.
            </p>
          </div>
          {/* 2nd part */}
          <div className="m-3 lg:m-10 xl:mx-48 lg:mx-36  md:mx-20 grid grid-cols-3">
            <div className=" flex flex-col justify-center items-center p-5 md:p-[70px] lg:p-[100px] xl:p-[130px] gradient-border">
              <img
                src={grid1.src}
                className=" mb-4 md:mb-6 h-[100px] w-[100px] "
              />
              <p className="text-xs  text-center text-wrap ">
                Create and organize your courses and curriculum
              </p>
            </div>
            <div className="border-b border-gray-500 flex flex-col justify-center items-center p-5 md:p-[70px] lg:p-[100px] xl:p-[130px] ">
              <img src={grid2.src} className=" mb-4 h-[100px] w-[100px]" />
              <p className="text-xs lg:w-[200px] text-center text-wrap ">
                Interactive Livestream for Group and Private lessons
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center p-5 md:p-[70px] lg:p-[100px] xl:p-[130px] gradient-border-2">
              <img src={grid3.src} className=" mb-4 h-[100px] w-[100px]" />
              <p className="text-xs lg:w-[200px] text-center text-wrap">
                Charge by monthly subscription or ontime payment
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-[70px] lg:p-[100px] xl:p-[130px] gradient-border-right">
              <img src={grid4.src} className=" mb-4 h-[100px] w-[100px]" />
              <p className="text-xs lg:w-[200px] text-center text-wrap">
                Create certification for students that complete your courses and
                test them via livestream or written exam
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center p-5 md:p-[70px] lg:p-[100px] xl:p-[130px] ">
              <img src={grid5.src} className=" mb-4 h-[100px] w-[100px]" />
              <p className="text-xs lg:w-[200px] text-center text-wrap">
                Receive 90% of all revenue you make from your channel
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center p-5 md:p-[70px] lg:p-[100px] xl:p-[130px] gradient-border-left">
              <img src={grid6.src} className=" mb-4 h-[100px] w-[100px]" />
              <p className="text-xs lg:w-[200px] text-center text-wrap">
                Decide which content you want to charge for and what you want to
                make free
              </p>
            </div>
          </div>
          {/* 3rd part  */}
          <Faqs />
          {/* 4th part  */}
          <InquiryForm />
        </div>
      </div>
    </>
  );
}

function Faqs() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl">Frequently Asked Questions (FAQs)</div>
      <div className="lg:w-[60vw] p-10">
        <div className="border-b pb-2 flex justify-between items-center">
          <div className="">What is THEDOJO.com?</div>
          <img src={add.src} className="h-10 w-10" />
        </div>
        <div className="border-b pb-2 flex justify-between items-center">
          <div className="">
            What is the revenue share between THEDOJO.com and channel owners?
          </div>
          <img src={add.src} className="h-10 w-10" />
        </div>
        <div className="border-b pb-2 flex justify-between items-center">
          <div className="">How many channels can I subscribed to?</div>
          <img src={add.src} className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}
