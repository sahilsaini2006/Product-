import React from "react";
import NavBar from "../components/NavBar";
import pinappleImg from "../assets/img/png/PineappleImg.png";
import watermelonImg from "../assets/img/png/watermelonImg.png";
import productImg1 from "../assets/img/png/productImg1.png";
import productImg2 from "../assets/img/png/productImg2.png";
import productImg3 from "../assets/img/png/productImg3.png";
import globeIcon from "../assets/img/png/globeIcon.png";
import avatarIcon from "../assets/img/png/avatarIcon.png";
import bagIcon from "../assets/img/png/bagIcon.png";
import calendarIcon from "../assets/img/png/calendarIcon.png";

const Shop = () => {
  return (
    <>
      <header>
        <div className="min-vh-100 d-flex flex-column bg_imgPostion ">
          <NavBar tabStyling="navtab_border color_white" />
          <div className=" d-flex flex-grow-1 custom_hero_margin">
            <div className="flex-grow-1 d-flex align-items-center justify-content-center flex-column ">
              <p className="fs_3xl fw-bold lh_140 text-white">Shop title</p>
              <p className="fs_md fw-medium lh_140 text-white mt-3 text-center">
                Subheading with description of your shopping site
              </p>
              <div className="mt-4 pt-3">
                <a
                  href="./"
                  className="fs_md fw-medium lh_150 btn_4 d-inline-block"
                >
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ---------------- pineapple ---------------- */}
        <section className="mt-lg-5 mt-md-4 mt-3 pt-lg-5 pt-3 ">
          <div className="my_container mt-md-4 mt-3 pt-md-0 pt-sm-2 pt-1">
            <div className="row align-items-center justify-content-md-between justify-content-center flex-md-row flex-column-reverse">
              <div className=" col-lg-5 col-md-6 col-12 mt-md-0 mt-4 text-md-start text-center">
                <p className="fs_xl fw-semibold text-black lh_120">Heading</p>
                <p className="f_md fw-normal text_gary lh_150 w_70 mt-md-4 mt-3">
                  A subheading for this section, as long or as short as you like
                </p>
                <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-3 mt-md-4 mt-3">
                  <div>
                    <a
                      href="./"
                      className="fs_md fw-medium lh_150 d-inline-block btn_2"
                    >
                      Button
                    </a>
                  </div>

                  <div>
                    <a
                      href="./"
                      className="fs_md fw-medium lh_150 d-inline-block btn_2"
                    >
                      Secondary button
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-10 col-12 ">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={pinappleImg}
                    alt="pinappleImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- watermelon ---------------- */}
        <section className="mt-lg-5 mt-md-4 mt-3 pt-md-4 pt-3 ">
          <div className="my_container mt-2">
            <div className="row align-items-center justify-content-md-between justify-content-center flex-md-row flex-column">
              <div className="col-md-6 col-sm-10 col-12 ">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={watermelonImg}
                    alt="watermelonImg"
                  />
                </div>
              </div>
              <div className=" col-lg-5 col-md-6 col-12 mt-md-0 mt-4 text-md-start text-center">
                <p className="fs_xl fw-semibold text-black lh_120">Heading</p>
                <p className="f_md fw-normal text_gary lh_150 w_70  mt-md-4 mt-3">
                  A subheading for this section, as long or as short as you like
                </p>
                <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-3 mt-md-4 mt-3">
                  <div>
                    <a
                      href="./"
                      className="fs_md fw-medium lh_150 d-inline-block btn_2"
                    >
                      Button
                    </a>
                  </div>

                  <div>
                    <a
                      href="./"
                      className="fs_md fw-medium lh_150 d-inline-block btn_2"
                    >
                      Secondary button
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- section heading ---------------- */}
        <section className="mt-lg-5 mt-md-4 mt-3 pt-lg-5 pt-3">
          <div className="my_container mt-lg-5 mt-md-4 mt-3 pt-2">
            <p className="fs_xl fw-semibold lh_100 text-black text-md-start text-center">
              Section heading
            </p>
            <div className="row  justify-content-md-between justify-content-center mt-lg-5 mt-sm-4 mt-3 pt-md-0 pt-sm-3 pt-2">
              <div className="col-md-7 col-sm-10 col-12 text-md-start text-center">
                <div className=" overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={productImg1}
                    alt="productImg1"
                  />
                </div>
                <p className="fs_md fw-medium lh_150 text-black mt-lg-4 mt-3">
                  Featured product
                </p>
                <p className="fs_sm fw-normal lh_150 text_gary mt-1">
                  Description of featured product
                </p>
                <p className="fs_sm fw-medium lh_150 text-black mt-1">$10.99</p>
              </div>

              <div className="col-md-5 col-sm-10 text-md-start text-center mt-md-0 mt-4">
                <div className="overflow-hidden ">
                  <img
                    className="w-100 translate_zoom"
                    src={productImg2}
                    alt="productImg2"
                  />
                </div>
                <p className="fs_md fw-medium lh_150 text-black mt-lg-4 mt-3">
                  Product
                </p>
                <p className="fs_sm fw-normal lh_150 text_gary mt-1">
                  Description of top product
                </p>
                <p className="fs_sm fw-medium lh_150 text-black mt-1">$10.99</p>

                <div className="overflow-hidden mt-lg-4 mt-3 pt-lg-3 pt-2">
                  <img
                    className="w-100 translate_zoom"
                    src={productImg3}
                    alt="productImg3"
                  />
                </div>
                <p className="fs_md fw-medium lh_150 text-black mt-lg-4  mt-3">
                  Product
                </p>
                <p className="fs_sm fw-normal lh_150 text_gary mt-1">
                  Description of lower product
                </p>
                <p className="fs_sm fw-medium lh_150 text-black mt-1">$10.99</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- section heading 2 ---------------- */}
        <section className="my-lg-5 my-sm-4 my-3 py-lg-5 py-md-4 py-3">
          <div className="my_container my-lg-5 my-sm-4 my-3 py-2">
            <p className="fs_2xl fw-semibold lh_100 text-md-start text-center">
              Section heading
            </p>
            <div className="row justify-content-between mt-lg-5 mt-sm-4 mt-3">
              <div className="col-md-5 col-sm-6 col-12 text-sm-start text-center">
                <div>
                  <img src={globeIcon} alt="globeIcon" />
                  <p className="fs_md fw-medium lh_150 text-black mt-2">
                    Subheading
                  </p>
                  <p className="fs_sm fw-normal lh_150 text_gary mt-2">
                    Body text for whatever you’d like to say. Add main takeaway
                    points, quotes, anecdotes, or even a very very short story.{" "}
                  </p>
                </div>

                <div className="mt-lg-5 mt-md-4 mt-3 pt-md-0 pt-2">
                  <img src={bagIcon} alt="bagIcon" />
                  <p className="fs_md fw-medium lh_150 text-black mt-2">
                    Subheading
                  </p>
                  <p className="fs_sm fw-normal lh_150 text_gary mt-2">
                    Body text for whatever you’d like to say. Add main takeaway
                    points, quotes, anecdotes, or even a very very short story.{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-5 col-sm-6 col-12 text-sm-start text-center">
                <div>
                  <img src={avatarIcon} alt="avatarIcon" />
                  <p className="fs_md fw-medium lh_150 text-black mt-2">
                    Subheading
                  </p>
                  <p className="fs_sm fw-normal lh_150 text_gary mt-2">
                    Body text for whatever you’d like to say. Add main takeaway
                    points, quotes, anecdotes, or even a very very short story.{" "}
                  </p>
                </div>

                <div className="mt-lg-5 mt-md-4 mt-3 pt-md-0 pt-2">
                  <img src={calendarIcon} alt="calendarIcon" />
                  <p className="fs_md fw-medium lh_150 text-black mt-2">
                    Subheading
                  </p>
                  <p className="fs_sm fw-normal lh_150 text_gary mt-2">
                    Body text for whatever you’d like to say. Add main takeaway
                    points, quotes, anecdotes, or even a very very short story.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Shop;
