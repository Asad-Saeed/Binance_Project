import React from "react";
import "./Payment_method.css";
import Tabpayment from "../Tab_payment/Tab_payment";
function Payment_method() {
  return (
    <div className=" d-flex justify-content-center align-items-center ">
      <div className="card card_bodies  my-5 width_tab_payment">
        <div className="card-body text-white text-start">
          <h4 className="mb-3">Point Charge</h4>
          <Tabpayment className="tab_col" />
        </div>
      </div>
    </div>
  );
}

export default Payment_method;
