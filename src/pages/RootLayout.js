import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/MainNavigation";

const RootLayout = () => {
  return (
    <div>
      <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>  
    </div>
    <Footer />
    </div>
  );
};

export default RootLayout;
