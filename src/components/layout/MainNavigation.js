import React, { useEffect, useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import LogoHeader from "./Logo";
import { useScreenSize } from "../../hooks/useScreenSize";

import classes from "./MainNavigation.module.css";


function MainNavigation() {

    const screenSize = useScreenSize();
    const location = useLocation();
    const curLocation = location.pathname;
    const pathHash = location.hash;


    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [mobileNavBtnSize, setMobileNavBtnSize] = useState(0);
    const [isSticky, setIsSticky] = useState(false);


    useEffect(() => {
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
        setSizes();
    }, [screenSize,]);



    useEffect(() => {
        const sectionAboutEl = document.querySelector("#home");
        const observer = new IntersectionObserver((entries) => {
            const ent = entries[0];
            if (!ent.isIntersecting) {
                setIsSticky(true);
            }
            if (ent.isIntersecting) {
                setIsSticky(false);
            }
        }, { root: null, threshold: 0 })
        observer.observe(sectionAboutEl);
    }, []);



    const handleMobileNavClick = () => {
        setIsMenuVisible(!isMenuVisible);
    };



    return (
        <header
            className={`${isSticky ? classes.sticky : ""} ${classes.header} ${isMenuVisible ? `${classes.navOpen}` : ""} `}>
            <LogoHeader />
            <nav
                className={`${classes.mainNav} ${isMenuVisible ? `${classes.mobileNav}` : ""}`}>
                <ul
                    className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive && curLocation === "/" ? classes.active : undefined}
                            end>
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to="/#about"
                            onClick={() => isMenuVisible && handleMobileNavClick()}
                            className={curLocation === "/" && pathHash === "#about" ? classes.active : undefined}>
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/#faqs"
                            onClick={() => isMenuVisible && handleMobileNavClick()}
                            className={curLocation === "/" && pathHash === "#faqs" ? classes.active : undefined}>
                            <p>FAQ</p>
                        </Link>
                    </li>
                    <li>
                        <NavLink
                            to="/genres"
                            onClick={isMenuVisible && handleMobileNavClick}
                            className={({ isActive }) => isActive ? classes.active : undefined}>
                            <p>Genres</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products/all"
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
                <NavLink
                    className={classes.iconMobileNav}
                    name="menu-outline">
                    <FaGripLines
                        size={`${mobileNavBtnSize}rem`}
                        color="rgba(255, 71, 0, 1)" />
                </NavLink>
                <NavLink
                    className={classes.iconMobileNav}
                    name="close-outline">
                    <FaGripLines
                        size={`${mobileNavBtnSize}rem`}
                        color="rgba(255, 71, 0, 1)"
                    />
                </NavLink>
            </button>
        </header>
    );
};

export default MainNavigation;
