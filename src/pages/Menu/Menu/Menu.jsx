import { Helmet } from "react-helmet";
import MenuCover from "../../Share/MenuCover";
import menuimg from '../../../assets/menu/menu-bg.png'
import desserstimg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuCover img={desserstimg} title={'our menu'}></MenuCover>
            {/* main cover */}
            <SectionTitle subheading={"Today's Offer"} heading={'Dont Miss'}>

            </SectionTitle>
            {/* offred */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts */}
            <MenuCategory
                items={desserts}
                title="Desserts"
                img={desserstimg}
            ></MenuCategory>
             <MenuCategory
                items={soup}
                title="soup"
                img={desserstimg}
            ></MenuCategory>
             <MenuCategory
                items={pizza}
                title="pizza"
                img={desserstimg}
            ></MenuCategory>
             <MenuCategory
                items={soup}
                title="soup"
                img={desserstimg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;