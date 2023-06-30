import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import LogoHeader from "./LogoHeader";
import { useClosestMedia } from "../../hooks/useClosestMedia";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import classes from './MainNavigation.module.css';
import { useScreenSize } from "../../hooks/useScreenSize";

function MainNavigation() {

    const screenSize = useScreenSize();

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [logoSize, setLogoSize] = useState(0);
    const [mobileNavBtnSize, setMobileNavBtnSize] = useState(0);


    useEffect(() => {
        if (screenSize === "default") {
            setLogoSize(1.4);
            setMobileNavBtnSize(2.2);
        } else if (screenSize === "xs") {
            setLogoSize(2.2);
            setMobileNavBtnSize(3.4);
        } else if (screenSize === "sm") {
            setLogoSize(2.2);
            setMobileNavBtnSize(4.8);
        } else if (screenSize === "md") {
            setLogoSize(3.4);
            setMobileNavBtnSize(5.5);
        } else if (screenSize === "lg") {
            setLogoSize(4.8);
        } else if (screenSize === "xl") {
            setLogoSize(5.5);
        } else if (screenSize === "xxl") {
            setLogoSize(6.5);
        }
    }, [screenSize]);


    const handleMobileNavClick = () => {
        setIsMenuVisible(!isMenuVisible);
    };


    return (
        <header className={`${classes.header} ${isMenuVisible ? `${classes.navOpen}` : ""}`}>
            <div style={{ height: `${logoSize}rem` }}>
                <LogoHeader />
            </div>
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
