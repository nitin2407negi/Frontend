import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { SiTheconversation } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiTwotoneProfile } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <>
     <div className="side_bar_content">
      <div className="top_content">
        <div className="item"> <FaHome className='icons'/>Home</div>
        <div className="item"><IoIosNotifications className='icons'/>Notification</div>
        <div className="item"><CiShoppingCart className='icons'/>Shop</div>
        <div className="item"><SiTheconversation className='icons'/>Conversation</div>
        <div className="item"><FaWallet className='icons'/>Wallet</div>
        <div className="item"><MdOutlineSubscriptions className='icons'/>Subscription</div>
        <div className="item"><AiTwotoneProfile className='icons'/>My Profile</div>
      </div>
      <div className="bottom_content">
        <div className="item"><CiLogout className='icons'/>LogOut</div></div>
     </div>
    </>
  )
}

export default Sidebar