import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";

const Register = () => {
  
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
      <h3 className="text-center text-3xl font-bold mt-5 leading-relaxed">
        Create an Account
      </h3>
      <p className="text-center font-semibold text-xl leading-relaxed">
        Please Register
      </p>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset ">
            {/* ---Email--- */}
            <label className="label">Email</label>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              className="input"
              placeholder="Email"
            />

            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            {/* ---Password--- */}
            <label className="label">Password</label>
            <input
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
              })}
              type="password"
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must have at least one uppercase,at least one
                lowercase, at least one digit and at least one special character
              </p>
            )}
            {/* <div>
            <a className="link link-hover">Forgot password?</a>
          </div> */}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already have an account? Please{" "}
            <Link className="text-blue-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
