import React, { useState } from "react";
import "./Admin_page1.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckIcon from "@mui/icons-material/Check";
function Admin_page1() {
  const [count, setCount] = useState(0);
  return (
    <div className="background_color12">
      <div className="container-fluid px-md-5 pxo-2 pt-5">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table bg-white mt-2 ">
                <thead>
                  <tr className="table_back pt-2">
                    <th scope="col">No</th>
                    <th scope="col">Id</th>
                    <th scope="col">Nick Name</th>
                    <th scope="col">Name</th>
                    <th scope="col">Point</th>
                    <th scope="col">Email</th>
                    <th scope="col">Joint Type</th>
                    <th scope="col">Joined</th>
                    <th scope="col">Point Balance</th>
                    <th scope="col">Used</th>
                    <th scope="col">Remain</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="text_size">
                  <tr></tr>
                  <tr>
                    <td >01</td>
                    <td>Steve</td>
                    <td>Sky</td>
                    <td>Sky</td>
                    <td className="d-flex align-items-center">
                      <h4
                        className="btn  me-2 incrasing_btn"
                        onClick={() => setCount(count - 1)}
                      >
                        <RemoveIcon />
                      </h4>
                      <span>{count}</span>
                      <h4
                        className="btn  ms-2  incrasing_btn"
                        onClick={() => setCount(count + 1)}
                      >
                        <AddIcon />
                      </h4>
                    </td>
                    <td>steve@gmail.com</td>
                    <td>Id</td>
                    <td>2023-01-jan</td>
                    <td>15000</td>
                    <td>5000</td>
                    <td>10000</td>
                    <td className="">
                      <CheckIcon className="fw-bold" />
                      <button className="btn btn_danger">cancel</button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Admin_page1;
