import { Outlet } from "react-router-dom";

import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/MainNavigation";


const RootLayout = () => {
    return (
        <div>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;