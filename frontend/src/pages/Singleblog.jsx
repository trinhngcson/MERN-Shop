import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../features/blogs/blogSlice";

const Singleblog = () => {
  const location = window.location.pathname;
  const id = location.split("/")[2];
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state?.blog?.blog);
  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch]);

  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            {blogState && (
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <BiArrowBack className="fs-4" />
                  Trang chủ Blog
                </Link>

                <h3 className="title">{blogState?.title}</h3>
                <img
                  src={blogState?.images[0]?.url}
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p
                  dangerouslySetInnerHTML={{ __html: blogState?.description }}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Singleblog;
