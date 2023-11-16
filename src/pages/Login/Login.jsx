/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const capthaRef = useRef(null);
    const [disable, setDisable] = useState(true)
    const [recatha ,setx] =useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [recatha])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const value = capthaRef.current.value;
        // console.log(value);
        if(validateCaptcha(value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:w-1/2 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name="password"
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplateNoReload />
                            </label>
                            <input type="text" ref={capthaRef} placeholder="rechaptca"
                                name="password"
                                className="input input-bordered" required />
                                <button onClick={()=>setx(!recatha)} className='' type='button'>reChapta</button>
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>

                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;