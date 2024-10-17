import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, desc, image, date } = props;
  return (
    id && (
      <>
        <div className="blog-card">
          <div className="card-image">
            <img
              src={image ? image : "images/blog-1.jpg"}
              alt="blog"
              className="img-fluid w-100"
            />
          </div>
          <div className="blog-content">
            <p className="date">{date}</p>
            <h5 className="title">{title}</h5>
            <p
              className="desc"
              dangerouslySetInnerHTML={{ __html: desc.substr(0, 70) + "..." }}
            />
            <Link to={"/blog/" + id} className="button">
              Read More
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default BlogCard;
