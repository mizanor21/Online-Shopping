import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaShoppingCart, FaSignOutAlt, } from "react-icons/fa";
import profile from '../../../assets/profile.png'

import logo from '../../../assets/logo/logo.png'
import women from '../../../assets/women-D-mm-23012023.webp'
import men from '../../../assets/men-D-mm-23012023_7.webp'
import kids from '../../../assets/kids-Desktop-26012023_3.webp'
import wedding from '../../../assets/wedding.webp'
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(result => {
                alert('Successfully log out')
            })
    }
    const btnAddToFavourite = () => {
        console.log('clicked!')
    }
    const btnAddToCart = () => {

    }
    const navItems = <>
        <li tabIndex={0}>
            <Link to={''} className="justify-between font-bold">
                Men

            </Link>
            <ul className="p-2 bg-white lg:w-[780px]">
                <div className="block md:flex  p-5 ">
                    <div className='md:border-r-2 pr-4'>
                        <li><Link to={'/panjabi'}>Panjabi</Link></li>
                        <li><Link to={''}>Panjabi pajama</Link></li>
                        <li><Link to={''}>Shirt</Link></li>
                        <li><Link to={''}>T-shirt</Link></li>
                        <li><Link to={''}>Trouser</Link></li>

                    </div>
                    <div className="md:ml-4">
                        <li><Link to={''}>Shoes</Link></li>
                        <li><Link to={''}>Tupi</Link></li>
                        <li><Link to={''}>Masks</Link></li>
                        <li><Link to={''}>Winter wear</Link></li>
                    </div>
                    <img className='ml-10 hidden md:block' src={men} alt="" />
                </div>
            </ul>
        </li>
        <li tabIndex={0}>
            <Link to={''} className="justify-between font-bold">
                Women

            </Link>
            <ul className="p-2 bg-white lg:w-[620px]">
                <div className="flex bg-white p-5">
                    <div className='md:border-r-2 pr-4'>
                        <li><Link to={'/saree'}>Saree</Link></li>
                        <li><Link to={''}>Shalwar kameez</Link></li>
                        <li><Link to={''}>Kurta</Link></li>
                        <li><Link to={''}>TOPS</Link></li>
                        <li><Link to={''}>Scarves</Link></li>
                        <li><Link to={''}>Nightwear</Link></li>
                    </div>
                    <img className='ml-10 hidden md:block' src={women} alt="" />
                </div>
            </ul>
        </li>
        <li tabIndex={0}>
            <Link to={''} className="justify-between font-bold">
                Kids

            </Link>
            <ul className="p-2 bg-white lg:w-[680px]">
                <div className="flex bg-white p-5">
                    <div className='md:border-r-2 pr-4'>
                        <li><Link to={''}>Kids partyware</Link></li>
                        <li><Link to={''}>Newborn boys(0-1.5y)</Link></li>
                        <li><Link to={''}>Newborn girls(0-1.5y)</Link></li>
                        <li><Link to={''}>Girls(8-15y)</Link></li>
                        <li><Link to={''}>Boys(8-15y)</Link></li>
                        <li><Link to={''}>Shoes</Link></li>
                    </div>
                    <img className='ml-10 hidden md:block' src={kids} alt="" />
                </div>
            </ul>
        </li>
        <li tabIndex={0}>
            <Link to={''} className="justify-between font-bold">
                Wedding

            </Link>
            <ul className="p-2 bg-white lg:w-[600px]">
                <div className="flex bg-white p-5">
                    <div className='md:border-r-2 pr-4'>
                        <li><Link to={''}>Men</Link></li>
                        <li><Link to={''}>Women</Link></li>
                        <li><Link to={''}>Jewellery</Link></li>
                        <li><Link to={''}>Home Decor</Link></li>
                    </div>
                    <img className='ml-10 hidden md:block' src={wedding} alt="" />
                </div>
            </ul>
        </li>
        <li><Link to={''} className="justify-between font-bold">Falgun 23</Link></li>
        {
            // user?.uid &&
            <li><Link to={'/dashboard'} className="justify-between font-bold">Dashboard</Link></li>
        }
    </>
    return (
        <div className='shadow-2xl sticky top-0 h-20 flex flex-row justify-center items-center bg-white'>
            <div className=" container mx-auto navbar text-md font-serif">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box uppercase">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="w-40">
                        <img src={logo} className='hover:animate-bounce' alt="logo not found" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 uppercase">
                        {navItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator text-2xl">
                                <FaRegHeart />
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator text-2xl">
                                <FaShoppingCart />
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='M' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div> */}
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} alt='M' /> :
                                                <img src={profile} alt='M' />

                                        }

                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><Link onClick={handleSignOut} className='' to={'/login'}>Sign Out <FaSignOutAlt /></Link></li>
                                </ul>
                            </div>
                            :
                            <Link className='uppercase text-lg' to={'/login'}>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;