import React from "react";
import lyar from "../assets/image/png/about_lyar.png";
import { Duelline } from "../common/icon";
import Slider from "react-slick";
const Testimonials = () => {
  const slider = React.useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="container mt-193 mb-142">
          <div className="row">
            <div className=" col-sm-6 col-12 pt-lg-0 pt-4 pb-68  border_right ">
              <p className=" d-flex align-items-center gap-2 ff-urbanist fw-normal text-20 lh-21 text-black mb-0">
                <Duelline /> TESTIMONIALS
              </p>
              <h2 className=" mt-2 ff-urbanist fw-bold text-40 lh-43 mb-0 ">
                Clients feedback
              </h2>
            </div>
            <div className="col-sm-6 col-12 d-flex justify-content-sm-end my-lg-0 my-5  align-items-center">
              <div className=" d-flex gap-3">
              <div  onClick={() => slider?.current?.slickPrev()} className="  d-flex justify-content-center align-items-center slider_arrow">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.543564 4.54356C0.291483 4.79565 0.291483 5.20435 0.543564 5.45644L4.65148 9.56435C4.90357 9.81644 5.31227 9.81644 5.56435 9.56435C5.81644 9.31227 5.81644 8.90357 5.56435 8.65148L1.91287 5L5.56435 1.34852C5.81644 1.09643 5.81644 0.687728 5.56435 0.435646C5.31227 0.183563 4.90357 0.183563 4.65148 0.435646L0.543564 4.54356ZM17 4.3545L1 4.3545V5.6455L17 5.6455V4.3545Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div onClick={() => slider?.current?.slickNext()} className="  d-flex justify-content-center align-items-center slider_arrow">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4564 4.54356C16.7085 4.79565 16.7085 5.20435 16.4564 5.45644L12.3485 9.56435C12.0964 9.81644 11.6877 9.81644 11.4356 9.56435C11.1836 9.31227 11.1836 8.90357 11.4356 8.65148L15.0871 5L11.4356 1.34852C11.1836 1.09643 11.1836 0.687728 11.4356 0.435646C11.6877 0.183563 12.0964 0.183563 12.3485 0.435646L16.4564 4.54356ZM0 4.3545L16 4.3545V5.6455L0 5.6455L0 4.3545Z"
                    fill="black"
                  />
                </svg>
              </div></div>
           
            </div>
          </div>
          <div className="row border_top">
            <Slider ref={slider} {...settings}>
              <div className="col-6 pb-4 px-2 d-flex justify-content-center justify-content-lg-start border_right">
                <div className=" d-flex flex-sm-row align-items-center align-items-sm-start flex-column gap-39  pt-5">
                  <div className="w_box d-flex justify-content-center align-items-center">
                    <h2 className=" ff-urbanist fw-bold text-42 lh-69 text-black">
                      W
                    </h2>
                    <div className="coma_box d-flex justify-content-center align-items-center">
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.2499 0.75V13.75L19.0812 20.25H12.2546L15.4233 13.75H12.4999V0.75H22.2499ZM20.6249 13.3763V2.375H14.1249V12.125H18.0249L14.8546 18.625H18.0639L20.6249 13.3763ZM10.8749 0.75V13.75L7.70618 20.25H0.87793L4.04668 13.75H1.12493V0.75H10.8749ZM9.24993 13.3763V2.375H2.74993V12.125H6.64993L3.47955 18.625H6.68893L9.24993 13.3763Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" d-flex flex-column">
                    <h2 className=" mb-0 text-center text-sm-start ff-urbanist fw-normal text-16 lh-25 w_pera opacity-75 text-black">
                      Curabitur bibendum a lacus eu luctus. Morbi sodales at
                      diam vel pretium. Curabitur fermentum erat a eleifend
                      pharetra. Suspendisse facilisis sagittis nibh vitae
                    </h2>
                    <div className=" d-flex justify-content-center justify-content-sm-start gap-2 mt-4">
                      <div className="yellow_line"></div>
                      <h3 className=" ff-urbanist text-16 fw-bold lh-25 text-black mb-0">
                        Wade Warren <br />
                        <span className=" fw-normal opacity-75">
                          President of Sales
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 pb-4 px-2 d-flex justify-content-center">
                <div className=" d-flex flex-sm-row flex-column align-items-center align-items-sm-start gap-39  pt-5">
                  <div className="w_box d-flex justify-content-center align-items-center">
                    <h2 className=" ff-urbanist fw-bold text-42 lh-69 text-black">
                      A
                    </h2>
                    <div className="coma_box d-flex justify-content-center align-items-center">
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.2499 0.75V13.75L19.0812 20.25H12.2546L15.4233 13.75H12.4999V0.75H22.2499ZM20.6249 13.3763V2.375H14.1249V12.125H18.0249L14.8546 18.625H18.0639L20.6249 13.3763ZM10.8749 0.75V13.75L7.70618 20.25H0.87793L4.04668 13.75H1.12493V0.75H10.8749ZM9.24993 13.3763V2.375H2.74993V12.125H6.64993L3.47955 18.625H6.68893L9.24993 13.3763Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className=" d-flex flex-column">
                    <h2 className=" mb-0 text-center text-sm-start ff-urbanist fw-normal text-16 lh-25 w_pera opacity-75 text-black">
                      Curabitur bibendum a lacus eu luctus. Morbi sodales at
                      diam vel pretium. Curabitur fermentum erat a eleifend
                      pharetra. Suspendisse facilisis sagittis nibh vitae
                    </h2>
                    <div className=" d-flex justify-content-center justify-content-sm-start gap-2 mt-4">
                      <div className="yellow_line"></div>
                      <h3 className=" ff-urbanist text-16 fw-bold lh-25 text-black mb-0">
                        Albert Flores <br />
                        <span className=" fw-normal opacity-75">
                          Dog Trainer
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <img className=" w-100" src={lyar} alt="lyar" />
      </section>
    </>
  );
};

export default Testimonials;
