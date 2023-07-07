import { useSelector, useDispatch } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa";
import Heading from "../components/layout/Heading";
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
                {items.map((item) => (
                    <div className={` ${classes.container}`} key={item.cid}>
                        <div className={` ${classes.gridColumns}`}>

                            <img className={classes.itemImage} src={item.image} alt={item.name} />

                            <div style={{ alignSelf: "center" }}>
                                <div className={classes.itemHeader}>
                                    <h2 className={classes.itemName}>{item.name}</h2>
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                        <p className={classes.itemPrice}>Price ${item.price * item.quantity}</p>
                                        <p className={classes.itemPrice}>Qty: {item.quantity}</p>
                                        <div className={classes.itemButtons} >
                                            <div onClick={() => increaseItemQuantityHandler(item)} className={classes.quantityButton}>
                                                <FaPlus size={`${1}rem`} color="rgba(255, 71, 0, 1)" />
                                            </div>
                                            <div onClick={() => decreaseItemQuantityHandler(item.cid)} className={classes.quantityButton}>
                                                <FaMinus size={`${1}rem`} color="rgba(255, 71, 0, 1)" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <p style={{fontSize: `${2.5}rem`, width: "65%", padding: `${1}rem`, marginBottom: `${2.5}rem`}}>{item.description}</p>

                                <div style={{ width: "50%",}}>
                                    <CustomPicker />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    );
};

export default Cart;