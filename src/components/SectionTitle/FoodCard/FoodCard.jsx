/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const {name, image, price, recipe}= item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;