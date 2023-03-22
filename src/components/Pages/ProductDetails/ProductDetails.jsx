import React from 'react';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = ({ btnAddToFavourite, btnAddToCart }) => {

    const { _id, img, price, p_title, stock_check, p_description, reviews } = useLoaderData()
    return (
        <div className='container mx-auto md:grid grid-cols-2 gap-10 my-10 lg:my-20'>
            <img className='w-[500px] mb-10 md:mb-0' src={img} alt={p_title} />
            <div className="lg:w-[75%]">
                <h2 className='text-4xl font-serif'>{p_title}</h2>
                <div className="flex justify-between my-5">
                    <h4 className='text-xl font-bold'>Tk {price}</h4>
                    <p className='bg-slate-500 text-white px-10 shadow-xl font-bold'>{stock_check}</p>
                </div>
                <div className="flex">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="text-xl my-10 grid grid-cols-1 gap-5">
                    <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Product Code
                        </div>
                        <div className="collapse-content">
                            <p>{_id}</p>
                        </div>
                    </div>
                    <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Product Description
                        </div>
                        <div className="collapse-content">
                            <p>{p_description}</p>
                        </div>
                    </div>
                    <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Reviews
                        </div>
                        <div className="collapse-content">
                            <p>{reviews}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className='btn btn-info mr-5'>Buy Now</button>
                    <button onClick={() => btnAddToFavourite()} className='btn btn-outline hover:bg-red-500 mr-5 text-2xl'><FaRegHeart /></button>
                    <button onClick={() => btnAddToCart()} className='btn btn-outline hover:bg-slate-700 text-2xl'><FaShoppingCart /></button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;