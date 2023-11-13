
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))

    })
    return (
        <section className='my-20'>
            <SectionTitle
                heading={'---What Our Clients Say---'}
                subheading={'TESTIMONIALS'}
            >
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(reviews => <SwiperSlide key={reviews._id}>
                        <div className='flex flex-col items-center my-16 mx-24 '>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={reviews.rating}
                                readOnly
                            />
                            <p>
                                {reviews.details}
                            </p>
                            <h3 className='text-2xl text-orange-400'>
                                {reviews.name}
                            </h3>
                        </div>
                        
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;