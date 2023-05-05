import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { toast } from "react-toastify"
import Api from "../../client-config"
import jwt from "jsonwebtoken";
import { logout } from "../../Redux/connection/actions"
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [chargetPoint, setChargePoint] = useState(0)
  const [paymentMetods, setPaymentMethods] = useState("Bank")
  const [paymentAmount, setPaymentAmount] = useState(0)
  const handleChange = (event, newValue) => {
    if (chargetPoint == 0) {
      toast.info("Please select point")
    } else {
      setValue(newValue);
    }
  };
  const handleNext = newValue => {
    if (chargetPoint == 0) {
      toast.info("Please select point")
    } else {
      setValue(newValue);
    }
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const purchasePoints = async () => {
    try {
      let { userId } = jwt.decode(sessionStorage.token);
      let pointData = { userId: userId, pointAmount: chargetPoint, paymentType: paymentMetods }
      let {data} = await Api.post("/user/purchasePoint", pointData);
      toast.success(data.showableMessage)
      navigate("/Points_user")
    } catch (error) {
      console.error("error while purchase points", error);
      if (error.response.data.message == "Invalid token") {
        toast.error("Your session is expired")
        dispatch(logout())
      }
    }
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="px-3"
        >
          <Tab className="color_btn2 " label="Point Amount" {...a11yProps(0)} />
          <Tab className="color_btn2 " label="Payment" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="">
          <div className="row justify-content-between">
            <div className="col-md-4 mt-2 back_color_pay ">
              <div className="d-flex justify-content-around mt-3">
                <p>Charge Point</p>
                <p>{chargetPoint} P</p>
              </div>
            </div>
            {/* <div className="col-md-4 mt-2  back_color_pay ">
              <div className="d-flex justify-content-around mt-3">
                <p>Bonus Point</p>
                <p>0P</p>
              </div>
            </div> */}
          </div>
          <div className="mt-4 d-flex justify-content-between"
          // onChange={(e)=>alert(e.target.value)}
          >
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="10000"
                  onChange={(e) => setChargePoint(e.target.value)}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  10,000
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="20000"
                  onChange={(e) => setChargePoint(e.target.value)}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  20,000
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="50000"
                  onChange={(e) => setChargePoint(e.target.value)}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  50,000
                </label>
              </div>
            </div>
          </div>
          <div className="mt-2 d-flex justify-content-between"

          >
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="100000"
                  onChange={(e) => setChargePoint(e.target.value)}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  100,000
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="200000"
                  onChange={(e) => setChargePoint(e.target.value)}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  200,000
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="500000"
                  onChange={(e) => setChargePoint(e.target.value)}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  500,000
                </label>
              </div>
            </div>
          </div>

          <div
            className=" d-flex justify-content-center "
            style={{ gap: "12px" }}
          >
            <button className="btn btn_same1 py-2 mt-3  ">Cancel</button>
            <button className="btn btn_same2 py-2 mt-3  text-white"
              onClick={() => handleNext(1)}
            >
              Next
            </button>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="">
          <div className="row justify-content-between">
            <div className="col-md-4 mt-2 back_color_pay ">
              <div className="d-flex justify-content-around mt-3">
                <p>Charge Point</p>
                <p>{chargetPoint} P</p>
              </div>
            </div>
            {/* <div className="col-md-4 mt-2  back_color_pay ">
              <div className="d-flex justify-content-around mt-3">
                <p>Bonus Point</p>
                <p>0P</p>
              </div>
            </div> */}
          </div>
          <div className="mt-4 d-flex justify-content-between">
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={paymentMetods == "Bank" && true}
                  onChange={() => { setPaymentMethods("Bank") }}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  Bank Account
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={paymentMetods == "cent" && true}
                  onChange={() => { setPaymentMethods("cent") }}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  Cent
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={paymentMetods == "usdt" && true}
                  onChange={() => { setPaymentMethods("usdt") }}
                />
                <label
                  className="htmlForm-check-label"
                  htmlFor="flexRadioDefault1"
                >
                  USDT (TRX TRON)
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="row align-items-center">
              <div className="col-md-3">
                {paymentMetods == "Bank" && <p>Bank Account</p>}
                {paymentMetods == "cent" && <p>Cent Wallet</p>}
                {paymentMetods == "usdt" && <p>USDT Wallet</p>}
              </div>
              <div className="col-md-9">
                <input
                  type="number"
                  className="w-100 number_flied py-3 ps-3"
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  placeholder={
                    paymentMetods == "Bank" ?
                      "Bank Account"
                      :
                      paymentMetods == "cent" ?
                        "Cent Wallet"
                        :
                        "USDT Wallet"
                  }
                />
              </div>
            </div>

          </div>

          <div
            className=" d-flex justify-content-center "
            style={{ gap: "12px" }}
          >
            <button className="btn btn_same1 py-2 mt-3  ">Cancel</button>
            <button className="btn btn_same2 py-2 mt-3  text-white"
              onClick={purchasePoints}
            >
              Submit
            </button>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
