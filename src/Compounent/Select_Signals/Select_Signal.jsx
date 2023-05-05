import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./SelectSignal.css";
import jwt from "jsonwebtoken"
import Api from "../../client-config";
import {logout} from '../../Redux/connection/actions';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// import
const Select_Signal = () => {
  let [userBal, setUserBal] =useState(0);
  let [signals, setSignals] = useState("5");
  let [usePoints, setUsePoints] = useState(0)
  const dispatch = useDispatch()
  const getBalance = async () => {
    try {
      let { userId } = jwt.decode(sessionStorage.token);
      let {data} = await Api.post("/user/getPointsBalance", {userId:userId});
      setUserBal(data.data)
    } catch (error) {
      if (error.response.data.message == "Invalid token") {
        dispatch(logout())
      }
      console.error("error while get user balance", error);
    }
  }
  useEffect(()=>{
    getBalance()
  },[])
  const usePointsBySignals = async () => {
    let { userId } = jwt.decode(sessionStorage.token);
    try {
      let obj = {
        userId:userId,
        pair:"usdt/usdt",
        usedPoints:usePoints,
        signal:signals
      }
      let {data} = await Api.post("/user/usePoints", obj);
      console.log("data", data);
      toast.success(data.showableMessage)
      getBalance()
    } catch (error) {
      if (error.response.data.message == "Invalid token") {
        dispatch(logout())
        return
      }
      toast.error(error.response.data.showableMessage)
      console.error("error while use points", error );
    }
  }
  return (
    <div className="new_back my-md-5  my-2 ">
      <div className="card card_bodies  py-md-4 px-md-3 card_responsive m-auto">
        <h4 className="mt-3 text-white">Select Signal Type</h4>
        <div className="container-fluid my-4 text-start text-white">
        <div className="col-6">
              <h6>Balance : {userBal}</h6>
            </div>
          <div className="row my-3 d-flex align-items-center justify-content-between">
            <div className="col-6">
              <h6>PAIR</h6>
            </div>
            
            <div className="col-6">
              <select
                className="form-select btn-lg btn-border"
                aria-label="Default select example"
              >
                <option selected="">BTC</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-6">
              <h6>Signal</h6>
            </div>
            <div className="col-6">
              <select
                className="form-select btn-lg btn-border"
                aria-label="Default select example"
                onChange={(e)=>{setSignals(e.target.value)}}
              >
                <option selected="" value="5">5 Minute</option>
                <option value="10">10 Minute</option>
                <option value="30">30 Minute</option>
                <option value="60">60 Minute</option>
              </select>
            </div>
          </div>
          <div className="row my-3 d-flex align-items-center justify-content-between">
          <div className="col-6 ">
          Use Points
            </div>
            <div className="col-6 text-md-end text-center">
              <input  
              style={{width:"100%"}}
              type="number"
              onChange={(e)=>setUsePoints(e.target.value)}
              />
              {/* <button className="btn btn-lg btn-border btn-warning">
                Buy Point
              </button> */}
            </div>
          </div>
          <div className="row mt-5 d-flex align-items-center justify-content-evenly">
            <div className="col-6">
              <button className="btn btn-lg btn-border btn-danger">
                Cancel
              </button>
            </div>
            <div className="col-6 text-end ">
              <button className="btn btn-lg btn-border btn-success"
              onClick={usePointsBySignals}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select_Signal;
