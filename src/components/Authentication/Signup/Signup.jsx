import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import google from '../../../assets/icons/google.svg'
import facebook from '../../../assets/icons/facebook.svg'
import twitter from '../../../assets/icons/twitter.svg'
import { AuthContext } from '../../../context/AuthProvider';

const Signup = () => {
    const { createUser, signInGoogle, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('')
    const handleSignup = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data?.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.log(err))
                alert('Successfully Create an Account.')
                // console.log(user)
            })
            .catch(error => {
                setSignupError(error)
                alert(signupError)
            })
    }
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                alert('Successfully login')
            })
            .catch(error => {
                console.log(error)
            })
        console.log('clicked')
    }
    return (
        <div className='flex justify-center my-32'>
            <div className="border shadow-xl p-10 rounded-xl">
                <h2 className='text-4xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Name is required' })} placeholder="Email" className="input input-bordered w-full" />
                        {errors.name && <small className='text-red-600 mt-1'>{errors.name?.message}</small>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Valid email provide' })} placeholder="Email" className="input input-bordered w-full" />
                        {errors.email && <small className='text-red-600 mt-1'>{errors.email?.message}</small>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",
                            {
                                required: "password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!#$%&? "])/, message: 'Must be one uppercase and special character include' }
                            },)} placeholder="password" className="input input-bordered w-full" />
                        {errors.password && <small className='text-red-600 mt-1'>{errors.password?.message}</small>}
                        <label className="label">
                            <span className="label-text">Forgot Password?</span>
                        </label>
                    </div>
                    <button className='btn px-10 my-5 w-full' type='submit'>Sign Up</button>
                </form>
                <label className="label">
                    <span className="label-text">Already have an account? <Link to={'/login'}>login</Link></span>
                </label>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <div className="flex justify-center gap-5">
                    <img onClick={handleGoogleSignIn} title='Google Sign in' className='saturate-0 hover:saturate-100 w-9 hover:cursor-pointer' src={google} alt="" />
                    <img title='This feature coming soon' className='saturate-0 hover:saturate-100 w-9' src={twitter} alt="" />
                    <img title='This feature coming soon' className='saturate-0 hover:saturate-100 w-9' src={facebook} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Signup;