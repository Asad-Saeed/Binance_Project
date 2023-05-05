// import logo from './logo.svg';
import { useEffect } from "react";
import "./App.css";
import Main_page from "./Compounent/Main_page/Main_page";
import Login from "./Compounent/Login/Login";
import Register from "./Compounent/Register/Register";
import Reset_password from "./Compounent/Reset_password/Reset_password";
import Verify from "./Compounent/Verify/Verify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Compounent/Navbar/Navbar";
import Payment_method from "./Compounent/Payment_method/Payment_method";
import Points_user from "./Compounent/Points_user/Points_user";
// import Admin_page1 from "./Compounent/Admin_page1/Admin_page1";
// import Driwer_admin from "./Compounent/Driwer_admin/Driwer_admin";
// import { useSelector } from "react-redux";
import Protected_routing from "./Compounent/Protected_routing/Protected_routing";
import jwt from "jsonwebtoken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gapi } from "gapi-script";
import Table_main from "./Compounent/Table_main/Table_main";
import Whale_Trades_table from "./Compounent/Whale_Trades/Whale_Trades_table";
import BasicTabs from "./Compounent/Tab_payment/Tab_payment";
import Select_Signal from "./Compounent/Select_Signals/Select_Signal";
import Notice from "./Compounent/Notices/Notice";
function App() {
  let tokendata = jwt.decode(sessionStorage.token);
  console.log("tokendata", tokendata);
  let isAut = false;
  if (sessionStorage.token) {
    isAut = true;
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route
            exact
            path="/Reset_password/:verifyEmail"
            element={<Reset_password />}
          />
          <Route exact path="/Verify" element={<Verify />} />
          <Route element={<Protected_routing isAuthenticatin={isAut} />}>
            <Route exact path="/" element={<Main_page />} />
            <Route exact path="/Payment_method" element={<Payment_method />} />
            <Route exact path="/Points_user" element={<Points_user />} />
            <Route exact path="/bot_profit" element={<Table_main />} />
            <Route exact path="/Select_Signals" element={<Select_Signal />} />
            <Route exact path="/Notices" element={<Notice />} />
          </Route>
        </Routes>

        {/* <Admin_page1/> */}

        {/* <Driwer_admin/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
