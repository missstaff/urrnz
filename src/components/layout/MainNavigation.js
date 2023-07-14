import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import LogoHeader from "./Logo";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
    const location = useLocation();

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const curLocation = location.pathname;
    const pathHash = location.hash;

    const handleMobileNavClick = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleNavLinkClick = () => {
        setIsMenuVisible(false);
    };

    if (
        (curLocation === "/" ||
        curLocation === "/categories" ||
        curLocation === "/cart" ||
        curLocation === "/contact" ||
        curLocation === "/gallery") &&
        pathHash !== "#about" && 
        pathHash !== "#faqs"
    ) {window.scrollTo(0, 0);}

    return (
        <header className={`${classes.header} ${isMenuVisible ? classes.navOpen : ""}`}>
            <LogoHeader />
            <nav className={`${classes.mainNav} ${isMenuVisible ? classes.mobileNav : ""}`}>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            onClick={handleNavLinkClick}
                            isActive={(match, location) => match && curLocation === "/"}
                            end
                        >
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to="/#about"
                            onClick={handleNavLinkClick}
                            isActive={() => curLocation === "/" && pathHash === "#about"}
                        >
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/#faqs"
                            onClick={handleNavLinkClick}
                            isActive={() => curLocation === "/" && pathHash === "#faqs"}
                        >
                            <p>FAQ</p>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/genres" onClick={handleNavLinkClick} isActive={() => curLocation === "/genres"}>
                            <p>Genres</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products/all"
                            onClick={handleNavLinkClick}
                            isActive={() => curLocation.startsWith("/products")}
                        >
                            <p>Gallery</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" onClick={handleNavLinkClick} isActive={() => curLocation === "/cart"}>
                            <p>Cart</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={handleNavLinkClick} isActive={() => curLocation === "/contact"}>
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
