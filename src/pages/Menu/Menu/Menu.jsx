import { Helmet } from "react-helmet";
import MenuCover from "../../Share/MenuCover";
import menuimg from '../../../assets/menu/menu-bg.png'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuCover img={menuimg} title={'our menu'}></MenuCover>
            <PopularMenu></PopularMenu>
            <MenuCover img={menuimg} title={'our menu'}></MenuCover>
            <PopularMenu></PopularMenu>
            <MenuCover img={menuimg} title={'our menu'}></MenuCover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;