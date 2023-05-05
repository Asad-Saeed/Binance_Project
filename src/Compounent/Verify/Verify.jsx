import { TextField } from "@mui/material";
import React from "react";
import "./Verify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { verifyEmail } from "../../Redux/connection/actions";
import { Link } from "react-router-dom";
function Verify() {
  const dispatch = useDispatch();
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is mandatory")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Enter a valid email address"
      ),
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
    console.log("data", data);
    dispatch(verifyEmail(data));
  };
  return (
    <div className="new_back my-md-5 my-2">
      <div className="card card_bodies card_responsive m-auto">
        <h4 className="mt-3 text-white">Email Verification </h4>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex justify-content-center">
            <div
              className="d-flex justify-content-around"
              style={{ width: "90%" }}
            >
              <input
                className="form-control my-3 border-bottom"
                type="email"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <>
                &nbsp;<p style={{ color: "red" }}>{errors.email.message}</p>
              </>
            )}
          </div>
          <div className="pb-5 px-3">
            <Link to="/" className="btn btn_same py-2 mt-3 w-100 text-white">
              Verify Eamil
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Verify;
