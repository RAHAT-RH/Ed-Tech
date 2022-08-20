import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
   const { _id, name, title, hour } = product;
   const navigate = useNavigate();

   const redirectToPurchase = (id) => {
      navigate(`/purchase/${id}`);
   };
   return (
      <div className="pt-24 px-3">
         {/* <div className=" h-64 bg-cover bg-no-repeat bg-center rounded-t-lg bg-[#ffffff] overflow-hidden relative">
            <img
               src={image}
               alt=""
               className="item-thumbnail w-full h-full object-cover rounded-t-lg transition-all duration-500"
            />
            <span className="absolute top-0 right-0 text-sm bg-primary-content text-black py-1 px-2">
               Available: <strong>{available}</strong>
            </span>
         </div>
         <div className="p-4  text-black rounded-b-lg text-left">
            <h3 className="text-lg md:text-lg">{name}</h3>
            <h2 className="text-xl md:text-xl py-2">${price}</h2>

            <div className="flex flex-col items-center justify-between border-t border-slate-200 pt-2 text-slate-500 text-md">
               <h4>Minimum Order: {minimum_order}</h4>
               <button
                  onClick={() => redirectToPurchase(_id)}
                  className="bg-secondary hover:bg-secondary-focus py-2 px-5 capitalize text-white  rounded-sm mt-2 text-md font-bold"
               >
                  Place order
               </button>
            </div>
         </div> */}

         <div className="container mx-auto" style={{ maxWidth: "1100px" }}>
            
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <Link to="" href="#">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                  </Link>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{name}</p>
                  <Link to="" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                     <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </Link>
            </div>
            
            

               {/* <div className="flex flex-col justify-center items-center gap-2 bg-base-200 p-5 rounded-md">
                  <BiSupport className="text-primary text-4xl"></BiSupport>
                  <h2 className="text-lg">24/7 Support</h2>
                  <p className="text-slate-600">
                     We are 24/7 available if you have any query.
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center gap-2 bg-base-200 p-5 rounded-md">
                  <RiShoppingCartLine className="text-primary text-4xl"></RiShoppingCartLine>
                  <h2 className="text-lg">Custom Quantity?</h2>
                  <p className="text-slate-600">
                     Contact us now if you have any custom quantity.
                  </p>
               </div> */}
            
         </div>
      </div>

   );
};

export default Product;
