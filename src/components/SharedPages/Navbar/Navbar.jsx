import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import women from '../../../assets/women-D-mm-23012023.webp'
import men from '../../../assets/men-D-mm-23012023_7.webp'
import kids from '../../../assets/kids-Desktop-26012023_3.webp'
import wedding from '../../../assets/wedding.webp'

const Navbar = () => {
    const navItems = <>
        <li tabIndex={0}>
            <Link to={''} className="justify-between font-bold">
                Men

            </Link>
            <ul className="p-2 bg-white lg:w-[780px]">
                <div className="block md:flex  p-5 ">
                    <div className='md:border-r-2 pr-4'>
                        <li><Link to={''}>Panjabi</Link></li>
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
                        <li><Link to={''}>Saree</Link></li>
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
    </>
    return (
        <div className='shadow-2xl sticky top-0 h-24 flex flex-row justify-center items-center bg-white'>
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
                <div className="navbar-end">
                    <Link to={''} className="btn btn-outline">Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;