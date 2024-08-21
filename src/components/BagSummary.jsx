import React from 'react';
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';



function BagSummary() {
    const bagItemIds = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item =>{
    const itemIndex = bagItemIds.indexOf(item.id);
    return itemIndex >= 0;
    });

    const CONVENIENCE_FEES = 99;
    let totalItem = bagItemIds.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    finalItems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;


    const handleFinalOrder = () =>{
        console.log("item has been placed")

        Swal.fire({
            // position: "left-bottom",
            icon: "success",
            title: "Your order has been Placed",
            showConfirmButton: false,
            timer: 1500,
            customClass:{
                popup:'my-swalpopup'
            }
            })
    }


    return (
        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹99</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order" onClick={handleFinalOrder}>
                <div className="css-xjhrni" >PLACE ORDER</div>
            </button>
        </div>
    )
}

export default BagSummary