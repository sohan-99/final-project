import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-items text-white pt-8 my-20">
            <SectionTitle subheading={'FEATURED ITEM'} heading={ '---Check it out---'}></SectionTitle>
           <div className="md:flex justify-center items-center px-36 pb-20 pt-12">
            <div>

            <img src={featuredimg} alt="" />
            </div>
            <div className="">
                <p className="md:ml-10">March 20, 2023</p>
                <p className="uppercase">WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.Eaque repellat recusandae add laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-active">Order Now</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;