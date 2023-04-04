import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Meta title="Đăng nhập" />
      <BreadCrumb title="Đăng nhập" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="action-customer">
                <h3 className="text-center text-uppercase">Đăng nhập</h3>
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
                    <input
                      type="password"
                      name="password"
                      className="form-control mt-1"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div>
                    <Link to="/quen-mat-khau">Quên mật khẩu ?</Link>
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <button className="button border-0" type="submit">
                        Đăng nhập
                      </button>
                      <Link to="/dang-ky" className="signup button">
                        Đăng ký
                      </Link>
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

export default Login;
