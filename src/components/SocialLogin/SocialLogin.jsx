import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { googleSignIn} = useAuth();
// console.log(googleSignIn);
    const handleGoogleSignIn = () =>{
        
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
    }
    return (
        <div className="px-8">
            <div className="divider"></div>
            <div>
                <button className="btn">
                    <FaGoogle onClick={handleGoogleSignIn} className="mr-4"></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;