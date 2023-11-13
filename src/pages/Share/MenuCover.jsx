/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';
import imgae from '../../assets/menu/menu-bg.png'
const MenuCover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={imgae}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className="hero h-[700px]" 
        // style={{ backgroundImage: `url("{img}")` }}
        style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </Parallax>
       
    );
};

export default MenuCover;