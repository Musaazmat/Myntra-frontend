import { useState } from "react";
import { BsCalendarHeartFill, BsFillPersonFill } from "react-icons/bs";
import { CiHeart, CiSquarePlus } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const Header = () => {
    const [menuOpen , setMenuOpen] = useState(false);
    const bag = useSelector((store) => store.bag);
    // console.log("contain bag :" , bag);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    // console.log("clicked" , toggleMenu);

    const installApp = () =>{
        Swal.fire({
            title: "Install App",
            showCancelButton: true,
            confirmButtonText: "Install",
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Installed", "", "success");
            } 
            });
    }

    return (
    <header>
        <div className="hamburger-display" onClick = {toggleMenu}>
            {menuOpen ? <RxCross2 size={25} className="cross_icon"/>: <GiHamburgerMenu size={25}/> }
        </div>

        <div className="res_logoContainer"><h3>
        <Link to="/">Myntra</Link> </h3>
        </div>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
        </div>

        <div className={`side-navbar ${menuOpen ? 'open' : ''}`}>
        <nav className="nav_bar" >
            <a href="#"  className=" dropdown-toggle">Men</a>
            <a href="#"  className=" dropdown-toggle">Women</a>
            <a href="#"  className=" dropdown-toggle">Kids</a>
            <a href="#"  className=" dropdown-toggle">Home & Living</a>
            <a href="#"  className=" dropdown-toggle">Beauty</a>
            <a href="#"  className=" dropdown-toggle">Studio <sup>New</sup></a>

        </nav>
        </div>

        <div className="search_bar">
            <span className="input-group-text " id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
            </svg></span>
            <input type="text" className="form-control  search_input" placeholder="Search for products, brands and more" aria-label="Input group example" aria-describedby="basic-addon1"/>        
        </div>


        <div className="action_bar">

            <div className="action_container">
            <BsFillPersonFill  />
                <span className="action_Name">Profile</span>
            </div>

            <div className="action_container">
            <BsCalendarHeartFill />
                <span className="action_Name">Wishlist</span>
            </div>

            <Link className="action_container" to="/bag">
            <HiOutlineShoppingBag />
                <span className="action_Name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>




        <div className="res_action">

                <div className="action_container">
                <CiSquarePlus size={25}  onClick={installApp} />
                </div>

                <div className="action_container">
                <GoSearch size={25}  />
                </div>

                <div className="action_container">
                <CiHeart  size={25} />
                </div>
                
                <Link className="action_container" to="/bag">
                <HiOutlineShoppingBag size={25} />
                    <span className="bag-item-count">{bag.length}</span>
                </Link>
        </div>




        
    </header>
    )
}
export default Header;