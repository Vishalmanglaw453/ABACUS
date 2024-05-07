import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { Duelline } from "../common/icon";
import Commonbtn from "../common/Commonbtn";
const Contect = () => {
  const [inputvalue, setValue] = useState({
    first: "",
    second: "",
    third: "",
    four: "",
    five: "",
  });

  const addvalue = (e) => {
    setValue({ ...inputvalue, [e.target.name]: e.target.value });
  };
  function fromsubmit(e) {
    e.preventDefault();
    setValue({ first: "", second: "", third: "", four: "", five: "" });
    Swal.fire({
      title: "Good job!",
      text: "Your task has been added !",
      icon: "success",
    });

    const serviceID = "service_cown3sg";
    const templateID = "template_ww98bbd";
    const userID = "_1XTPe6CahrlkVPya";
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
      },
      (error) => {
        console.error("Email failed to send!", error.text);
      }
    );
  }

  return (
    <>
      <div className="heaving_card position-relative">
        <form onSubmit={fromsubmit}>
          <div className="  d-flex flex-sm-row flex-column gap-3">
            <div className=" input_parent">
              <label className=" ff-urbanist text-16 fw-normal text-black  ">
                Name*
              </label>
              <input
                className=" name_input"
                required
                type="text"
                value={inputvalue.first}
                name="first"
                onChange={addvalue}
              />
            </div>
            <div className=" input_parent">
              <label className=" ff-urbanist text-16 fw-normal text-black  ">
                Email address*
              </label>
              <input
                className=" name_input"
                required
                type="email"
                value={inputvalue.second}
                name="second"
                onChange={addvalue}
              />
            </div>
          </div>
          <div className="  d-flex flex-sm-row flex-column gap-3">
            <div className=" input_parent">
              <label className=" ff-urbanist text-16 fw-normal text-black  ">
                Phone number
              </label>
              <input
                className=" name_input"
                required
                type="number"
                value={inputvalue.third}
                name="third"
                onChange={addvalue}
              />
            </div>{" "}
            <div className=" input_parent">
              <label className=" ff-urbanist text-16 fw-normal text-black  ">
                Company*
              </label>
              <input
                className=" name_input"
                required
                type="text"
                value={inputvalue.four}
                name="four"
                onChange={addvalue}
              />
            </div>
          </div>
          <div className=" mb-49 input_parent">
            <label className=" ff-urbanist text-16 fw-normal text-black  ">
              Message*
            </label>
            <input
              className=" pt-30 name_input"
              required
              type="text"
              value={inputvalue.five}
              name="five"
              onChange={addvalue}
            />
          </div>
          <Commonbtn text="GET IN TOUCH"/>
        </form>
      </div>
    </>
  );
};

export default Contect;
