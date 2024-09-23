import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const navbar = () => {
    return (
        <>
            <div className="nav_bar">
            <div className="logo">WDM</div>
            <div className="search">
                <div className="left"> <FaSearch/> search here</div>
                <div className="right"><IoFilter/> Filters</div>
            </div>
            <div className="seller">Become a Seller</div>
            </div>
        </>
    )
}

export default navbar