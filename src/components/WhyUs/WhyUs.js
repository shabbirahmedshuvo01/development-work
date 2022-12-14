import React from 'react';
import { ourData } from '../../components/Data/Data'

const WhyUs = () => {
    return (
        <div className='bg-slate-100  py-32 px-2 '>
            <div className='py-10 px-2'>
                <h2 className="mb-14 section-title text-center font-semibold text-2xl md:text-4xl lg:text-6xl">
                    Why Choose <span className="text-primary">Online Services</span>
                </h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mx-auto mt-5 max-w-7xl '>

                {
                    ourData.map((item, idx) => {
                        return (

                            <div data-aos="zoom-in-down" data-aos-duration="1000" key={idx} className="card hover:bg-base-100 shadow-xl">
                                <figure className="w-40 m-auto">
                                    <img src={item?.icon} alt="clock" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title font-bold">{item?.title}</h2>
                                    <p>{item?.description.slice(0, 70)}</p>
                                    <div className="card-actions">
                                        <button className="text-1xl px-4 py-1 text-white bg-primary rounded-full ">See More</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }




            </div>

        </div>
    );
};

export default WhyUs;