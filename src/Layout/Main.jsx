import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Share/Footer";
import Navber from "../pages/Share/Navber";


const Main = () => {
    const location = useLocation();
    // console.log(location);
    const nohederAndFooter = location.pathname.includes('login')
    return (
        <div>
           {nohederAndFooter ||  <Navber></Navber>}
            <Outlet></Outlet>
            {nohederAndFooter|| <Footer></Footer>}
        </div>
    );
};

export default Main;