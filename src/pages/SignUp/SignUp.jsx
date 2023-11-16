/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const SignUp = () => {
    const {register,  handleSubmit, watch, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log(data)}
        // console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className="my-6">
            <div className="mt-14 mb-9 flex flex-col items-center justify-center">
                <div className="bg-stone-300 lg:max-w-lg w-[80%] md:w-[75%] lg:w-[85%]  p-8 rounded-lg shadow-lg">
                    <h1 className="lg:text-4xl md:text-2xl font-extrabold text-center text-blue-600 mb-6">
                        Signup
                    </h1>
                    <h4 className="text-center text-lg font-medium">Create a new account</h4>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4">
                        <div>
                            <label className="block text-black lg:text-lg md:text-base font-medium">Name</label>
                            <input
                                type="text"
                                {...register("name")}
                                name="name"
                                placeholder="Name"
                               
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                                // {errors.name && <span>This field is required</span>}

                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black lg:text-lg md:text-base font-medium">Email</label>
                            <input
                                type="email"
                                {...register("email")}
                                name="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                                // required
                            />
                        </div>
                        <div>
                            <label className="block text-black lg:text-lg md:text-base  font-medium">Password</label>
                            <input
                                type="password"
                                {...register("password")}
                                name="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white lg:text-xl font-semibold py-3 px-6 rounded-full transition duration-300 w-full">
                                Register
                            </button>
                        </div>
                    </form>
                    <p className="text-center mt-4 text-black text-base font-medium">
                        Already have an account?{" "}
                        <Link className="text-blue-600 font-semibold text-lg" to="/login">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;