import React, { useState } from "react";
import "./Login.css";
import email from "../Assets/Email.png";
import talk from "../Assets/KakaoTalk_logo 1.png";
import google from "../Assets/Google.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
import GoogleLogin from "react-google-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../Redux/connection/actions";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
function Login() {
  let [isSeePass, setSeePass] = useState(false);
  const dispatch = useDispatch();
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is mandatory")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Enter a valid email address"
      ),
    password: Yup.string()
      .required("Password is mandatory")
      .min(4, "Password must be at 4 char long")
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = async (data) => {
    dispatch(userLogin({ ...data, loginType: "email" }));
    resetField("password");
  };
  const onSuccess = async (res) => {
    dispatch(userLogin({ googleId: res.googleId, loginType: "google" }));
  };
  const googleFailure = (res) => {
    console.log("failure response ", res);
  };
  return (
    <div className="background_image">
      <div className="card card_responsive mt-6" style={{ margin: "auto" }}>
        <h4 className="mt-3 fw-bolder">Login</h4>
        <div className="card-body">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="d-flex justify-content-around">
                <input
                  className="form-control "
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />

                <div className="fs-3 input-group-icon">
                  <EmailIcon />
                </div>

                {/* <button type="search">Search</button> */}
              </div>
              {errors.email && (
                <>
                  &nbsp;<p style={{ color: "red" }}>{errors.email.message}</p>
                </>
              )}
              <hr className="hr_color" />
              <div className="d-flex justify-content-between mt-3">
                <input
                  className="form-control "
                  type={isSeePass ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <div
                  onClick={() => {
                    setSeePass(!isSeePass);
                  }}
                  className="fs-3 input-group-icon"
                >
                  {isSeePass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
              {errors.password && (
                <>
                  {" "}
                  &nbsp;
                  <p style={{ color: "red" }}>{errors.password.message}</p>
                </>
              )}
            </div>
            <button
              className="btn btn_same py-2 mt-5 w-100 fw-bolder lh-lg text-white"
              type="submit"
              
            >
              Login
            </button>
          </form>

          <div className="text-end forgit">
            <Link to="/Verify" className="fw-bold text-dark">
              Forgot your Password?
            </Link>
          </div>

          <div className="mt-3">
            <Divider>or</Divider>
          </div>

          <div
            className="text-start d-flex align-items-center mt-4 btn btn_same "
            style={{ cursor: "pointer" }}
          >
            <GoogleLogin
              clientId={`${process.env.REACT_APP_CLIENT_ID}`}
              buttonText="Signin with Google"
              onSuccess={onSuccess}
              onFailure={googleFailure}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <GoogleLoginButton
                  text="Sign In with Google"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  apiKey="AIzaSyDX58mu1jv1mrKrfXMUgoZ4kNiAogmEUvg"
                />
              )}
            />
          </div>

          <h6 className="rre mt-4">
            Don’t have an account?
            <Link to="/Register" className="color-text">
              &nbsp; Register
            </Link>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Login;
