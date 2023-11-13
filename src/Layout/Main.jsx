import { Outlet } from "react-router-dom";
import Footer from "../pages/Share/Footer";
import Navber from "../pages/Share/Navber";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;