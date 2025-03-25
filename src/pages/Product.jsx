import React from "react";
import NavBar from "../components/NavBar";
import productName from "../assets/img/png/ProductName.png";
import product1 from "../assets/img/png/Product1.png"
import product2 from "../assets/img/png/Product2.png"
import product3 from "../assets/img/png/Product3.png"
import product4 from "../assets/img/png/Product4.png"
import product5 from "../assets/img/png/Product5.png"
import product6 from "../assets/img/png/Product6.png"

const Product = () => {
  return (
    <>
      {/* --------------- product --------------- */}
      <section>
        <NavBar />

        <div className="my_container">
          <div className="row justify-content-md-between justify-content-center">
            <div className="col-md-6 col-sm-10 col-12">
              <div className="overflow-hidden">
                <img
                  className="w-100 translate_zoom"
                  src={productName}
                  alt="productName"
                />
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-12 text-md-start text-center mt-md-0 mt-4">
              <p className="fs_xl fw-semibold lh_120 text-black">
                Product name
              </p>
              <p className="fs_md fw-normal lh_150 text_gary mt-md-4 mt-2">
                Subheading
              </p>
              <p className="fs_md fw-medium lh_150 text-black mt-md-4 mt-2">
                $10.99
              </p>
              <p className="fs_sm fw-normal lh_150 text_gary mt-md-4 mt-2">
                Body text for describing what this product is and why this
                product is simply a must-buy.
              </p>
              <a
                href="./"
                className="fs_xsm fw-medium lh_150 bg-black text-white d-md-block d-inline-block  text-center pd_14_24 rounded_8 mt-md-4 mt-3"
              >
                Add to cart
              </a>
              <p className="fs_xsm fw-medium lh_150 text_gary mt-md-4 mt-3">
                Text box for additional details or fine print
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------- Related product --------------- */}
      <section className="mt-lg-5 mt-sm-4 mt-4 pt-md-4 pt-3 mb-lg-5 mb-sm-4 mb-3 pb-md-5 pb-3 ">
        <div className="my_container mt-md-2 mt-0 mb-lg-5 mb-md-4 mb-sm-3 mb-0 pb-md-2 pb-0">
          <p className="fs_lg fw-semibold lh_150 text-black">
            Related products
          </p>
          <div className="row justify-content-between mt-md-4 mt-3 pt-sm-2 pt-0">
            <div className="col-md-4 col-sm-6 col-12 text-sm-start text-center">
              <div className="h-100">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={product1}
                    alt="product1"
                  />
                </div>
                <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-3">
                  Product{" "}
                </p>
                <p className="fs_sm fw-medium text_gary lh_150 mt-1">
                  Description of first product
                </p>
                <p className="fs_sm fw-medium text-black lh_150 mt-1">$10.99</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-12 mt-sm-0 mt-4 text-sm-start text-center">
              <div className="h-100">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={product2}
                    alt="product2"
                  />
                </div>
                <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-3">
                  Product{" "}
                </p>
                <p className="fs_sm fw-medium text_gary lh_150 mt-1">
                  Description of first product
                </p>
                <p className="fs_sm fw-medium text-black lh_150 mt-1">$10.99</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-12 mt-md-0 mt-4 text-sm-start text-center">
              <div className="h-100">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={product3}
                    alt="product3"
                  />
                </div>
                <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-3">
                  Product{" "}
                </p>
                <p className="fs_sm fw-medium text_gary lh_150 mt-1">
                  Description of first product
                </p>
                <p className="fs_sm fw-medium text-black lh_150 mt-1">$10.99</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-12 mt-4 pt-md-3 pt-0 text-sm-start text-center">
              <div className="h-100">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={product4}
                    alt="product4"
                  />
                </div>
                <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-3">
                  Product{" "}
                </p>
                <p className="fs_sm fw-medium text_gary lh_150 mt-1">
                  Description of first product
                </p>
                <p className="fs_sm fw-medium text-black lh_150 mt-1">$10.99</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-12 mt-4 pt-md-3 pt-0 text-sm-start text-center">
              <div className="h-100">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={product5}
                    alt="product5"
                  />
                </div>
                <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-3">
                  Product{" "}
                </p>
                <p className="fs_sm fw-medium text_gary lh_150 mt-1">
                  Description of first product
                </p>
                <p className="fs_sm fw-medium text-black lh_150 mt-1">$10.99</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-12 mt-4 pt-md-3 pt-0 text-sm-start text-center">
              <div className="h-100">
                <div className="overflow-hidden">
                  <img
                    className="w-100 translate_zoom"
                    src={product6}
                    alt="product6"
                  />
                </div>
                <p className="fs_md fw-medium text-black lh_150 mt-md-4 mt-3">
                  Product{" "}
                </p>
                <p className="fs_sm fw-medium text_gary lh_150 mt-1">
                  Description of first product
                </p>
                <p className="fs_sm fw-medium text-black lh_150 mt-1">$10.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
