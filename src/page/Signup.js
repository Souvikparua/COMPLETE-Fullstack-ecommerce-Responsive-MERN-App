import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import {toast} from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    address: "",
    phone: ""
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(loginRedux(data));
        toast.success("Registration successful!");
        setTimeout(() => {
          navigate("/login"); 
        }, 1000);
      } else {
        toast.error("Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again."); 
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignupImage} className="w-full" alt="Signup" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            required
          />
          <label htmlFor="firstname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            required
          />
          <label htmlFor="firstname">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            required
          />
          <label htmlFor="firstname">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            required
          />
          <label htmlFor="firstname">Create Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            required
          />
          <label htmlFor="firstname">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            required
          />
          <label htmlFor="firstname">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleOnChange}
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            required
          />
          {/* Similar input fields for other form data */}
          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
