import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import { useState, useEffect } from "react";
const Home = () => {
  const [data, setdata] = useState({
    PackageNo: "",
    Prizes: "",
    Status: "",
    email: "",
  });
  const [backendData, setBackendData] = useState([{}]);

  const handleClick = () => {
    let email = document.querySelector("input").value;
    let url = "/data/" + email;
    fetch(url).then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          PackageNo: data.PackageNo,
          Prizes: data.Prizes,
          Status: data.Status,
          email: data.email,
        });
      })
    );
  };
  return (
    <div id="home">
      <Navbar />
      {/* make h1 heading as "login" at the top of page */}
      <h1 className="text-4xl text-center font-bold text-white">
        Fetch your details
      </h1>

      <div className="flex flex-col items-center justify-center opacity-95 mt-64">
        <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4">
          <input
            type="text"
            placeholder="Enter email"
            className="border-2 border-gray-300 p-2 rounded-lg"
          />

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        {data.email}
        <br />
        {data.PackageNo}
        <br />
        {data.Prizes}
        <br />
        {data.Status}
      </div>
    </div>
  );
};

export default Home;
