import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaGripLines } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import LogoHeader from "./Logo";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
    const location = useLocation();
    const store = useSelector(state => state.store);

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const curLocation = location.pathname;
    const pathHash = location.hash;
    const category = store.category;

    const handleMobileNavClick = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleNavLinkClick = () => {
        setIsMenuVisible(false);
    };

    if (
        (curLocation === "/" ||
        curLocation === "/genres" ||
        curLocation === "/cart" ||
        curLocation === "/contact" ||
        curLocation === `/products/${category}`) &&
        pathHash !== "#about" && 
        pathHash !== "#faqs"
    ) {window.scrollTo(0, 0)}

    return (
        <header className={`${classes.header} ${isMenuVisible ? classes.navOpen : ""}`}>
            <LogoHeader />
            <nav className={`${classes.mainNav} ${isMenuVisible ? classes.mobileNav : ""}`}>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            onClick={handleNavLinkClick}
                            className={({ isActive }) => isActive && curLocation === "/" ? classes.active : undefined}
                            end
                        >
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to="/#about"
                            onClick={handleNavLinkClick}
                            className={curLocation === "/" && pathHash === "#about" ? classes.active : undefined}>
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/#faqs"
                            onClick={handleNavLinkClick}
                            className={curLocation === "/" && pathHash === "#faqs" ? classes.active : undefined}>
                            <p>FAQ</p>
                        </Link>
                    </li>
                    <li>
                        <NavLink 
                            to="/genres" 
                            onClick={handleNavLinkClick} 
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Genres</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/products/${store.category}`}
                            onClick={handleNavLinkClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Gallery</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/cart" 
                            onClick={handleNavLinkClick} 
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Cart</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            onClick={handleNavLinkClick} 
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Contact</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <button className={classes.mobileNav} onClick={handleMobileNavClick}>
                <NavLink className={classes.iconMobileNav} name="menu-outline">
                    <FaGripLines size={`${4.4}rem`} color="rgba(255, 71, 0, 1)" />
                </NavLink>
                <NavLink className={classes.iconMobileNav} name="close-outline">
                    <FaGripLines size={`${4.4}rem`} color="rgba(255, 71, 0, 1)" />
                </NavLink>
            </button>
        </header>
    );
}

export default MainNavigation;
