import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";
import CustomPicker from "../components/ui/ColorPicker";
import Heading from "../components/layout/Heading";
import ShowIf from "../components/ShowIf";
import StoreButton from "../components/ui/StoreButton";
import { useScreenSize } from "../hooks/useScreenSize";
import { cartActions } from "../store/cart-slice";
import classes from "./Cart.module.css";
import "../general.css";



const Cart = () => {

    const screenSize = useScreenSize();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const items = cart.items;
    const totalQuantity = cart.totalQuantity;
    const totalAmount = cart.totalAmount;
    const shipping = cart.shipping;
    const changed = cart.changed;


    const [btnFontSize, setBtnFontSize] = useState(2.2);

    useEffect(() => {
        const setSizes = () => {
            if (screenSize === "default") {
                setBtnFontSize(1.8);
            } else if (screenSize === "xs") {
                setBtnFontSize(2.8);
            } else if (screenSize === "sm") {
                setBtnFontSize(3.2);
            } else if (screenSize === "md") {
                setBtnFontSize(3.4);
            } else if (screenSize === "lg") {
                setBtnFontSize(4.4);
            } else if (screenSize === "xl") {
                setBtnFontSize(5.2);
            } else if (screenSize === "xxl") {
                setBtnFontSize(6.4);
            }
        };

        setSizes();
    }, [screenSize]);


    const increaseItemQuantityHandler = (item) => {
        dispatch(cartActions.addItemToCart(item));
    }

    const decreaseItemQuantityHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    }


    return (
        <section>
            <div className="headingContainer">
                <Heading title="CART" />
            </div>
            <main>
                <ShowIf
                    condition={items.length}
                    render={() => (
                        <>
                            {items.map((item) => (
                                <div className={`${classes.container}`} key={item.cid}>
                                    <div className={`${classes.gridColumns} ${classes.itemContainer}`}>
                                        <div style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "100%"}}>
                                        <img className={classes.itemImage} src={item.image} alt={item.name} />
                                        </div>
                                        <div style={{ alignSelf: "center" }}>
                                            <div className={classes.itemHeader}>
                                                <h2 className={classes.itemName}>{item.name}</h2>
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                    <p className={classes.itemPrice}>Price: ${item.price * item.quantity}</p>
                                                    <p className={classes.itemPrice}>Quantity: {item.quantity}</p>
                                                    <div className={classes.itemButtons}>
                                                        <div onClick={() => increaseItemQuantityHandler(item)} className={classes.quantityButton}>
                                                            <FaPlus size={`${1}rem`} color="rgba(255, 71, 0, 1)" />
                                                        </div>
                                                        <div onClick={() => decreaseItemQuantityHandler(item.cid)} className={classes.quantityButton}>
                                                            <FaMinus size={`${1}rem`} color="rgba(255, 71, 0, 1)" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className={classes.itemDescription}>{item.description}</p>
                                            <div className={classes.pickerContainer}>
                                                <CustomPicker cid={item.cid} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <hr className={classes.horizontalLine} />
                                <div style={{marginRight: "15%",alignSelf: "flex-end"}}>
                                <p className={classes.subTotal}>Subtotal: ${totalAmount}</p>
                                </div>
                            </div>

                        </>
                    )}
                    renderElse={() => (
                        <h3 className={classes.message}>Your cart is empty</h3>
                    )}
                />
                <div className={classes.cartButton}>
                    <StoreButton 
                        to={!items.length ? "/products/all" : "/checkout"} 
                        title={!items.length ? "SHOP URRNZ" : "SHIPPING"} 
                        style={{ fontSize: `${btnFontSize}rem`, }}
                    />
                </div>
            </main>

        </section>
    );
};
export default Cart;