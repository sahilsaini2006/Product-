import React from "react";
import heroImg from "../assets/img/png/heroImg.png";
import boxImg from "../assets/img/png/boxImg.png";
import boxImg2 from "../assets/img/png/boxImg2.png";
import boxImg3 from "../assets/img/png/boxImg3.png";
import fruitImg from "../assets/img/png/fruitImg.png";
import author1 from "../assets/img/svg/author1.svg";
import author2 from "../assets/img/svg/author2.svg";
import author3 from "../assets/img/svg/author3.svg";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      {/* ---------------- lending page title ---------------- */}
      <section>
        <NavBar />

        <div className="my_container mt-5 ">
          <h1 className="fs_3xl fw-bold text-black lh_100 text-md-start text-center">
            Landing page title
          </h1>
          <p className="fs_md fw-normal text_lblack lh_150 mt-lg-4 mt-3 w_70 text-md-start text-center">
            Subheading that sets up context, shares more info about the website,
            or generally gets people psyched to keep scrolling.{" "}
          </p>
          <div className="mt-md-4 mt-3 pt-md-3 pt-sm-2 pt-0 text-md-start text-center">
            <a
              href="./"
              className="fs_md fw-medium text-white bg-black pd_20_32 rounded_8 d-inline-block"
            >
              Button
            </a>
          </div>

          <div className="mt-lg-5 mt-sm-4 mt-3 pt-lg-4 pt-sm-3 pt-2 overflow-hidden">
            <img
              className="w-100 pt-2 translate_zoom"
              src={heroImg}
              alt="heroImg"
            />
          </div>
        </div>
      </section>

      {/* ---------------- 3 boxes  ---------------- */}
      <section className="mt-lg-5 mt-sm-4 mt-3 pt-lg-5 pt-md-4 pt-3">
        <div className="my_container mt-lg-5 mt-sm-4 mt-3 pt-1">
          <h1 className="fs_2xl fw-semibold text-black">Section heading</h1>

          <div className="row justify-content-lg-between justify-content-center mt-md-5 mt-sm-4 mt-3">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="overflow-hidden rounded-2">
                <img
                  className="w-100 translate_zoom"
                  src={boxImg}
                  alt="boxImg"
                />
              </div>
              <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-ms-3 mt-2 pt-sm-0 pt-1">
                Subheading
              </p>
              <p className="fs_md fw-normal text_gary mt-1">
                Body text for whatever you’d like to add more to the subheading.{" "}
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 mt-sm-0 mt-4">
              <div className="overflow-hidden rounded-2">
                <img
                  className="w-100 translate_zoom"
                  src={boxImg2}
                  alt="boxImg"
                />
              </div>
              <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-ms-3 mt-2 pt-sm-0 pt-1">
                Subheading
              </p>
              <p className="fs_md fw-normal text_gary mt-1">
                Body text for whatever you’d like to expand on the main point.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 mt-lg-0 mt-4">
              <div className="overflow-hidden rounded-2">
                <img
                  className="w-100 translate_zoom"
                  src={boxImg3}
                  alt="boxImg"
                />
              </div>
              <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-ms-3 mt-2 pt-sm-0 pt-1">
                Subheading
              </p>
              <p className="fs_md fw-normal text_gary mt-1">
                Body text for whatever you’d like to share more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- fruits details ---------------- */}
      <section className="mt-xl-5 mt-md-4 mt-sm-3 mt-3 pt-xl-5 pt-md-4 pt-md-3 pt-3">
        <div className="position-relative mt-lg-5 mt-sm-4 mt-3 pt-md-4 pt-3">
          <div className="my_container ">
            <div className="row flex-wrap align-items-center justify-content-lg-between justify-content-center flex-lg-row flex-column-reverse">
              <div className="col-12 col-lg-5 mt-lg-0 mt-4 pt-lg-0 pt-sm-2 pt-0 ">
                <p className="fs_2xl fw-semibold lh_100 text-black">
                  Section heading
                </p>
                <p className="fs_md fw-medium text-black lh_150 mt-lg-5 mt-sm-4 mt-3">
                  Subheading
                </p>
                <p className="fs_md fw-normal text_gary mt-1">
                  Body text for whatever you’d like to expand on the main point.
                </p>

                <p className="fs_md fw-medium text-black lh_150 mt-lg-5 mt-sm-4 mt-3">
                  Subheading
                </p>
                <p className="fs_md fw-normal text_gary mt-1">
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes.
                </p>

                <p className="fs_md fw-medium text-black lh_150 mt-lg-5 mt-sm-4 mt-3">
                  Subheading
                </p>
                <p className="fs_md fw-normal text_gary mt-1">
                  Body text for whatever you’d like to add more to the main
                  point. It provides details, explanations, and context.
                </p>

                <div className="d-flex align-items-center gap-3 mt-lg-5 mt-sm-4 mt-3">
                  <div>
                    <a
                      className="fs_md fw-medium lh_150 d-inline-block btn_2"
                      href="./"
                    >
                      Button
                    </a>
                  </div>
                  <div>
                    <a
                      className="fs_md fw-medium lh_150 d-inline-block btn_2"
                      href="./"
                    >
                      Secondary button
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="overflow-hidden">
                  <img className="fruits_img" src={fruitImg} alt="fruitImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- testimonial ---------------- */}
      <section className="mt-lg-5 mt-sm-4 mt-3 pt-lg-5 pt-md-4 pt-3 pb-1">
        <div className="my_container mt-lg-5 mt-sm-4 mt-3 pt-md-4 pt-3">
          <h1 className="fs_2xl fw-semibold text-black lh_100">
            Section heading{" "}
          </h1>
          <div className="row justify-content-lg-between justify-content-center mt-lg-5 mt-sm-4 mt-3">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="pd_32 d-flex flex-column justify-content-between gap-5 border_1 rounded_12 h-100">
                <p className="fs_md fw-medium lh_150 text-black">
                  “A terrific piece of praise”
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img src={author1} alt="author1" />
                  <div>
                    <p className="fs_xsm fw-medium lh_150 text-black">Name</p>
                    <p className="fs_xsm fw-medium lh_150 text_gary">
                      Description
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12 mt-sm-0 mt-4">
              <div className="pd_32 d-flex flex-column justify-content-between gap-5 border_1 rounded_12 h-100">
                <p className="fs_md fw-medium lh_150 text-black">
                  “A fantastic bit of feedback”
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img src={author2} alt="author2" />
                  <div>
                    <p className="fs_xsm fw-medium lh_150 text-black">Name</p>
                    <p className="fs_xsm fw-medium lh_150 text_gary">
                      Description
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-12 mt-lg-0 mt-4">
              <div className="pd_32 d-flex flex-column justify-content-between gap-5 border_1 rounded_12 h-100">
                <p className="fs_md fw-medium lh_150 text-black">
                  “A genuinely glowing review”
                </p>
                <div className="d-flex align-items-center gap-3">
                  <img src={author3} alt="author3" />
                  <div>
                    <p className="fs_xsm fw-medium lh_150 text-black">Name</p>
                    <p className="fs_xsm fw-medium lh_150 text_gary">
                      Description
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- button and Secondary button ---------------- */}
      <section className="mt-lg-5 mt-sm-4 mt-3 pt-lg-5 pt-md-4 pt-3">
        <div className="mt-lg-5 mt-sm-4 mt-3 py-md-5 py-sm-4 py-3 bg_lwhite">
          <div className="my_container">
            <div className="row align-items-center justify-content-md-between justify-content-center flex-md-row flex-column">
              <div className="col-md-5 col-12 text-md-start text-center">
                <h1 className="fs_2xl fw-semibold lh_100 text-black">
                  Section heading
                </h1>
              </div>
              <div className="col-md-7 col-12 mt-md-0 mt-4 ">
                <div className="d-flex align-items-center gap-sm-4 gap-3 justify-content-md-end justify-content-center">
                  <a href="./" className="fs_md fw-medium btn_3 d-inline-block">
                    Button
                  </a>
                  <a href="./" className="fs_md fw-medium btn_3 d-inline-block">
                    Secondary button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
