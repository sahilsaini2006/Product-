import React from "react";
import heroImg from "../assets/img/png/heroImg.png";
import eat_food from "../assets/img/png/eat_foods.png";
import wineFruit from "../assets/img/png/wineFruits.png";
import imgBox1 from "../assets/img/png/imgBox1.png";
import imgBox2 from "../assets/img/png/imgBox2.png";
import imgBox3 from "../assets/img/png/imgBox3.png";
import NavBar from "../components/NavBar";

const Article = () => {
  return (
  
    <main>
     <NavBar />
        {/* ---------------- lending page title ---------------- */}
        <section>
          <div className="my_container mt-5 ">
            <h1 className="fs_3xl fw-bold text-black lh_100 text-md-start text-center">
              Article or post title
            </h1>
            <p className="fs_md fw-normal text_lblack lh_150 mt-lg-4 mt-3 w_55 text-md-start text-center pb-2">
              Subheading that sets up context, shares more info about the
              author, or generally gets people psyched to keep reading
            </p>

            <div className="mt-lg-5 mt-sm-4 mt-3 pt-lg-4 pt-sm-3 pt-2 pb-2 overflow-hidden">
              <img
                className="w-100 pt-2 translate_zoom"
                src={heroImg}
                alt="heroImg"
              />
            </div>

            <div className="w_65 m-auto mt-lg-5 mt-sm-4 mt-3 pt-lg-4 pt-sm-3 pt-2">
              <p className="fs_sm fw-medium lh_150 text-black">
                {" "}
                Body text for your whole article or post. We’ll put in some
                lorem ipsum to show how a filled-out page might look:
              </p>
              <p className="fs_sm fw-medium lh_150 text-black mt-4">
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
              <p className="fs_sm fw-medium lh_150 text-black mt-4">
                Exquisite sophisticated iconic cutting-edge laborum deserunt
                Addis Ababa esse bureaux cupidatat id minim. Sharp classic the
                best commodo nostrud delightful. Conversation aute Rochester id.
                Qui sunt remarkable deserunt intricate airport handsome K-pop
                excepteur classic esse Asia-Pacific laboris.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- contents and images ---------------- */}
        <section className="mt-lg-5 mt-sm-4 mt-3 pt-lg-4 pt-sm-3 ">
          <div className="my_container py-2">
            <div className="row justify-content-between py-2">
              <div className="col-sm-6 col-12">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={eat_food}
                    alt="eat_food"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-12 mt-sm-0 mt-4">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={wineFruit}
                    alt="wineFruit"
                  />
                </div>
              </div>
            </div>

            <div className="w_65 m-auto mt-lg-5 mt-md-4 mt-3 pt-lg-4 pt-sm-3 pt-2">
              <p className="fs_sm fw-medium lh_150 text-black ">
                Excepteur efficient emerging, minim veniam anim cloying aute
                carefully curated gauche. Espresso exquisite perfect nostrud
                nisi intricate. Punctual adipisicing Borzoi, essential lovely
                tempor eiusmod irure. Exclusive izakaya charming Quezon City
                impeccable aute quality of life soft power pariatur occaecat
                discerning. Qui wardrobe aliquip, et Amadeus rock opera.
              </p>
              <p className="fs_sm fw-medium lh_150 text-black mt-4">
                Exquisite sophisticated iconic cutting-edge laborum deserunt
                esse bureaux cupidatat id minim. Sharp classic the best commodo
                nostrud delightful. Conversation aute wifey id. Qui sunt
                remarkable deserunt intricate airport excepteur classic esse
                riot girl.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- 3 boxes ---------------- */}
        <section className="my-lg-5 my-sm-4 my-3 py-lg-5 py-3">
          <div className="my_container my-4 pb-5">
            <p className="fs_xl fw-semibold lh_110 text-black">
              Related articles or posts
            </p>
            <div className="row justify-content-lg-between justify-content-center mt-lg-5 mt-sm-4 mt-3 pt-lg-0 pt-sm-2 pt-3">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="d-flex flex-column justify-content-between h-100 text-lg-start text-center">
                  <div className="overflow-hidden">
                    <img
                      className="translate_zoom w-100"
                      src={imgBox1}
                      alt="imgBox1"
                    />
                  </div>
                  <p className="fs_sm fw-medium text-black mt-sm-4 mt-3 lh_150">
                    Title
                  </p>
                  <p className="fs_sm fw-medium text_gary lh_150  mt-1">
                    Author
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mt-sm-0 mt-4">
                <div className="d-flex flex-column justify-content-between h-100 text-lg-start text-center">
                  <div className="overflow-hidden">
                    <img
                      className="translate_zoom w-100"
                      src={imgBox2}
                      alt="imgBox2"
                    />
                  </div>
                  <p className="fs_sm fw-medium text-black mt-sm-4 mt-3 lh_150">
                    Title
                  </p>
                  <p className="fs_sm fw-medium text_gary lh_150  mt-1">
                    Author
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-12 mt-lg-0 mt-4">
                <div className="d-flex flex-column justify-content-between h-100 text-lg-start text-center">
                  <div className="overflow-hidden ">
                    <img
                      className="translate_zoom w-100"
                      src={imgBox3}
                      alt="imgBox3"
                    />
                  </div>
                  <p className="fs_sm fw-medium text-black mt-sm-4 mt-3 lh_150">
                    Title
                  </p>
                  <p className="fs_sm fw-medium text_gary lh_150  mt-1">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  
  );
};

export default Article;
