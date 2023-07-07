import { useSelector, useDispatch } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa";
import Heading from "../components/layout/Heading";
import ShowIf from '../components/ShowIf';
import StoreButton from '../components/ui/StoreButton';
import { cartActions } from "../store/cart-slice";
import classes from "./Cart.module.css";
import "../general.css";
import CustomPicker from '../components/ui/ColorPicker';


const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const items = cart.items;
    const totalQuantity = cart.totalQuantity;
    const totalAmount = cart.totalAmount;
    const shipping = cart.shipping;
    const changed = cart.changed;


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
                                        <img className={classes.itemImage} src={item.image} alt={item.name} />
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
                                            <p style={{ fontSize: `${2.5}rem`, width: "65%", padding: `${1}rem`, marginBottom: `${2.5}rem` }}>{item.description}</p>
                                            <div style={{ width: "50%" }}>
                                                <CustomPicker cid={item.cid} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <hr className={classes.horizontalLine} />
                                <div style={{marginRight: "15%",alignSelf: "flex-end"}}>
                                <p style={{ fontSize: `${3.8}rem` }}>Subtotal: ${totalAmount}</p>
                                </div>
                            </div>

                        </>
                    )}
                    renderElse={() => (
                        <h3 className={classes.message}>Your cart is empty</h3>
                    )}
                />
                <div className={classes.cartButton}>
                    <StoreButton to={!items.length ? "/products/all" : "/shipping"} title={!items.length ? "SHOP URRNZ" : "SHIPPING"} style={{ fontSize: `${5}rem`, marginBottom: `${18.2}rem`, marginTop: `${9.6}rem` }} />
                </div>
            </main>
        </section>
    );
};
export default Cart;