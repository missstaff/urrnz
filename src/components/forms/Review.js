import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";";

import CheckoutButtons from "./CheckoutButtons";
import { handleSubmitOrder } from "../../utility/utils";
import { colorCodeToName } from "../../config/constants";


import classes from "./Review.module.css";

const Review = ({ activeStep, handleBack }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const customer = useSelector(state => state.customer);
    const orderTemplate = useSelector(state => state.store.orderTemplate);

    const shippingAddress = customer.shippingAddress;
    const shippingAddressee = customer.shippingAddress.addressee;
    const shippingAddress1 = customer.shippingAddress.address;
    const shippingAddress2 = customer.shippingAddress.address2;
    const shippingCity = customer.shippingAddress.city;
    const shippingState = customer.shippingAddress.stateCd;
    const shippingZipCode = customer.shippingAddress.postalCd;

    const billingAddress = customer.billingAddress;
    const billingAddressee = customer.billingAddress.addressee;
    const billingAddress1 = customer.billingAddress.address;
    const billingAddress2 = customer.billingAddress.address2;
    const billingCity = customer.billingAddress.city;
    const billingState = customer.billingAddress.stateCd;
    const billingZipCode = customer.billingAddress.postalCd;

    const cardDetails = customer.cardDetails;
    const cardLastFourDigits = cardDetails.cc_last_four;
    const cardMonth = cardDetails.month;
    const cardYear = cardDetails.year;

    const items = cart.items;
    const taxRate = cart.taxRate;
    const shipping = cart.shipping;
    const subTotal = cart.subTotal;
    const totalItems = cart.totalQuantity;


    const [cardType, setCardType] = useState("");

    let tax = taxRate * subTotal;
    tax = Math.round(tax * 100) / 100;
    const total = subTotal + tax + shipping.price;

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleSubmitOrder(
            cart,
            customer,
            dispatch,
            navigate,
            orderTemplate,
            total
        );
    };


    useEffect(() => {
        if (cardDetails.cc_number) {
            const firstDigit = cardDetails.cc_number.charAt(0);
            if (firstDigit === "4") {
                setCardType("Visa");
            } else if (firstDigit === "5") {
                setCardType("Mastercard");
            } else if (firstDigit === "6") {
                setCardType("Discover");
            } else if (firstDigit === "3") {
                setCardType("American Express");
            }
        }
    }, [cardDetails.cc_number]);


    return (
        <form onSubmit={handleSubmit}>
            <div className={`grid ${classes.container}`}>
                <div className="halfWidth">
                    <h4 className={classes.reviewHeading}>Shipping Address:</h4>
                    <div className={classes.column}>
                        <p className={classes.reviewText}>{shippingAddressee}</p>
                        <p className={classes.reviewText}>{shippingAddress1}</p>
                        <p className={classes.reviewText}>{shippingAddress2}</p>
                        <p className={classes.reviewText}>{shippingCity}, {shippingState} {shippingZipCode}</p>
                    </div>

                    <h4 className={classes.reviewHeading}>Billing Address:</h4>
                    <div className={classes.column}>
                        <p className={classes.reviewText}>{billingAddressee}</p>
                        <p className={classes.reviewText}>{billingAddress1}</p>
                        <p className={classes.reviewText}>{billingAddress2}</p>
                        <p className={classes.reviewText}>{billingCity}, {billingState} {billingZipCode}</p>
                    </div>
                </div>


                <div className="halfWidth">

                    <h4 className={classes.reviewHeading}>Order:</h4>
                    <div className={classes.column}>
                        {items.map(item => {
                            return (
                                <div 
                                    key={item.cid} 
                                    className={classes.row}>
                                    <p className={classes.reviewText}>
                                        {item.name.length > 17
                                            ? `${item.name.slice(0, 17)}...`
                                            : item.name}</p>
                                    <p className={classes.reviewText}>{colorCodeToName[item.color]}</p>
                                    <p className={classes.reviewText}>{item.quantity}x</p>
                                    <p className={classes.reviewText}>${item.totalPrice}</p>
                                </div>
                            );
                        })}
                    </div>

                    <h4 className={classes.reviewHeading}>Order Totals:</h4>
                    <div className={classes.column}>
                        <div className={classes.row}>
                            <p className={classes.reviewText}>Subtotal:</p>
                            <p className={classes.reviewText}>${subTotal}</p>
                        </div>
                        <div className={classes.row}>
                            <p className={classes.reviewText}>Shipping:</p>
                            <p className={classes.reviewText}>${shipping.price * totalItems}</p>
                        </div>

                        <div className={classes.row}>
                            <p className={classes.reviewText}>Tax:</p>
                            <p className={classes.reviewText}>${tax}</p>
                        </div>

                        <div className={classes.row}>
                            <p className={classes.reviewText}>Total:</p>
                            <p className={classes.reviewText}>${total}</p>
                        </div>
                    </div>

                    <h4 className={classes.reviewHeading}>Payment Method:</h4>
                    <div className={classes.column}>
                        <p className={classes.reviewText}>{cardType}</p>
                        <p className={classes.reviewText}>**** **** **** {cardLastFourDigits}</p>
                        <p className={classes.reviewText}>Exp: {cardMonth}/{cardYear}</p>
                    </div>

                </div>


            </div>

            <div classname={classes.checkoutBtnContainer}>
                <CheckoutButtons activeStep={activeStep} handleBack={handleBack} title="Submit" />
            </div>
            <hr />
        </form>
    );
};

export default Review;