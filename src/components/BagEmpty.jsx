import React from 'react';
import { BsBagPlus } from "react-icons/bs";
import { Link } from "react-router-dom";



function BagEmpty() {
  return (
        <div className='empty_bag'>
        <p >Your Bag is Empty</p>
        <Link to="/"><BsBagPlus style={{
          color:'black',
          fontSize:'20px',
          cursor:'pointer',
        }}/></Link>
        </div>
  )
}

export default BagEmpty