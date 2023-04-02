import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

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
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Miễn phí giao hàng</h6>
                    <p className="mb-0">Cho đơn hàng trên 499.000 VNĐ</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Ưu đãi hằng ngày</h6>
                    <p className="mb-0">Tiết kiệm lên tới 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Hỗ trợ 24/7</h6>
                    <p className="mb-0">
                      Gọi ngay cho chúng tôi khi bạn có thắc mắc
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Giá cả phải chăng</h6>
                    <p className="mb-0">Cạnh tranh thị trường</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Bảo mật thanh toán</h6>
                    <p className="mb-0">Thanh toán được bảo vệ 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>BỘ SUIT</h6>
                    <p>10 sản phẩm</p>
                  </div>
                  <img src="images/TV.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>PHỤ KIỆN</h6>
                    <p>10 sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>QUẦN SHORT</h6>
                    <p>10 sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>ÁO POLO</h6>
                    <p>10 sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>ÁO SƠ MI</h6>
                    <p>10 sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>ARISTINO GOLF</h6>
                    <p>10 sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>QUẦN ÂU</h6>
                    <p>10 sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>GIÀY DÉP</h6>
                    <p>10 sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">SẢN PHẨM NỔI BẬT</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-1.jpg"
                  className="img-fluid"
                  alt="famous"
                />
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-2.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content">
                  <h5>BILUXURY</h5>
                  <h6>
                    Áo Polo Vải Cotton Mềm Mịn, Thoáng Mát, Thấm Hút Nhanh,
                    Chống Nhăn 7APCH021TRK
                  </h6>
                  <p>499,000₫</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-3.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content">
                  <h5>BILUXURY</h5>
                  <h6>
                    Áo Polo Vải Cotton Mềm Mịn, Thoáng Mát, Thấm Hút Nhanh,
                    Chống Nhăn 7APCH021TRK
                  </h6>
                  <p>499,000₫</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-4.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content">
                  <h5>BILUXURY</h5>
                  <h6>
                    Áo Polo Vải Cotton Mềm Mịn, Thoáng Mát, Thấm Hút Nhanh,
                    Chống Nhăn 7APCH021TRK
                  </h6>
                  <p>499,000₫</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">ƯU ĐÃI</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">TOP TRENDING</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Blog mới nhất</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
