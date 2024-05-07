import React from "react";
import about from "../assets/image/png/about-img.png";
import { Duelline } from "../common/icon";
import lyar from "../assets/image/png/about_lyar.png"

const About = () => {
  return (
    <>
      <section>
        <div className="container pt-64 pb-108">
          <div className="row">
            <div className="col-lg-6 col-12 d-flex  justify-content-center justify-content-lg-start ">
              <img className=" w-100" src={about} alt="about" />
            </div>
            <div className="col-lg-6 col-12  pb-3 d-flex flex-column justify-content-end mt-lg-0 mt-4">
              <p className=" d-flex align-items-center gap-2 ff-urbanist fw-normal text-20 lh-21 text-black mb-0">
               <Duelline/> ABOUT US
              </p>
              <h2 className=" mt-21 ff-urbanist  fw-bold text-40 lh-43 mb-0">
                We build digital products , from{" "}
                <span className=" color-yellow">idea to market</span>
              </h2>
              <p className=" ff-urbanist mb-0 fw-normal text-20 lh-26 text-black mt-4  opacity-75">We build digital products, from idea to market</p>
              <p className=" ff-urbanist mb-0 fw-normal text-20 lh-26 text-black mt-2  opacity-75">
                Since 2012, Abacus has been on a mission to transform people's
                ideas into digital products.
              </p>
              <p className=" ff-urbanist mb-0 fw-normal text-20 lh-26 text-black mt-2  opacity-75">
                By combining strategy, design and engineering, we provide a 360
                degree approach to digital product development.
              </p>
            </div>
        
          </div>
        </div>
        <div><img className=" w-100" src={lyar} alt="lyar" /></div>
      </section>
    </>
  );
};

export default About;
