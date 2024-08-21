import React from 'react';
import { BsBagPlus } from "react-icons/bs";
import { Link } from "react-router-dom";



function BagEmpty() {
  return (
        <div className='empty_bag'>
        <Link to="/">Your Bag is Empty
        <span><BsBagPlus style={{
          color:'black',
          fontSize:'18px',
          cursor:'pointer',
        }}/></span></Link>
        </div>
  )
}

export default BagEmpty