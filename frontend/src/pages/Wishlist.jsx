import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../features/user/userSlice";
import { addToWishList } from "../features/products/productSlice";
const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);
  const wishlistState = useSelector((state) => state.auth?.wishlist?.wishlist);
  const removeWishList = (id) => {
    dispatch(addToWishList(id));
    setTimeout(() => {
      dispatch(getWishlist());
    }, 300);
  };
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState?.length === 0 ||
            (typeof wishlistState === "undefined" && (
              <div className="text-center fs-4">NO DATA</div>
            ))}
          {wishlistState &&
            wishlistState?.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <img
                        onClick={() => {
                          removeWishList(item?._id);
                        }}
                        src="images/cross.svg"
                        alt="cross"
                        className="border-0 cross"
                      />
                    </div>
                    <div className="product-image">
                      <img
                        src={
                          item?.images[0]?.url
                            ? item?.images[0]?.url
                            : "image/watch.jpg"
                        }
                        alt={
                          item?.images[0]?._id
                            ? item?.images[0]?._id
                            : "wishlist"
                        }
                        className="img-fluid w-100 h-100"
                      />
                      <img
                        src={
                          item?.images[1]?.url
                            ? item?.images[1]?.url
                            : "image/watch.jpg"
                        }
                        alt={
                          item?.images[1]?._id
                            ? item?.images[1]?._id
                            : "wishlist"
                        }
                        className="img-fluid w-100 h-100"
                      />
                    </div>
                    <div className="py-3 px-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">{item?.price}$</h6>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
