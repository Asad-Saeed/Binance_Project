import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Whale_Trades_table.css";

const Whale_Trades_table = () => {
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
      <div className="container card card_shadow Whale_Trades_table p-2">
        <div className="row d-flex justify-content-between ">
          <div className="col-sm-7 text-start">
            <span className="heading">
              {" "}
              Execution of real-time whale trades
            </span>{" "}
            <br />
            <small>Last Update: 2023-03-22 12:21:39</small>
          </div>
          <div className="col-sm-5 text-end">
            <SettingsIcon />
          </div>
        </div>
        <div
          className="my-2 map_card1"
          style={{ height: 400, overflow: " auto" }}
        >
          <table className="table table-borderless table-responsive text-white">
            <tbody className="text-white text-start">
              {data.map((item, index) => (
                <tr className="table_row" key={index}>
                  <td>{item.name}</td>
                  <td>${item.first_value}</td>
                  <td>{item.second_value} billion</td>
                  <td>${item.Third_value}K</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Whale_Trades_table;
