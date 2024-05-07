import React from "react";
import ellipes from "../assets/image/svg/contect_svg.svg";
import { Duelline } from "../common/icon";
import Contect from "./Contect";
const Having = () => {
  return (
    <>
      <section className="contect_bg_color  position-relative">
        <div className="container pb-133 pt-4">
          <div className=" d-flex justify-content-center">
            {" "}
            <p className=" d-flex align-items-center gap-2 ff-urbanist fw-normal text-20 lh-21 text-black mb-0">
              <Duelline /> CONTACT US
            </p>
          </div>

          <h2
            className=" fw-bold mt-2 ff-urbanist text-40 lh-43 text-center mb-48 text-blacknpm start
              "
          >
            Having any question?
          </h2>

          <div className="d-flex justify-content-center">
            <Contect />
          </div>

          <div className="contect_ellipes  d-lg-block d-none">
            <img src={ellipes} alt="ellipes" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Having;
