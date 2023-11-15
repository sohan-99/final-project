/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuCover from "../../Share/MenuCover";
import MenuItem from "../../Share/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <MenuCover img={img} title={title}></MenuCover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {

                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;