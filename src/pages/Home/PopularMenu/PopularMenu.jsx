import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Share/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setmenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const popularitems = data.filter(item => item.category === 'popular');
                setmenu(popularitems)
            })
    })
    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {

                menu.map(item=> <MenuItem
                 key={item._id}
                 item ={item}
                  ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 align-middle">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;