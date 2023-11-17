/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
import useAuth from './../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';



const FoodCard = ({item}) => {
    const {name, image, price, recipe}= item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(user);

    const handleAddToCart = () =>{
        // console.log(food,user.email );
        if (user && user.email) {
            //send cart item to the database
           
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
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