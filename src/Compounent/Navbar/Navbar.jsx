// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { logout } from "../../Redux/connection/actions";
// import ball from "../Assets/Vector (4).png";
// import word from "../Assets/World.png";
// import "./Navbar.css";

// function Navbar() {
//   const { isAuthenticatin } = useSelector((state) => state.connect);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const loogout = () => {
//     dispatch(logout());
//     navigate("/");
//   };

//   return (
//     <div className="">
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pt-md-5 ">
//         <div className="container-fluid p-0  m-0 align-itens-center  row ">
//           <div className="col-md-2 text-center">
//             <Link
//               to="/Main_page"
//               className="navbar-brand ms-2 ps-md-5 ps-sm-2 "
//             >
//               <div className="logo ">
//                 <h6>COINPICK</h6>
//                 <h5>365</h5>
//               </div>
//             </Link>
//           </div>
//           <button
//             className="navbar-toggler me-2 me-md-5"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse justify-content-center col-md-8 text-center"
//             id="navbarSupportedContent"
//           >
//             <header className="nav_header ">
//               <ul className="nav nav-pills ">
//                 <li className="nav-item">
//                   <Link to="#" className="nav-link " aria-current="page">
//                     Bot Profit
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="#" className="nav-link">
//                     Notices
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="#" className="nav-link">
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="#" className="nav-link">
//                     Register
//                   </Link>
//                 </li>
//               </ul>
//             </header>
//             <div className="pe-md-5 pe-2 d-flex justify-content-end  col-md-2 ">
//               <div
//                 className="btn-group toggle"
//                 role="group"
//                 aria-label="Basic radio toggle button group"
//               >
//                 <input
//                   type="radio"
//                   className="btn-check"
//                   name="btnradio"
//                   id="btnradio1"
//                   autoComplete="off"
//                   defaultChecked=""
//                 />
//                 <label className="btn btn-outline-primary" htmlFor="btnradio1">
//                   ENG
//                 </label>
//                 <input
//                   type="radio"
//                   className="btn-check"
//                   name="btnradio"
//                   id="btnradio2"
//                   autoComplete="off"
//                 />
//                 <label className="btn btn-outline-primary" htmlFor="btnradio2">
//                   KOR
//                 </label>
//               </div>
//             </div>
//           </div>

//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
// import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import { logout, login } from "../../Redux/connection/actions";
import ball from "../Assets/Vector (4).png";
import word from "../Assets/World.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let isAuthenticatin = false;
  if (sessionStorage.token) {
    isAuthenticatin = true;
  }

  const dispatch = useDispatch();
  const loogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        aria-label="Eighth navbar example"
      >
        <div className="container-fluid d-md-flex text-align-center">
          <Link to="/" className="navbar-brand ms-2 ps-md-5 ps-sm-2 ">
            <div className="logo ">
              <h6>COINPICK</h6>
              <h5>365</h5>
            </div>
          </Link>
          <button
            className="navbar-toggler collapsed me-md-5 me-0 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse collapse"
            id="navbarsExample07"
            style={{}}
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  to="/bot_profit"
                  className="nav-link "
                  aria-current="page"
                >
                  Bot Profit
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Points_user"
                  className="nav-link "
                  aria-current="page"
                >
                  Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Payment_method"
                  className="nav-link "
                  aria-current="page"
                >
                  Purchas Points
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Notices" className="nav-link">
                  Notices
                </Link>
              </li>

              <li className="nav-item">
                {isAuthenticatin ? (
                  <>
                    <Link to="/" className="text-decoration-none text-white">
                      <span
                        data-bs-target="#navbarSupportedContent"
                        data-bs-toggle="collapse"
                        onClick={() => loogout()}
                      >
                        Logout
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/" className="text-decoration-none  text-white ">
                      <span
                        data-bs-target="#navbarSupportedContent"
                        data-bs-toggle="collapse"
                      >
                        Login
                      </span>
                    </Link>
                  </>
                )}
              </li>
              {!isAuthenticatin && (
                <li className="nav-item">
                  <Link to="Register" className="nav-link">
                    Register
                  </Link>
                </li>
              )}
            </ul>
            <div>
              <div className="  me-lg-5 me-0 ">
                <div
                  className="btn-group toggle"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    defaultChecked=""
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio1"
                  >
                    Eng
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio2"
                  >
                    Kor
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
