import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Signup = () => {
  return (
    <>
      <Meta title="Tạo tài khoản" />
      <BreadCrumb title="Đăng ký" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="action-customer">
                <h3 className="text-center text-uppercase">Đăng ký</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Tên khách hàng"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="mobile"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control mt-1"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <Link to="" className="signup button" type="submit">
                        Đăng ký
                      </Link>
                    </div>

                    <Link
                      to="/"
                      className="d-flex align-items-center gap-10 mt-3"
                    >
                      <BiArrowBack className="fs-4" /> Quay lại trang chủ
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
