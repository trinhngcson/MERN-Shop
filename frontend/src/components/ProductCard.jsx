import React from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch } from "react-redux";
import { addToWishList } from "../features/products/productSlice";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { grid, data } = props;
  let location = useLocation();
  const addWishList = (id) => {
    dispatch(addToWishList(id));
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/san-pham" ? `gr-${grid}` : `col-3`
            }`}
          >
            <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img
                    src={wish}
                    alt="wishlist"
                    onClick={() => {
                      addWishList(item?._id);
                    }}
                  />
                </button>
              </div>
              <div
                className="product-image"
                onClick={() => {
                  navigate("/san-pham/" + item?._id);
                }}
              >
                <img
                  src={item?.images[0].url}
                  className="img-fluid w-100 h-100"
                  alt={item?.images[0]._id}
                />
                <img
                  src={item?.images[1].url}
                  className="img-fluid w-100 h-100"
                  alt={item?.images[1]._id}
                />
              </div>
              <div
                className="product-details"
                onClick={() => {
                  navigate("/san-pham/" + item?._id);
                }}
              >
                <h6 className="brand">{item.brand}</h6>
                <h5 className="product-title">{item.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalrating.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    props.grid === 12 ? "d-block" : "d-none"
                  } my-2`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">{item?.price}$</p>
              </div>
              <div className="action_bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img
                      src={view}
                      alt="view"
                      onClick={() => {
                        navigate("/san-pham/" + item?._id);
                      }}
                    />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img src={addcart} alt="add_cart" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
