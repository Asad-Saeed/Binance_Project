import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Admin_notic_board from "../Admin_notic_board/Admin_notic_board";
import Admin_page1 from "../Admin_page1/Admin_page1";
import Dashboard_admin from "../Dashboard_admin/Dashboard_admin";
import "./Driwer_admin.css";
function Driwer_admin() {
  return (
    <div className="">
      <div className="sidebar fw-bold">
        <Link className="active" to="/Dashboard_admin">
          Dashboard
        </Link>
        <Link to="/Admin_notic_board ">Notice Board</Link>
      </div>

      <div className="content  background_color121 pb-4">
        <Routes>
          <Route
            exact
            path="/Admin_notic_board"
            element={<Admin_notic_board />}
          />
          <Route exact path="/Dashboard_admin" element={<Dashboard_admin />} />
        </Routes>
        {/* <Admin_notic_board/> */}
      </div>
    </div>
  );
}

export default Driwer_admin;
