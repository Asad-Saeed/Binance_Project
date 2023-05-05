import React, { useEffect, useState } from "react";
import carve_line from "../Assets/Vector (5).png";
import GroupsIcon from "@mui/icons-material/Groups";
import speker from "../Assets/Vector (6).png";
import Position_data_card from "../Position_data_card/Position_data_card";
import Table_main from "../Table_main/Table_main";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import "./Second_step.css";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { getPairs } from "../../Redux/pairs/aciton";
import { Link } from "react-router-dom";
import Whale_Trades_table from "../Whale_Trades/Whale_Trades_table";
import Liquidation_map from "../liquidation_map/liquidation_map";
import Whale_DW_Table from "../WhaleDWTable/Whale_DW_Table";
import Liquidation_history from "../Liquidation_history/Liquidation_history.jsx";
import Chat_Box from "../ChatBox/Chat_Box";

function SecondStep() {
  const { pairs } = useSelector((state) => state.pairs);
  let [pairSymbol, setPairSymbol] = useState({
    label: "BTCUSDT",
    value: "BTCUSDT",
  });
  const getPair = (e) => {
    setPairSymbol(e);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPairs());
  }, []);
  return (
    <div className="">
      <div className="container-fluid px-md-5 px-3 pt-5">
        <div className="row ">
          <div className="col-lg-8 col-md-7  mb-md-0 mb-4 col-sm-12">
            {/* <div className="graph_size"> */}

            <TradingViewWidget
              symbol={pairSymbol.value}
              theme={Themes.DARK}
              interval="D"
              locale="en"
              timezone="America/New York"
              hideSideToolbar={true}
              details
              autosize
              news={["headlines"]}
              className=""
            />
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12 margin_resposnsive">
            {/* <div className="card card_shadow">
              <div className="card-body d-flex justify-content-evenly align-items-center">
                <img src={carve_line} width="30px" alt="" />
                <div>
                  <input id="checkbox1" type="checkbox" className="checkbox" />

                  <label for="checkbox1" className="switch">
                    <span className="switch__circle">
                      <span className="switch__circle-inner"></span>
                    </span>
                    <span className="switch__left">Off</span>
                    <span className="switch__right">On</span>
                  </label>
                </div>
                <img src={speker} width="30px" alt="" />

                <div>
                  <input id="checkbox2" type="checkbox" className="checkbox" />

                  <label for="checkbox2" className="switch">
                    <span className="switch__circle">
                      <span className="switch__circle-inner"></span>
                    </span>
                    <span className="switch__left">Off</span>
                    <span className="switch__right">On</span>
                  </label>
                </div>
              </div>
            </div> */}
            {/* 1st card  */}
            <div className="card card_shadow">
              <div className="card-body d-flex justify-content-between align-items-center">
                <h6 className="fw-bold">Pair</h6>
                <Select
                  className="basic-single text-dark"
                  classNamePrefix="select"
                  defaultValue={pairSymbol}
                  options={pairs}
                  isSearchable={true}
                  onChange={getPair}
                />
              </div>
            </div>
            <div className="card mt-1 card_shadow">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div className="">
                  <h6 className="fw-bold">Check Signal Now!</h6>
                </div>
                <div className="">
                  <GroupsIcon />
                </div>
                <div className="">
                  <button className="btn btn-danger">See</button>
                </div>
              </div>
            </div>
            <Position_data_card />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-8 col-md-12 mb-md-0 mb-4 col-sm-12">
            <div className="row">
              <div className="col-lg-6  mt-1 col-md-12 col-sm-12 text-white">
                <Whale_Trades_table />
              </div>
              <div className="col-lg-6  mt-1 col-md-12 col-sm-12 text-white">
                <Liquidation_map />
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-6  mt-1 col-md-12 col-sm-12 text-white">
                <Whale_DW_Table />
              </div>
              <div className="col-lg-6  mt-1 col-md-12  col-sm-12 text-white">
                <Liquidation_history />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-1 margin_resposnsive">
            <div>
              <Chat_Box />
            </div>
            {/* second card  */}
            {/* <div className="card mt-3 card_shadow">
              <div className="card-body d-flex justify-content-between align-items-center">
                <h6 className="fw-bold">Pair</h6>
                <div className="dropdown">
                  <button
                    className="btn text-white color_btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    BTC/USDT
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link to="/" className="dropdown-item">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* <Position_data_card /> */}
          </div>
        </div>
        {/* <div className="col-md-12 col-lg-12">
          <div className="row my-2">
            <div className="col-lg-4 col-sm-12 text-white">
              <Whale_Trades_table />
            </div>
            <div className="col-lg-4 col-sm-12 text-white">
              <Liquidation_map />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-lg-4 col-sm-12 text-white">
              <Whale_DW_Table />
            </div>
            <div className="col-lg-4 col-sm-12 text-white">
              <Liquidation_history />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SecondStep;
