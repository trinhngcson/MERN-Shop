import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-l py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>NEW YEAR</h4>
                  <h5>NEW COLLECTION 2023</h5>
                  <p>SPRING SUMMER COLLECTION 23</p>
                  <Link className="button">MUA NGAY</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Bán chạy nhất</h4>
                    <h5>The unspoken corner</h5>
                    <p>SPRING SUMMER COLLECTION 23</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Hàng mới</h4>
                    <h5>The unspoken corner</h5>
                    <p>SPRING SUMMER COLLECTION 23</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Hàng mới</h4>
                    <h5>The unspoken corner</h5>
                    <p>SPRING SUMMER COLLECTION 23</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Hàng mới</h4>
                    <h5>The unspoken corner</h5>
                    <p>SPRING SUMMER COLLECTION 23</p>
                  </div>
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
