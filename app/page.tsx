"use client";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const imageStyle = {
  borderRadius: "3%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const logoStyle = {
  borderRadius: "50%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default function Home() {
  const [showForm, setshowForm] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const uri =
      "https://script.google.com/macros/s/AKfycbz_k1adhV1BaxNvpQSq-gWTqgWMZiSo2m-tRpzeBQsELpvFdI1CF012hia5YrQG5nAKVA/exec";
    fetch(uri, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&College=${e.target.college.value}&Phone=${e.target.phone.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setshowForm(false);
        alert(
          `${data}\nThank you for your submission ${e.target.name.value}!!!`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="w-screen sm:h-screen flex flex-col justify-center relative sm:flex-row">
      <button
        onClick={() => {
          setshowForm(false);
        }}
      >
        <RxCross2
          className={`absolute right-10 top-8 z-30 text-xl ${
            !showForm && "hidden"
          }`}
        />
      </button>
      <section
        className={`w-screen h-screen z-20 bg-white absolute top-0 left-0 opacity-100 flex flex-col justify-center items-center ${
          !showForm && "hidden"
        }`}
      >
        <h1 className="text-2xl font-bold mb-5">Your Info</h1>
        <form onSubmit={handleSubmit} className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              placeholder="University of Tech"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(555) 123-4567"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
      <div className={`w-screen px-[10vw] sm:px-0 sm:w-[45vw] sm:h-screen sm:pt-20 pt-8 lg:w-[30vw] ${showForm && 'hidden'}`}>
        <h1 className="text-center font-sans text-2xl sm:text-xl font-extrabold text-white sm:text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-5 md:text-3xl lg:text-4xl">
          Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top
          Placements
        </h1>
        <div>
          <h3 className="font-semibold text-gray-100 text-xs mb-1 md:text-sm">
            Hosted By
          </h3>
          <div className="w-full sm:w-[40vw] h-[1px] bg-gray-200 lg:w-[27vw]"></div>
          <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="logo"
                width={25}
                height={25}
                style={logoStyle}
                priority={false}
              />
              <h3 className="font-bold text-sm text-gray-100 md:text-md">
                SoarX
              </h3>
            </div>
            <div className="flex gap-3 items-center pr-12">
              <BsTwitterX className="text-white" />
              <FaInstagram className="text-white" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="mt-5 flex gap-3 items-center">
              <BsCalendar2DateFill className="text-purple-900 text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]" />
              <div className="text-white">
                <h3 className="font-bold text-sm">22nd October 2024</h3>
                <p className="font-semibold text-xs">12:00 pm - 1:00 pm</p>
              </div>
            </div>
            <div className="mt-5 flex gap-2 items-center pr-10">
              <FaYoutube className="text-purple-900 text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]" />
              <div className="text-white">
                <h3 className="font-bold text-sm">YouTube</h3>
                <p className="font-semibold text-xs">Platform for the event</p>
              </div>
            </div>
          </div>
          <div className="font-semibold text-md text-gray-100 mt-12">
            Welcome! To join the event, please register below.
          </div>
          <div className="pr-3 mt-3">
            <button
              className="bg-purple-700 w-full text-white rounded-lg p-1"
              onClick={() => {
                setshowForm(true);
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className={`flex flex-col lg:flex-row ${showForm && 'hidden'}`}>
        <div className="px-[10vw] sm:px-0 w-screen sm:w-[40vw] sm:h-screen flex items-start justify-center pt-5 sm:pt-20 lg:w-[25vw]">
          <img
            src="/event_poster.avif"
            style={imageStyle}
            className="w-[60vw] sm:w-[25vw] lg:w-[300px]"
            alt="poster"
          />
        </div>
        <div className="px-[10vw] w-screen sm:w-[40vw] sm:h-screen pt-4 sm:px-3 lg:w-[30vw] lg:pt-20">
          <h1 className="text-xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] mb-5 lg:text-3xl">
            About the Event
          </h1>
          <p className="text-sm text-white font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] lg:text-md">
            🚀 Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top
            Placements 🚀
            <br />
            ​Join us for an exclusive session with Anshima Choudhary, a seasoned
            Senior Software Development Engineer at Microsoft. Are you a student
            aspiring to excel in placement interviews and secure top positions?
            This is an opportunity you can't afford to miss!
            <br />
            🔍 Session Highlights: <br />- Gain Insider Tips: Discover the
            insider knowledge and strategies that have propelled Anshima to
            success in her career at Microsoft. <br />- Placement Interview
            Mastery: Learn how to approach and excel in placement interviews,
            and get a step ahead in the competitive tech industry.
            <br />
            👩‍💼 About Anshima Choudhary: <br />
            Anshima is a highly accomplished Senior Software Development
            Engineer at Microsoft. She is a 2018 Harvard Model United Nations
            Winner and has also contributed her expertise at MakeMyTrip. An
            alumni of NSIT, she graduated with a degree in Computer Science and
            Engineering in 2020.
          </p>
        </div>
      </div>
    </main>
  );
}
