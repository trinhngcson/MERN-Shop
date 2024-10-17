import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
const Blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const blogState = useSelector((state) => state?.blog?.blogs);
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">BỘ SƯU TẬP</h3>
              <div>
                <ul className="ps-0">
                  <li>aaa</li>
                  <li>bbb</li>
                  <li>ccc</li>
                  <li>ddd</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogState &&
                blogState?.map((item, key) => {
                  return (
                    <div className="col-6 mb-3" key={key}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        desc={item?.description}
                        image={item?.images[0]?.url}
                        date={moment(item?.createAt).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
