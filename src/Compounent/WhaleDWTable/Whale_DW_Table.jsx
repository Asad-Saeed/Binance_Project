import React from "react";
import D_icon from "../Assets/D_icon.png";
import tel_icon from "../Assets/tel.png";

import "./Whale_DW_Table.css";

const Whale_DW_Table = () => {
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
      <div className="container card card_shadow Whale_DW_table  p-2">
        <div className="row d-flex justify-content-between ">
          <div className="col-sm-10 text-start">
            <span className="heading">
              Real-time whale deposits and withdrawals
            </span>{" "}
            <br />
            <small>Last Update: 2023-03-22 12:21:39</small>
          </div>
          <div className="col-sm-2 text-end">
            <img src={tel_icon} alt="Logo" />
          </div>
        </div>
        <div className="my-2" style={{ height: 250, overflow: " auto" }}>
          <table className="table table-borderless table-responsive text-white">
            <tbody className="text-white text-start">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="d-flex">
                    <img className="mx-2" src={D_icon} />
                    <div>
                      {item.name}
                      <br />
                      <small> {item.time}</small>
                    </div>
                  </td>
                  <td>
                    <div>
                      {item.balance} billion deposit <br />
                      <small> {item.balance2} USDC </small>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Whale_DW_Table;
