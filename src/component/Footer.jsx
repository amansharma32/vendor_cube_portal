import React from "react";
import ph from "../images/favicon.png";

const Footer = () => {
  return (
    <>
      <div>
        <footer
          className="text-center text-lg-start text-white"
          style={{
            background: "rgb(8,96,128)",
          }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <img src={ph} height="48" className="mb-4" alt="image" />
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Wcube Private Limited
                  </h6>
                  <p>
                    WCUBE is a fast growing, Bottom Of The Pyramid focused B2B
                    procurement enablement platform for large size enterprises
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <a className="text-white text-decoration-none">CubeOops</a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">
                      VendorCube
                    </a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">
                      Supply Chain
                    </a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none">Inventory</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-2"></i> WeWork Cyber Hub
                    Gurgaon India
                  </p>

                  <p>
                    <i className="fas fa-phone mr-2"></i> Phone:
                    <br /> +91 76691 04741
                  </p>
                  <p>
                    <i className="fas fa-print mr-2"></i>Email: <br />
                    info@wcubeindia.com vendors@wcubeindia.com
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3  rounded"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            © 2020 Copyright:
            <a
              className="text-white text-decoration-none"
              href="https://wcubeindia.com"
            >
              wcubeindia.com
            </a>
          </div>
        </footer>
      </div>

      {/* <!-- Footer --> */}
    </>
  );
};

export default Footer;
