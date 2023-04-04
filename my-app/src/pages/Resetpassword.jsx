import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Đặt lại mật khẩu" />
      <BreadCrumb title="Đặt lại mật khẩu" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="action-customer">
                <h3 className="text-center text-uppercase mb-3">
                  Đặt lại mật khẩu
                </h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="cfpassword"
                      className="form-control"
                      placeholder="Nhập lại mật khẩu"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3 flex-column">
                      <button className="button border-0" type="submit">
                        Gửi
                      </button>
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

export default Resetpassword;
