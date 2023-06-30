import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

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
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to="/#about"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/#faqs"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>FAQ</p>
                        </Link>
                    </li>
                    <li>
                        <NavLink
                            to="/categories"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Categories</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Gallery</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cart"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Cart</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Contact</p>
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
