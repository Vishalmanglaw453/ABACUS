import React from 'react'
import { Fackbook, Inded, Instagram } from '../common/icon'

const Footer = () => {
  return (
    <>
    <div className=" footer_bg">
        <div className="container pt-80 pb-3">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12 ">
            <div>
                <p className=" mb-0 text-white opacity-75 footer_pera text-16 lh-24 ff-urbanist">
                  Curabitur nec velit id felis porta{" "}
                  <span className=" ">ultrices quis sed arcu. </span>
                   Vestibulum pulvinar tellus
                </p>
                <div className=" d-flex flex-column">
                  <a
                    href="tel:+4733378901" target="blank"
                    className=" ff-urbanist text-white fw-normal text-16 lh-19 opacity-75 mt-3"
                  >
                    +1 403 476 2028
                  </a>
                  <a
                    href="mailto:someone@example.com" target="blank"
                    className=" ff-urbanist text-white fw-normal text-16 lh-19 opacity-75  mt-1"
                  >
                    contact@abacusis.ca
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-6 col-12 mt-sm-0 mt-3  d-flex justify-content-sm-center">
            <div className=" d-flex  footer_text_w justify-content-between">
                <ul className=" mb-0 ps-0 d-flex flex-column gap-12  ">
                  <li>
                    <a
                      href=""
                      className=" ff-urbanist fw-normal text-16 lh-19 color-pink"
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className=" ff-urbanist fw-normal text-16 lh-19 color-pink"
                    >
                      SERVICES
                    </a>
                  </li>
                </ul>
                <ul className=" d-flex flex-column gap-12">
                  <li>
                    <a
                      href=""
                      className=" ff-urbanist fw-normal text-16 lh-19 color-pink"
                    >
                      PROCESS
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className=" ff-urbanist fw-normal text-16 lh-19 color-pink"
                    >
                      TESTIMONIALS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-12 d-flex justify-content-md-end justify-content-start  mt-md-0 mt-3">
            <div className=" d-flex gap-2">
              <a className=" footer_svg" href="https://www.instagram.com/" target="blank">
                <span className=" footer_svg_box d-flex align-items-center justify-content-center">
                  <Instagram/>
                </span>
              </a>
              <a className=" footer_svg" href="https://www.facebook.com/" target="blank">
                <span className=" footer_svg_box d-flex align-items-center justify-content-center">
                  <Fackbook/>
                </span>
              </a>
              <a className=" footer_svg" href="https://in.indeed.com/" target="blank">
                <span className=" footer_svg_box d-flex align-items-center justify-content-center">
                  <Inded/>
                </span>
              </a>
            </div>
            </div>
          </div>
          <hr className="footer_line" />
          <div className="mt-3 d-flex align-items-center justify-content-between">
            <p className="  ff-urbanist mb-0 fw-normal text-16 lh-25 text-white opacity-75">
              Copyright © {new Date().getFullYear()} All Rights Reserved.
            </p>
            <p className=" ff-urbanist fw-normal text-16 lh-25 text-white opacity-75 mb-0">
              Privacy policy
            </p>
          </div>
        </div>
      </div></>
  )
}

export default Footer