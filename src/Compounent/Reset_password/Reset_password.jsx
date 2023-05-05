import React, { useEffect, useState } from "react";
import "./Reset_password.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { resetPassword, sendOTP } from "../../Redux/connection/actions";
import { useDispatch } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { VscUnverified } from "react-icons/vsc";
import { useParams } from "react-router-dom";
function Reset_password() {
  let [isSeePass, setSeePass] = useState(false);
  let [isConfPass, setIsConfPass] = useState(false);

  const formSchema = Yup.object().shape({
    resetCode: Yup.string()
      .required("OTP Code is required")
      .min(6, "OTP must be at 6 char long"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at 8 char long")
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character (!@#$*)"
      ),
    confirmPassword: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    resetField,
    watch,
    formState: { errors },
  } = useForm(formOptions);
  const dispatch = useDispatch();
  const { verifyEmail } = useParams();
  useEffect(() => {
    setValue("email", verifyEmail);
  }, [verifyEmail]);
  const sendOtpCode = () => {
    dispatch(sendOTP({ email: verifyEmail }));
  };
  const onSubmit = async (data) => {
    dispatch(
      resetPassword({ ...data, userId: sessionStorage.getItem("userId") })
    );
    resetField("password");
    resetField("confirmPassword");
  };
  return (
    <div className="my-5 ">
      <div
        className="card card_bodies card_responsive"
        style={{ margin: "auto" }}
      >
        <h4 className="mt-3 text-white">RESET PASSWORD</h4>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-around row">
              <div className="col-md-7 my-1">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Verification code"
                  readOnly
                  {...register("email", { required: true })}
                />
              </div>
              <div className="col-md-5">
                <span
                  className="btn btn_send_code"
                  onClick={() => sendOtpCode()}
                >
                  Send code{" "}
                </span>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <input
                className="form-control my-1"
                type="text"
                placeholder="Enter Verify Code"
                {...register("resetCode", { required: true })}
              />
              <div className="fs-3 input-group-icon1">
                <HelpOutlineRoundedIcon />
              </div>
            </div>
            {errors.resetCode && (
              <>
                &nbsp;<p style={{ color: "red" }}>{errors.resetCode.message}</p>
              </>
            )}

            <div className="d-flex justify-content-between">
              <input
                className="form-control my-1"
                type={isSeePass ? "text" : "password"}
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <div
                onClick={() => {
                  setSeePass(!isSeePass);
                }}
                className="fs-3 input-group-icon1"
              >
                {isSeePass ? (
                  <VisibilityRoundedIcon />
                ) : (
                  <VisibilityOffRoundedIcon />
                )}
              </div>
            </div>
            {errors.password && (
              <>
                &nbsp;<p style={{ color: "red" }}>{errors.password.message}</p>
              </>
            )}

            <div className="d-flex justify-content-between">
              <input
                className="form-control my-1"
                type={isConfPass ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: true })}
              />
              <div
                onClick={() => {
                  setIsConfPass(!isConfPass);
                }}
                className="fs-3 input-group-icon1"
              >
                {isConfPass ? (
                  <VisibilityRoundedIcon />
                ) : (
                  <VisibilityOffRoundedIcon />
                )}
              </div>
            </div>
            {errors.confirmPassword && (
              <>
                {" "}
                &nbsp;
                <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
              </>
            )}
            <button
              className="btn btn_same py-2 mt-3 w-100 text-white"
              type="submit"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset_password;
