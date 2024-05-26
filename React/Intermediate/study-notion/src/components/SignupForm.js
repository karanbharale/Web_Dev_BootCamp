import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))

    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("printing Final account data ");
        console.log(finalData);

        navigate("/dashboard");

    }


    return (
        <div>
            {/* student-Instructor tab */}
            <div
                className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max' id='switchButton'>

                <button
                    className={`${accountType === "student"
                        ? "bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full transition-all duration-200"
                        : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}`}
                    onClick={() => setAccountType("student")}>
                    Student
                </button>

                <button
                    className={`${accountType === "instructor"
                        ? "bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full transition-all duration-200"
                        : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}`}
                    onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} class="w-full flex flex-col gap-y-4">
                {/* first name and lastName */}
                <div className='flex gap-x-4'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>First Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter first name"
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Last Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter last name"
                            value={formData.lastName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>
                {/* email Add */}
                <div>
                    <label className='w-full'>
                        <p className='text-[0.875rem] leading-[1.375rem] text-richblack-5 mb-1'>Email Address <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter email address "
                            value={formData.email}
                            className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full'
                        />
                    </label>
                </div>


                {/* createPassword and Confirm Password */}
                <div className='w-full flex gap-x-4'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className='w-full p-[12px] pr-10 bg-richblack-800 rounded-[0.5rem] text-richblack-5'
                        />
                        <span
                            className='absolute right-3 top-[38px] z-[10] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className='w-full p-[12px] pr-10 bg-richblack-800 rounded-[0.5rem] text-richblack-5'
                        />
                        <span
                            className='absolute right-3 top-[38px] z-[10] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className=' bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900'>
                    Create Account
                </button>
            </form>

        </div>
    )
}

export default SignupForm
