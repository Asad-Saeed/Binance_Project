import React from "react";
import { Link } from "react-router-dom";
import "./Position_data_card.css";
function Position_data_card() {
  return (
    <div>
      <div className="card mt-1 card_shadow">
        <div className="card-body">
          <div className="">
            <div className="btn-group w-100">
              <Link to="" className="btn color_btn1 active" aria-current="page">
                A (5M)
              </Link>
              <Link to="" className="btn color_btn1">
                B (10M)
              </Link>
              <Link to="" className="btn color_btn1">
                C (30M)
              </Link>
              <Link to="" className="btn color_btn1">
                D (1H)
              </Link>
            </div>
            <div className="  table_height mt-3" style={{ overflow: "auto" }}>
              <>
                <div className="table_back d-flex  justify-content-between text-start  px-4 align-items-center ">
                  <div className="text-start ">PAIR</div>
                  <div className="text-start">POSITION</div>
                  <div className="text-start">PRICE</div>
                  <div className="text-start">DATE</div>
                </div>
              </>
              <div className="card_shadow">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="flush-headingOne">
                      <button
                        className="border-none text-start btn_size border_accordin card_shadow d-flex text_size pt-2   justify-content-between  btn-white  collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <p>BTC/USDT</p>
                        <p className="color_red_short">Short</p>
                        <p className="ps-4">23754.6</p>
                        <p>08:23:60</p>
                      </button>
                    </div>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse py-4 px-4 baxk_accc "
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <Link to="/Select_Signals">
                        <button className="btn_register btn_buy me-2 mt-md-0 mt-2 w-100">
                          Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample2"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="flush-heading2">
                      <button
                        className="border-none text-start btn_size border_accordin d-flex text_size pt-2  card_shadow  justify-content-between  btn-white  collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse1"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <p>BTC/USDT</p>
                        <p className="color_red_short">Short</p>
                        <p className="ps-4">23754.6</p>
                        <p>08:23:60</p>
                      </button>
                    </div>
                    <div
                      id="flush-collapse1"
                      className="accordion-collapse collapse py-4 px-4 baxk_accc "
                      aria-labelledby="flush-heading2"
                      data-bs-parent="#accordionFlushExample2"
                    >
                      <Link to="/Select_Signals">
                        <button className="btn_register me-2 mt-md-0 mt-2 w-100">
                          Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample3"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="flush-heading3">
                      <button
                        className="border-none text-start btn_size border_accordin d-flex text_size pt-2  card_shadow justify-content-between  btn-white  collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse3"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <p>BTC/USDT</p>
                        <p className="color_red_short">Short</p>
                        <p className="ps-4">23754.6</p>
                        <p>08:23:60</p>
                      </button>
                    </div>
                    <div
                      id="flush-collapse3"
                      className="accordion-collapse collapse py-4 px-4 baxk_accc "
                      aria-labelledby="flush-heading3"
                      data-bs-parent="#accordionFlushExample3"
                    >
                      <Link to="/Select_Signals">
                        <button className="btn_register me-2 mt-md-0 mt-2 w-100">
                          Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample4"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="flush-heading4">
                      <button
                        className="border-none text-start btn_size border_accordin d-flex text_size  card_shadow align-items-center pt-3  justify-content-between  btn-white  collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse4"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <p>BTC/USDT</p>
                        <p className="color_red_short">Short</p>
                        <p className="ps-4">23754.6</p>
                        <p>08:23:60</p>
                      </button>
                    </div>
                    <div
                      id="flush-collapse4"
                      className="accordion-collapse collapse py-4 px-4 baxk_accc "
                      aria-labelledby="flush-heading4"
                      data-bs-parent="#accordionFlushExample4"
                    >
                      <Link to="/Select_Signals">
                        <button className="btn_register me-2 mt-md-0 mt-2 w-100">
                          Buy
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Position_data_card;
