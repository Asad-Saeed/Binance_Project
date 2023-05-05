import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import "./liquidation.css";

const liquidation_map = () => {
  const data = [
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
    {
      name: "Binance Future",
      first_value: 28200,
      second_value: 10,
      Third_value: 930,
    },
  ];
  return (
    <div>
      <div className="container card card_shadow liquidation_table  p-2">
        <div className="row d-flex justify-content-between ">
          <div className="col-sm-6 text-start">
            <span className="heading">Real-time liquidation map</span>
            <br />
          </div>
          <div className="col-sm-6 text-end">
            {/* <SettingsIcon /> */}
            <small>Mar 22 12:44</small>
          </div>
        </div>
        <div className="row d-flex justify-content-around align-item-center text-secondary my-4">
          <div className="col-md-4 col-lg-4 mt-2  ">
            <button className="btn btn-sm btn-outline-secondary  rounded-0">
              Binance Futures
            </button>
          </div>
          <div className="col-md-4 col-lg-4 mt-2  ">
            <button className="btn btn-sm btn-outline-secondary  rounded-0">
              BTC/USDT
            </button>
          </div>
          <div className="col-md-4 col-lg-4 mt-2  ">
            <button className="btn btn-sm btn-outline-secondary  rounded-0">
              Full Leverage
            </button>
          </div>
        </div>
        <div
          className="my-2 map_card"
          style={{ height: "230px", overflow: " auto" }}
        ></div>
        <div className="row d-flex justify-content-between ">
          <div className="col-md-12 text-start">
            <span className="heading">Following Trader Positions</span>
          </div>
        </div>
        <div className="row d-flex justify-content-around align-item-center text-secondary my-4">
          <div className="col-md-6 col-6">
            <button className="btn btn-success form-control rounded-0">
              50.0%
            </button>
          </div>
          <div className="col-md-6 col-6">
            <button className="btn btn-danger form-control rounded-0">
              50.0%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default liquidation_map;
