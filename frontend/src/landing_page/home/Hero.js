import React from 'react';
import './Hero.css'

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/landing.png' alt='Hero-Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "18%", margin: "0 auto", backgroundColor: "#387ed1"}}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;