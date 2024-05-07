import React from "react";
import { useState } from "react";
import logo from "../assets/image/svg/logo.svg";
import Commonbtn from "../common/Commonbtn";

const Navbaar = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <>
      <header className=" bg-white">
        <div className=" container w-100   pt-3 pb-3">
          <nav className=" d-flex align-items-center justify-content-between     ">
            <div className=" cursel_pointer position-relative z-1">
              <img src={logo} alt="logo" />
            </div>
            <ul
              className={`${
                nav ? "start-0" : "start_100"
              } mb-0 ps-0 d-flex align-items-center gap-23 mobile_view  list_style_none`}
            >
              <li className=" overflow-hidden text_d">
                <a
                  onClick={show}
                  href=""
                  className=" ff-urbanist  fw-normal text-16 lh-19  text-black  nav_text "
                >
                  HOME
                </a>
              </li>
              <li className=" overflow-hidden text_d">
                <a
                  onClick={show}
                  href=""
                  className=" ff-urbanist  fw-normal text-16 lh-19  text-black  nav_text "
                >
                  ABOUT US
                </a>
              </li>
              <li className=" overflow-hidden text_d">
                <a
                  onClick={show}
                  href=""
                  className=" ff-urbanist  fw-normal text-16 lh-19  text-black  nav_text "
                >
                  SERVICES
                </a>
              </li>
              <li className=" overflow-hidden text_d">
                <a
                  onClick={show}
                  href=""
                  className=" ff-urbanist  fw-normal text-16 lh-19  text-black  nav_text "
                >
                  PROCESS
                </a>
              </li>
              <li className=" overflow-hidden text_d">
                <a
                  onClick={show}
                  href=""
                  className=" ff-urbanist  fw-normal text-16 lh-19  text-black  nav_text "
                >
                  TESTIMONIALS
                </a>
              </li>
            </ul>

            <Commonbtn text="GET STARTED" />
            <div
              onClick={show}
              className="menu d-block d-lg-none position-relative  z-3"
            >
              <span></span>
              <span className="my-2"></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbaar;
