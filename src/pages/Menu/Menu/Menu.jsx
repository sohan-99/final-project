import { Helmet } from "react-helmet";
import MenuCover from "../../Share/MenuCover";
import menuimg from '../../../assets/menu/menu-bg.png'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuCover img={menuimg} title={'our menu'}></MenuCover>
           
        </div>
    );
};

export default Menu;