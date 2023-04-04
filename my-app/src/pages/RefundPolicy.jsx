import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const RefundPolicy = () => {
  return (
    <>
      <Meta title="Chính sách đổi hàng" />
      <BreadCrumb title="Chính sách đổi hàng" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RefundPolicy;
