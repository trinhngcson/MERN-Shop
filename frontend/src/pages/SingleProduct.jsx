import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import { TbArrowsShuffle } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAProducts,
} from "../features/products/productSlice";
const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const location = window.location.pathname;
  const prodID = location.split("/")[2];
  useEffect(() => {
    dispatch(getAProducts(prodID));
  }, []);
  const productState = useSelector((state) => state?.product?.product);
  const colorData = productState?.color;
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  console.log(colorData);
  const uploadCart = () => {};
  return (
    <>
      <Meta title="Sản phẩm" />
      <BreadCrumb title="Sản phẩm" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom
                  width={590}
                  height={600}
                  zoomWidth={600}
                  img={
                    productState
                      ? productState?.images[0].url
                      : "/images/acc.jpg"
                  }
                />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images?.map((item, index) => (
                <div>
                  <img
                    src={item?.url}
                    alt="watch"
                    className="img-fluid"
                    key={index}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom my-3">
                <p className="price">${productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={productState?.totalrating}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review fs-5">| 2 đánh giá</p>
                </div>
                <a className="review-btn" href="#review">
                  Viết đánh giá
                </a>
              </div>
              <div className="my-3 pb-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Loại sản phẩm: </h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Hãng: </h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Danh mục: </h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags: </h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tình trạng: </h3>
                  <p className="product-data">CÒN HÀNG</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size: </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color: </h3>
                  {/* <Color colorData={color} /> */}
                  {colorData.map((item, index) => {
                    <li
                      style={{
                        backgroundColor: item?.title,
                      }}
                      key={index}
                    />;
                  })}
                </div>
                <div className="d-flex gap-15 flex-wrap mt-2 mb-3 align-items-center">
                  <h3 className="product-heading">Số lượng: </h3>
                  <div>
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      defaultValue={1}
                      className="form-control w-10"
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      type="submit"
                      onClick={() => {
                        uploadCart();
                      }}
                    >
                      Thêm vào giỏ
                    </button>
                    <button to="/" className="button signup border-0">
                      Mua ngay
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Thêm vào wishlist
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <TbArrowsShuffle className="fs-5 me-2" />
                      So sánh sản phẩm
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 my-3 flex-column">
                  <h3 className="product-heading">Giao hàng và Đổi hàng: </h3>
                  <p className="product-data">
                    Áp dụng với khách hàng đã mua hàng tại hệ thống BiLuxury do
                    công ty trực tiếp quản lý <br />
                    Thời gian đổi hàng: 30 ngày kể từ thời điểm mua hàng
                  </p>
                </div>
                <div className="d-flex gap-10 my-3 flex-column">
                  <h3 className="product-heading">Giao hàng và Đổi hàng: </h3>
                  <p className="product-data">
                    Áp dụng với khách hàng đã mua hàng tại hệ thống BiLuxury do
                    công ty trực tiếp quản lý <br />
                    Thời gian đổi hàng: 30 ngày kể từ thời điểm mua hàng
                  </p>
                </div>
                <div className="d-flex gap-10 my-3 flex-column">
                  <h3 className="product-heading">Giao hàng và Đổi hàng: </h3>
                  <p className="product-data">
                    Áp dụng với khách hàng đã mua hàng tại hệ thống BiLuxury do
                    công ty trực tiếp quản lý <br />
                    Thời gian đổi hàng: 30 ngày kể từ thời điểm mua hàng
                  </p>
                </div>
                <div className="d-flex gap-10 my-3 flex-column">
                  <h3 className="product-heading">Giao hàng và Đổi hàng: </h3>
                  <p className="product-data">
                    Áp dụng với khách hàng đã mua hàng tại hệ thống BiLuxury do
                    công ty trực tiếp quản lý <br />
                    Thời gian đổi hàng: 30 ngày kể từ thời điểm mua hàng
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Link sản phẩm: </h3>
                  {/* <a
                    href="javascript:void(0)"
                    onClick={() => copyToClipboard(window.location.href)}
                  >
                    Sao chép Link sản phẩm
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Mô tả sản phẩm</h4>
            <div
              className="bg-white p-3"
              dangerouslySetInnerHTML={{ __html: productState?.description }}
            ></div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Đánh giá</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Đánh giá chung</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">2 đánh giá</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Đánh giá sản phẩm
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Đánh giá sản phẩm</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Nội dung"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">GỬI ĐÁNH GIÁ</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center ">
                    <h6 className="mb-0">AAA</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil dolore quisquam dignissimos aut atque reprehenderit
                    cupiditate incidunt eius facere aliquam? Possimus reiciendis
                    natus dolores expedita vitae ducimus corporis deserunt
                    cupiditate?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
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
      </Container>
    </>
  );
};

export default SingleProduct;
