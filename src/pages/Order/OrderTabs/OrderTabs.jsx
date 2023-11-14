/* eslint-disable react/prop-types */
import FoodCard from "../../../components/SectionTitle/FoodCard/FoodCard";


const OrderTabs = ({items}) => {
    return (
        <div>
              <div className='grid md:grid-cols-3 gap-10'>
                        {
                           items.map(item=> <FoodCard 
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>
        </div>
    );
};

export default OrderTabs;