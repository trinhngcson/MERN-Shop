import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  let location = useLocation();
  return (
    <div
      className={`${
        location.pathname === "/san-pham" ? `gr-${props.grid}` : `col-3`
      }`}
    >
      <Link
        to={`${location.pathname === "/san-pham" ? `:id` : `/san-pham/:id`}`}
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product_image"
          />
          <img
            src="images/watch-1.jpg"
            className="img-fluid"
            alt="product_image"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Biluxury</h6>
          <h5 className="product-title">
            Áo Polo Vải Cotton Mềm Mịn, Thoáng Mát, Thấm Hút Nhanh, Chống Nhăn
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p
            className={`description ${
              props.grid === 12 ? "d-block" : "d-none"
            } my-2`}
          >
            Áo Sơ Mi Ngắn Tay Từ Sợi Tre, Kháng Khuẩn, Mềm Mịn, Thấm Hút Tốt
          </p>
          <p className="price">499.000đ</p>
        </div>
        <div className="action_bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add_cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
