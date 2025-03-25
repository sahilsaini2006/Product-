import React from "react";
import facebookImg from "../assets/img/svg/facebookImg.svg";
import linkdinImg from "../assets/img/svg/linkdinImg.svg";
import youtubeImg from "../assets/img/svg/youtubeImg.svg";
import instagramImg from "../assets/img/svg/instagramImg.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="my_container border_top">
        <div className="row justify-content-between my-sm-5 my-4 py-sm-0 py-2">
          <div className="col-md-6 col-12 text-md-start text-center">
            <div className="d-flex justify-content-between flex-column h-100">
              <p className="fs_md fw-normal lh_150 text-black">Site name</p>
              <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-4 mt-md-0 mt-4">
                <a href="./" className="d-inline-block img_hover">
                  <img src={facebookImg} alt="facebookImg" />
                </a>
                <a href="./" className="d-inline-block img_hover">
                  <img src={linkdinImg} alt="linkdinImg" />
                </a>
                <a href="./" className="d-inline-block img_hover">
                  <img src={youtubeImg} alt="youtubeImg" />
                </a>
                <a href="./" className="d-inline-block img_hover">
                  <img src={instagramImg} alt="instagramImg" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-4 text-md-start text-center mt-md-0 mt-4 pt-3">
            <p className="fs_xsm fw-medium lh_150 text-black"> Topic</p>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary  d-inline-block"
              >
                Page
              </a>
            </div>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary d-inline-block"
              >
                Page
              </a>
            </div>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary d-inline-block"
              >
                Page
              </a>
            </div>
          </div>

          <div className="col-md-2 col-4 text-md-start text-center mt-md-0 mt-4 pt-3">
            <p className="fs_xsm fw-medium lh_150 text-black"> Topic</p>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary  d-inline-block"
              >
                Page
              </a>
            </div>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary d-inline-block"
              >
                Page
              </a>
            </div>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary d-inline-block"
              >
                Page
              </a>
            </div>
          </div>

          <div className="col-md-2 col-4 text-md-start text-center mt-md-0 mt-4 pt-3">
            <p className="fs_xsm fw-medium lh_150 text-black"> Topic</p>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary  d-inline-block"
              >
                Page
              </a>
            </div>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary d-inline-block"
              >
                Page
              </a>
            </div>
            <div className="mt-4">
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 text_dgary d-inline-block"
              >
                Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
