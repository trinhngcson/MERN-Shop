import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <>
      <Meta title="Quên mật khẩu" />
      <BreadCrumb title="Quên mật khẩu" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="action-customer">
                <h3 className="text-center text-uppercase mb-3">
                  Đặt lại mật khẩu
                </h3>
                <p className="text-center text-uppercase mt-2 mb-3">
                  Khôi phục bằng email
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3 flex-column">
                      <button className="button border-0" type="submit">
                        Gửi
                      </button>
                      <Link to="/dang-nhap">Huỷ</Link>
                    </div>
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

export default Forgotpassword;
