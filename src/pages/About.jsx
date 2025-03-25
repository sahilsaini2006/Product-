import React from "react";
import NavBar from "../components/NavBar";
import personImg from "../assets/img/png/personImg.png";

const About = () => {
  return (
    <>
      <section>
        <NavBar />

        <div className="mt-lg-5 mt-md-4 mt-3 pt-lg-4 pt-sm-3 pt-2 mb-lg-5 mb-md-4 mb-3 pb-lg-5 pb-md-4 pb-3 ">
          <div className="my_container mt-2 mb-mg-3 mb-2">
            <div className="row justify-content-lg-between align-items-lg-start align-items-center justify-content-center flex-lg-row flex-column-reverse ">
              <div className="col-lg-6 col-12 mt-lg-0 mt-lg-4 mt-3 pt-lg-0 pt-1">
                <p className="fs_3xl fw-bold lh_100 text-black text-sm-start text-center">
                  About
                </p>
                <p className="fs_md fw-normal lh_150 text_gary mt-md-4 mt-2 text-sm-start text-center">
                  Subheading for description or instructions
                </p>
                <p className="fs_sm fw-medium lh_150 text-black mt-md-4 mt-3">
                  Body text for your whole article or post. We’ll put in some
                  lorem ipsum to show how a filled-out page might look:
                </p>
                <p className="fs_sm fw-medium lh_150 text-black mt-md-4 mt-2 ">
                  Excepteur efficient emerging, minim veniam anim aute carefully
                  curated Ginza conversation exquisite perfect nostrud nisi
                  intricate Content. Qui international first-class nulla ut.
                  Punctual adipisicing, essential lovely queen tempor eiusmod
                  irure. Exclusive izakaya charming Scandinavian impeccable aute
                  quality of life soft power pariatur Melbourne occaecat
                  discerning. Qui wardrobe aliquip, et Porter destination Toto
                  remarkable officia Helsinki excepteur Basset hound. Zürich
                  sleepy perfect consectetur.
                </p>

                <form action="./" className="mt-lg-5 mt-md-4 mt-3 pt-md-4 pt-3">
                  <p className="fs_lg fw-semibold lh_150 mt-2 text-black">
                    Contact me
                  </p>

                  <div
                    className="d-flex justify-content-between mt-md-4 mt-3 pt-2"
                    style={{ gap: "32px" }}
                  >
                    <div className="w-100">
                      <label
                        htmlFor="fname"
                        className="fs_xsm fw-medium lh_150 text-black"
                      >
                        First name
                      </label>
                      <br />
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="Jane"
                        className="border_1 pd_12_16 rounded_8 text_gary fs_xsm fw-medium lh_150 mt-2 w-100"
                      />
                    </div>
                    <div className="w-100">
                      <label
                        htmlFor="lname"
                        className="fs_xsm fw-medium lh_150 text-black"
                      >
                        Last name
                      </label>
                      <br />
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        placeholder="Jane"
                        className="border_1 pd_12_16 rounded_8 text_gary fs_xsm fw-medium lh_150 mt-2 w-100"
                      />
                    </div>
                  </div>

                  <div className="w-100 mt-4">
                    <label
                      htmlFor="fname"
                      className="fs_xsm fw-medium lh_150 text-black"
                    >
                      Email address
                    </label>
                    <br />
                    <input
                      type="email"
                      name="fname"
                      id="fname"
                      placeholder="email@janesfakedomain.net"
                      required
                      className="border_1 pd_12_16 rounded_8 text_gary fs_xsm fw-medium lh_150 mt-2 w-100"
                    />
                  </div>

                  <div className="w-100 mt-4">
                    <label
                      htmlFor="fname"
                      className="fs_xsm fw-medium lh_150 text-black"
                    >
                      Email address
                    </label>
                    <br />
                    <textarea
                      name="fname"
                      id="fname"
                      placeholder="Enter your question or message"
                      rows={7}
                      cols={7}
                      className="border_1 pd_12_16 rounded_8 text_gary fs_xsm fw-medium lh_150 mt-2 w-100"
                    ></textarea>
                  </div>
                  <div className="mt-4 w-100 text-center">
                    <input
                      type="submit"
                      value="Submit"
                      className="fs_xsm fw-medium lh_150 bg-black text-white d-lg-block d-inline-block w_100 text-center pd_14_24 rounded_8 mt-md-4 mt-3"
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-sm-8">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={personImg}
                    alt="personImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
