import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location=useLocation()
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log("after register:", data.photo[0]);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // 1.store the image in form data-->
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. Send the photo to store and get the url-->
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_HOST_KEY
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          console.log("after image upload", res.data.data.url);

          // update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated done");
              navigate(location.state)
            })
            .catch((err) => {
              console.log(err);
            });
        });
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
            {/* ---Name--- */}
            <label className="label">Name</label>
            <input
              {...register("name", {
                required: true,
              })}
              type="text"
              className="input"
              placeholder="Your Name"
            />

            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}

            {/* ---Photo--- */}
            <label className="label">YOUR Photo</label>
            <input
              {...register("photo", {
                required: true,
              })}
              type="file"
              className="file-input"
              placeholder="Your Photo"
            />

            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
            )}

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

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already have an account? Please{" "}
            <Link className="text-blue-600 font-bold"
            state={location.pathname}
            to="/login">
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
