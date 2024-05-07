import React from "react";
import Navbaar from "./Navbaar";
import heroimg from "../assets/image/png/hero-img.png";
import lyar from "../assets/image/png/hero_lyar.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import Contect from "./Contect";
import ellipes from "../assets/image/svg/hero_ellipes.svg"
const Hero = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className=" hero_bg d-flex flex-column">
        <Navbaar />
        <div className="container d-flex flex-column justify-content-center flex-grow-1 w-100">
          <div className="row">
            <div className="col-lg-6 col-12 order-lg-1 order-2 mt-lg-0 mt-4">
              {" "}
              <h2 className=" text-white mb-0 ff-urbanist fw-bold text-64 lh-69">
                We build software with{" "}
                <span className=" color-yellow">your business</span> in mind.
              </h2>
              <p className=" ff-poppins mb-66 mt-19 fw-normal text-20 lh-26 text-white opacity-75">
                We are a software development company leading the digital
                transformation of our worldwide clients through custom software
                development services.
              </p>

              <button variant="primary" onClick={handleShow} className=" commonbtn">GET STARTED</button>

            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-1 d-flex justify-content-center mt-lg-0 mt-4">
              <img className=" w-100" src={heroimg} alt="heroimg" />
            </div>
          </div>
        </div>

<img className=" hero_ellipes d-lg-block d-none" src={ellipes} alt="ellipes" />

      <Modal  show={show} onHide={handleClose} animation={false} >
        <div onClick={handleClose} className="btn-close"></div>
        <Contect/>        
      </Modal>

     
        <img className=" w-100" src={lyar} alt="whitelyar" />
      </section>
    </>
  );
}; 

export default Hero;
