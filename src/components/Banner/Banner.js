import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Banner = () => {
    return (
        <div>
            <section className='mx-20 mt-5'>
                <Slider>
                    <div className="flex justify-between gap-5 mx-auto bg-slate-300">
                        <div className='flex-initial'>
                            <h1 className='text-7xl'>We are different</h1>
                            <h1 className=' mt-3 text-7xl'>From Other</h1>
                            <p className=' my-10'>
                                Our Online Salling system
                                project's aim is to automate transactions of the comapany and provide better and faster service to the
                                customers by using the internet.
                            </p>


                            <button className="btn btn-primary p-3 px-5 rounded-full">
                                Get Started
                            </button>


                        </div>

                        <div className='m-5'>
                            <img
                                style={{
                                    width: "600px",
                                    height: "350px"
                                }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vyPdHrI3H4srwzsPXG2iqGL61DfI9AeZTQ&usqp=CAU" alt="" />
                        </div>
                    </div>
                    <div key="2" className="flex justify-between gap-5 mx-auto bg-slate-300">
                        <div className='flex-initial'>
                            <h1 className='text-7xl'>We are different</h1>
                            <h1 className=' mt-3 text-7xl'>From Other</h1>
                            <p className=' my-10'>
                                Our Online Salling system
                                project's aim is to automate transactions of the comapany and provide better and faster service to the
                                customers by using the internet.
                            </p>


                            <button className="btn btn-primary p-3 px-5 rounded-full">
                                Get Started
                            </button>


                        </div>

                        <div className='m-5'>
                            <img
                                style={{
                                    width: "600px",
                                    height: "350px"
                                }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vyPdHrI3H4srwzsPXG2iqGL61DfI9AeZTQ&usqp=CAU" alt="" />
                        </div>
                    </div>

                </Slider>
            </section>
        </div>
    );
};

export default Banner;