import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="images/watch.jpg" alt="product image" />
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
          <p className="price">499.000đ</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
