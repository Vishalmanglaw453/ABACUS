import React from "react";
import { Duelline } from "../common/icon";
import { Card } from "../common/Helper";
import lyar from "../assets/image/png/servies_lyar.png";
import ellipes from "../assets/image/svg/servises_ellipes.svg"
const Servis = () => {
  return (
    <>
      <section className=" position-relative">
        <img className="servises_ellipes d-lg-block d-none " src={ellipes} alt="ellipes" />
        <div className="servis_bg_color">
          <div className="container pb-116 pt-3">
            <p className=" d-flex align-items-center gap-2 ff-urbanist fw-normal text-20 lh-21 text-black mb-0">
              <Duelline /> SERVICES
            </p>
            <h2 className=" ff-urbanist fw-bold text-40 lh-43 mb-0 mt-19">
              We run all kinds of services in{" "}
              <span className=" color-yellow d-block">form of software</span>
            </h2>
            <p className=" ff-urbanist fw-normal text-20 lh-26 text-black mb-0 opacity-75">
              We build great software, from ideas to market.
            </p>
            <div className="row pt-52">
              {Card.map((data, index) => (
                <>
                  <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center mt-lg-0 mt-4">
                    <div className=" servis_card h-100 d-flex flex-column align-items-center">
                      <img src={data.img} alt="img" />
                      <h2 className=" mb-0 ff-urbanist fw-bold text-24 lh-26 mt-27">
                        {data.heading}
                      </h2>
                      <p className=" mb-0 ff-urbanist fw-normal text-20 lh-26 mt-3 text-center">
                        {data.pera}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img className=" w-100" src={lyar} alt="lyar" />
        </div>
      </section>
    </>
  );
};

export default Servis;
