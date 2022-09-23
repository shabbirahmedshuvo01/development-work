import React from 'react';

const Cards = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-20 my-5'>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New Program is released!</h2>
                    <p>Click the button to play and watch app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch Now</button>
                    </div>
                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New Program is released!</h2>
                    <p>Click the button to play and watch app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch Now</button>
                    </div>
                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New Program is released!</h2>
                    <p>Click the button to play and watch app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;