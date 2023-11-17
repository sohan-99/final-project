/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const {name, image, price, recipe}= item;
    const handleAddToCart = food =>{
        console.log(food);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className="text-center">Price : {price}</p>
                    <button onClick={()=> handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-orange-400 mt-4 align-middle">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;