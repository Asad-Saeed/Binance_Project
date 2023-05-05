import React, { useEffect, useState } from "react";
import "./Points_user.css";
import Api from "../../client-config";
import jwt from "jsonwebtoken";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/connection/actions";
function Points_user() {
  const data = [
    {
      No: "01",
      PointAmount: 10000,
      PaymentType: "Crypto",
      Date: "2023-01-jan",
      Time: "15:40",
      Type: "Paid",
    },
    {
      No: "01",
      PointAmount: 10000,
      PaymentType: "Crypto",
      Date: "2023-01-jan",
      Time: "15:40",
      Type: "Paid",
    },
    {
      No: "01",
      PointAmount: 10000,
      PaymentType: "Crypto",
      Date: "2023-01-jan",
      Time: "15:40",
      Type: "Paid",
    },
    {
      No: "01",
      PointAmount: 10000,
      PaymentType: "Crypto",
      Date: "2023-01-jan",
      Time: "15:40",
      Type: "Paid",
    },
    {
      No: "01",
      PointAmount: 10000,
      PaymentType: "Crypto",
      Date: "2023-01-jan",
      Time: "15:40",
      Type: "Paid",
    },
    {
      No: "01",
      PointAmount: 10000,
      PaymentType: "Crypto",
      Date: "2023-01-jan",
      Time: "15:40",
      Type: "Paid",
    },
    {
      No: "01",
      PointAmount: 10000,
      PaymentType: "Crypto",
      Date: "2023-01-jan",
      Time: "15:40",
      Type: "Paid",
    },
    {
      No: "01",
      PointAmount: 10000,
      PaymentType: "Crypto",
      Date: "2023-01-jan",
      Time: "15:40",
      Type: "Paid",
    },
  ];
  const data2 = [
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
    {
      No: "01",
      Pair: "ETH",
      Used: "500",
      Date: "2023-01-jan",
      Time: "15:40",
      Signal: "A",
      Status: "Success",
    },
  ];
  const [pointPurchaseData, setPointPurchaseData] = useState([]);
  const [pointUseData, setPointUseData] = useState([]);

  let [userBal, setUserBal] = useState(0);
  const dispatch = useDispatch();

  const getPointHistory = async () => {
    try {
      let { userId } = jwt.decode(sessionStorage.token);
      let { data } = await Api.post("/user/getPointsPurchaseHistory", {
        userId: userId,
      });
      setPointPurchaseData(data.data);
    } catch (error) {
      if (error.response.data.message == "Invalid token") {
        dispatch(logout());
      }
      console.error("error while get point history", error);
    }
  };
  const getBalance = async () => {
    try {
      let { userId } = jwt.decode(sessionStorage.token);
      let { data } = await Api.post("/user/getPointsBalance", {
        userId: userId,
      });
      setUserBal(data.data);
    } catch (error) {
      if (error.response.data.message == "Invalid token") {
        dispatch(logout());
      }
      console.error("error while get user balance", error);
    }
  };
  const getPointUseHistory = async () => {
    try {
      let { userId } = jwt.decode(sessionStorage.token);
      let { data } = await Api.post("/user/getPointUsedHistory", {
        userId: userId,
      });
      console.log("getPointUsedHistory", data.data);
      setPointUseData(data.data);
    } catch (error) {
      if (error.response.data.message == "Invalid token") {
        dispatch(logout());
      }
      console.error("error while get user balance", error);
    }
  };
  useEffect(() => {
    getPointHistory();
    getBalance();
    getPointUseHistory();
  }, []);
  return (
    <div>
      <div className="container-fluid px-md-5 px-2 py-4">
        <div className="card card_bodies text-white">
          <div className="card-body  d-flex justify-content-between align-items-center pt-4">
            <h6 className="">Point Balance</h6>
            <h6>{userBal}</h6>
          </div>
        </div>

        <div className="point_heading text-start my-4">
          <h5>POINT PURCHASE HiSTORY</h5>
        </div>

        <div className="card card_bodies">
          <div
            className="card-body table-responsive"
            style={{ overflow: "auto", height: "300px" }}
          >
            <table className="table table-responsive text-white backgroundcolor text-center">
              <thead className="thead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Point Amount</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {pointPurchaseData?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.pointAmount}</td>
                      <td>{item.paymentType}</td>
                      <td>
                        {new Date(
                          parseInt(item._id.toString().substring(0, 8), 16) *
                            1000
                        ).toLocaleDateString()}
                      </td>
                      <td>
                        {new Date(
                          parseInt(item._id.toString().substring(0, 8), 16) *
                            1000
                        ).toLocaleTimeString()}
                      </td>
                      <td className="text-capitalize">{item.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="point_heading text-start my-4">
          <h5>POINT USE HISTORY</h5>
        </div>

        <div className="card card_bodies">
          <div
            className="card-body table-responsive"
            style={{ overflow: "auto", height: "300px" }}
          >
            <table className="table  text-white backgroundcolor text-center">
              <thead className="thead">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Pair</th>
                  <th scope="col">Used</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Signal</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {pointUseData?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.pair}</td>
                    <td>{item.usedPoints}</td>
                    <td>
                      {new Date(
                        parseInt(item._id.toString().substring(0, 8), 16) * 1000
                      ).toLocaleDateString()}
                    </td>
                    <td>
                      {new Date(
                        parseInt(item._id.toString().substring(0, 8), 16) * 1000
                      ).toLocaleTimeString()}
                    </td>
                    <td>{item.signal}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points_user;
