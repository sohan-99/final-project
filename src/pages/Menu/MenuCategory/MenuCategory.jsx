/* eslint-disable react/prop-types */
import MenuCover from "../../Share/MenuCover";
import MenuItem from "../../Share/MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="pt-8">
             {title && <MenuCover img={img} title={title}></MenuCover>}
             <div className="grid md:grid-cols-2 gap-10 mt-16">
                {

                items.map(item=> <MenuItem
                 key={item._id}
                 item ={item}
                  ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;