import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postQuery } from "../features/contact/contactSlice";
const Contact = () => {
  const dispatch = useDispatch();
  let schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .nullable()
      .email("Email should be valid")
      .required("Email Address is required"),
    comment: yup.string().required("Comment is Required"),
    mobile: yup.string().required("Mobile No is Required"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      comment: "",
      mobile: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(postQuery(values));
    },
  });

  return (
    <>
      <Meta title="Liên hệ với chúng tôi" />
      <BreadCrumb title="Liên hệ" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3915.804558479245!2d106.6273469!3d11.053275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d18c48fab1bd%3A0x45a4fdf72dbbac9d!2zVHLGsOG7nW5nIHRp4buDdSBo4buNYyBUw6JuIMSQ4buLbmg!5e0!3m2!1svi!2s!4v1680329651181!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="googlemap"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Liên hệ</h3>
                <form
                  action=""
                  onSubmit={formik.handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tên"
                      value={formik.values.name}
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Số điện thoại"
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="10"
                      placeholder="Nội dung"
                      value={formik.values.comment}
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                    />
                    <div className="error">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button className="button border-0">GỬI</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title">Liên hệ với chúng tôi</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Số 06, Trần Văn Ơn, Phú Hòa, Thủ Dầu Một, Bình Dương
                      </address>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:0123456789">0123456789</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:trinhngcson@gmail.com">
                        trinhngcson@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
