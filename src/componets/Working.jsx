import React from "react";
import { Bulb, Design, Develop, Duelline, Launch, Plan } from "../common/icon";

const Working = () => {
  return (
    <>
      <section>
        <div className="container pt-63">
          <div className=" d-flex justify-content-center">
            <p className=" d-flex align-items-center gap-2 ff-urbanist fw-normal text-20 lh-21 text-black mb-0">
              <Duelline /> WORKING PROCESS
            </p>
          </div>
          <h2 className="  mt-2 ff-urbanist fw-bold text-40 lh-43 text-center mb-0 text-black">
            How does we works
          </h2>

          <div className=" mt-98 d-flex justify-content-lg-between gap-lg-0 gap-4 justify-content-center justify-content-lg-start position-relative flex-lg-nowrap  flex-wrap ">
            <div className=" z-2 position-relative  idea_max_w">
              <div className="common_first_box  d-flex justify-content-center align-items-center">
                <div className="common_second_box d-flex justify-content-center align-items-center">
                  <Bulb />
                </div>
              </div>
              <h3 className="  ff-urbanist fw-bold text-24 lh-26 text-black  mt-34 mb-0">
                Idea
              </h3>
              <p className=" mt-2 ff-urbanist fw-normal text-16 lh-23 text-black opacity-75 mb-0">
                Out team understand the product you want to create
              </p>
            </div>
            <div className=" z-2 position-relative  plan_max_w">
              <div className="common_first_box  d-flex justify-content-center align-items-center">
                <div className="common_second_box d-flex justify-content-center align-items-center">
                  <Plan />
                </div>
              </div>
              <h3 className="  ff-urbanist fw-bold text-24 lh-26 text-black  mt-34 mb-0">
                Plan
              </h3>
              <p className=" mt-2 ff-urbanist fw-normal text-16 lh-23 text-black opacity-75 mb-0">
                Our experts create a roadmap for the development product
              </p>
            </div>
            <div className=" z-2 position-relative  desgin">
              <div className="common_first_box  d-flex justify-content-center align-items-center">
                <div className="common_second_box d-flex justify-content-center align-items-center">
                  <Design />
                </div>
              </div>
              <h3 className="  ff-urbanist fw-bold text-24 lh-26 text-black  mt-34 mb-0">
                Design
              </h3>
              <p className=" mt-2 ff-urbanist fw-normal text-16 lh-23 text-black opacity-75 mb-0">
                Our designers work on the user experience and user interface
              </p>
            </div>
            <div className=" z-2 position-relative  idea_max_w">
              <div className="common_first_box  d-flex justify-content-center align-items-center">
                <div className="common_second_box d-flex justify-content-center align-items-center">
                  <Develop />
                </div>
              </div>
              <h3 className="  ff-urbanist fw-bold text-24 lh-26 text-black  mt-34 mb-0">
                Develop
              </h3>
              <p className=" mt-2 ff-urbanist fw-normal text-16 lh-23 text-black opacity-75 mb-0">
                Our engineers code, test and certify the product
              </p>
            </div>
            <div className=" z-2 position-relative  idea_max_w">
              <div className="common_first_box  d-flex justify-content-center align-items-center">
                <div className="common_second_box d-flex justify-content-center align-items-center">
                  <Launch />
                </div>
              </div>
              <h3 className="  ff-urbanist fw-bold text-24 lh-26 text-black  mt-34 mb-0">
                Launch
              </h3>
              <p className=" mt-2 ff-urbanist fw-normal text-16 lh-23 text-black opacity-75 mb-0">
                Our engineers bring the product to the market
              </p>
            </div>
            <div className=" time_line time_line_pos d-lg-block d-none"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Working;
