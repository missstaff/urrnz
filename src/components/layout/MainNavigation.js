import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import LogoHeader from "./Logo";
import { useScreenSize } from "../../hooks/useScreenSize";

import classes from './MainNavigation.module.css';



function MainNavigation() {

    const screenSize = useScreenSize();

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [mobileNavBtnSize, setMobileNavBtnSize] = useState(0);


    useEffect(() => {
        setSizes();
    }, [screenSize]);


    const setSizes = () => {
        if (screenSize === "default") {
            setMobileNavBtnSize(2.2);
        } else if (screenSize === "xs") {
            setMobileNavBtnSize(3.4);
        } else if (screenSize === "sm") {
            setMobileNavBtnSize(4.8);
        } else if (screenSize === "md") {
            setMobileNavBtnSize(5.5);
        }
    };


    const handleMobileNavClick = () => {
        setIsMenuVisible(!isMenuVisible);
    };


    return (
        <header className={`${classes.header} ${isMenuVisible ? `${classes.navOpen}` : ""}`}>
            <LogoHeader />
            <nav className={`${classes.mainNav} ${isMenuVisible ? `${classes.mobileNav}` : ""}`}>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/categories"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Categories
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cart"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </nav>


            <button className={classes.mobileNav} onClick={handleMobileNavClick}>
                <NavLink className={classes.iconMobileNav} name="menu-outline"><FaGripLines size={`${mobileNavBtnSize}rem`} color="#cf711f" /></NavLink>
                <NavLink className={classes.iconMobileNav} name="close-outline"><FaGripLines size={`${mobileNavBtnSize}rem`} color="#cf711f" /></NavLink>
            </button>
        </header>
    );
};

export default MainNavigation;
