import { FaSearch } from "react-icons/fa";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

export default function  Nav(){
    const [isOpen, setIsOpen] = useState(false)
    return(
       <article>
        <div className="sticky z-50 top-0 left-0 flex flex-row bg-white  items-center gap-x-44 lg:gap-x-28 lg:mx-24 lg:border lg:border-[#F1A067] border border-[#001DA0] h-28 mx-6 lg:mt-4 mt-5 lg:p-0 p-2.5 shadow shadow-[#F1A067] lg:shadow-none lg:rounded-full rounded-full">
            <div>
                <img src="/Yemac-Fabric-Logo.png" alt="Yemac-Fabric logo" className="w-52 lg:w-62 h-28"/>
            </div>

            <div className="border hidden lg:block border-[#F1A067] shadow shadow-[#F1A067] rounded-full uppercase text-[#001DA0]">
                <ul className="flex flex-row gap-x-6 p-4 font-bold ">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Collections</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>
            </div>

            <div className="  flex-row gap-x-16 text-[#F1A067] text-2xl items-center  hidden lg:flex">

                <FaSearch />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" fill="currentColor" className="bi bi-heart-fill  " viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>
                < BsFillHandbagFill/>
            </div>

            <div onClick={()=> setIsOpen(true)}>
                < RiMenu3Fill className="text-3xl text-[#001DA0] lg:hidden block"/>
            </div>
           
        </div>

         <div onClick={()=> setIsOpen(false)} className={`fixed  z-50 left-0 top-0 bottom-0 w-72 bg-white transition-transform duration-300 border border-[#001DA0] shadow shadow-[#001DA0] ${isOpen ? "translate-x-0 visible" : "-translate-x-full invisible"}`}>

            <div onClick={()=> setIsOpen(false)} className="absolute top-6 text-[#001DA0]    flex flow-row gap-x-6 items-center"> 
             <div>
                <img src="/Yemac-Fabric-Logo.png" alt="Yemac-Fabric logo" className="w-52 lg:w-62 h-16"/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
            
            </div>
                 <div className="    mt-16   uppercase text-[#001DA0]">
                <ul className="flex flex-col gap-y-6 p-4  ">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Collections</li>
                    <li>About</li>
                    <li>Contact</li>

                </ul>
            </div>
            </div>
       </article> 
    )
}