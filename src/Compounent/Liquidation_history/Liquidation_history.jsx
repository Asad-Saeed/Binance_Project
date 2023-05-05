import React from "react";
import D_icon from "../Assets/D_icon.png";
import tel_icon from "../Assets/tel.png";

import "./Liquidation_history.css";

const Liquidation_history = () => {
  const data = [
    {
      img: { D_icon },
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
    {
      name: "Deposit to Coinbase from a specific wallet",
      time: "2023-03-22 16:28:16",
      balance: 2.5,
      balance2: "2,295,953",
    },
  ];
  return (
    <div>
      <div className="container card card_shadow liquidation_history p-2">
        <div className="row d-flex justify-content-between ">
          <div className="col-sm-10 text-start">
            <span className="heading">Real-time whale liquidation history</span>{" "}
            <br />
            <small>Last Update: 2023-03-22 15:38:45</small>
          </div>
          <div className="col-sm-2 text-end">
            <img src={tel_icon} alt="Logo" />
          </div>
        </div>
        <div className="my-2" style={{ height: 250, overflow: " auto" }}>
          <table className="table table-borderless table-responsive text-white">
            {/* <tbody className="text-white text-start">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="d-flex">
                    <img className="mx-2" src={D_icon} />
                    <div>
                      {item.name}
                      <small> {item.time}</small>
                    </div>
                  </td>
                  <td>
                    <div>
                      {item.balance} billion deposit
                      <small> {item.balance2} USDC </small>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Liquidation_history;
