// import { FormControlLabel } from '@mui/material'
import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import "./Register.css";
import google from "../Assets/Google.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import GoogleLogin from "react-google-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrUserNew } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { registerUser } from "../../Redux/connection/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
function Register() {
  let [isSeePass, setSeePass] = useState(false);
  let [isConfPass, setIsConfPass] = useState(false);

  const formSchema = Yup.object().shape({
    nickname: Yup.string().required("Nick name is mandatory"),
    fullName: Yup.string().required("Full name is mandatory"),
    phoneNumber: Yup.string().required("Phone No is mandatory"),
    email: Yup.string()
      .required("Email is mandatory")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Enter a valid email address"
      ),
    password: Yup.string()
      .required("Password is mandatory")
      .min(4, "Password must be at 4 char long"),
    confirmPassword: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    reset,
    control,
    resetField,
    watch,
    formState: { errors },
  } = useForm(formOptions);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(registerUser({ ...data, registerType: "email" }));
    resetField("fullName");
    resetField("email");
    resetField("password");
    resetField("confirmPassword");
  };
  const onSuccess = async (res) => {
    dispatch(
      registerUser({
        googleToken: res.tokenId,
        googleId: res.googleId,
        registerType: "google",
      })
    );
  };
  const googleFailure = (res) => {
    console.log("failure response ", res);
  };
  return (
    <div className="background_image">
      <div className="card card_responsive mt-5 " style={{ margin: "auto" }}>
        <h4 className="mt-3 fw-bolder">Register</h4>
        <div className="card-body">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="d-flex justify-content-between">
                <input
                  className="form-control"
                  type="text"
                  placeholder="ID"
                  {...register("id", { required: true })}
                />
                <div className="fs-3 input-group-icon">
                  <PersonRoundedIcon />
                </div>
                {/* <button type="submit2">Search</button> */}
              </div>

              {errors.id && (
                <>
                  &nbsp;<p style={{ color: "red" }}>{errors.id.message}</p>
                </>
              )}
              <hr className="hr_color" />
              <div className="d-flex justify-content-around">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nick Name"
                  {...register("nickname", { required: true })}
                />
                <div className="fs-3 input-group-icon">
                  <PermIdentityIcon />
                </div>
              </div>
              {errors.nickname && (
                <>
                  &nbsp;
                  <p style={{ color: "red" }}>{errors.nickname.message}</p>
                </>
              )}
              <hr className="hr_color" />
              <div className="d-flex justify-content-around">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", { required: true })}
                />
                <div className="fs-3 input-group-icon">
                  <PermIdentityIcon />
                </div>
              </div>
              {errors.fullName && (
                <>
                  &nbsp;
                  <p style={{ color: "red" }}>{errors.fullName.message}</p>
                </>
              )}
              <hr className="hr_color" />
              <div className="d-flex justify-content-around">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <div className="fs-3 input-group-icon">
                  <EmailIcon />
                </div>
              </div>
              {errors.email && (
                <>
                  &nbsp;<p style={{ color: "red" }}>{errors.email.message}</p>
                </>
              )}
              <hr className="hr_color" />
              <div className="d-flex justify-content-between ">
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={formSchema.phoneNumber}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="KR"
                      type="text"
                      placeholder="Enter phone number"
                      value={value}
                      onChange={onChange}
                      error={!!errors.phoneNumber}
                      inputProps={{ id: "phoneNumber" }}
                    />
                  )}
                />
                <div className="fs-3 input-group-icon">
                  <PhoneIcon />
                </div>
              </div>
              {errors.phoneNumber && (
                <>
                  &nbsp;
                  <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
                </>
              )}
            </div>
            <hr className="hr_color" />
            <div className="d-flex justify-content-between">
              <input
                className="form-control"
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
                &nbsp;<p style={{ color: "red" }}>{errors.password.message}</p>
              </>
            )}
            <hr className="hr_color" />
            <div className="d-flex justify-content-between">
              <input
                className="form-control"
                type={isConfPass ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: true })}
              />
              <div
                onClick={() => {
                  setIsConfPass(!isConfPass);
                }}
                className="fs-3 input-group-icon"
              >
                {isConfPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
            {errors.confirmPassword && (
              <>
                {" "}
                &nbsp;
                <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
              </>
            )}

            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree to the Terms and Conditions"
            />
            <button
              className="btn btn_same py-2 mt-3 fw-bolder lh-lg w-100 text-white"
              type="submit"
            >
              Register
            </button>
          </form>
          <div
            className="text-start d-flex align-items-center mt-4 btn btn_same "
            style={{ cursor: "pointer" }}
          >
            <GoogleLogin
              clientId={`${process.env.REACT_APP_CLIENT_ID}`}
              buttonText="Signup with Google"
              onSuccess={onSuccess}
              onFailure={googleFailure}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <GoogleLoginButton
                  text="Sign Up with Google"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  apiKey="AIzaSyDX58mu1jv1mrKrfXMUgoZ4kNiAogmEUvg"
                />
              )}
            />
          </div>
          <div className="text-start">
            <div className="text-center">
              <h6 className="rre mt-4">
                Already have an account?{" "}
                <Link to="/Login" className="text-decoration-none color-text  ">
                  Login
                </Link>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
