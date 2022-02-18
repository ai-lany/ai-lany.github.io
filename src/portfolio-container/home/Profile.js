import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Profile.css';

export default function Profile(){

    const boxRef = useRef();
    useEffect(() => {
        gsap.to(boxRef.current, {x: 50, duration: 1});
      });
    

    return(

        <div className='profile-container' id='home'>
            <div className='profile-parent'> 
                <div className='profile-details'>
                    
                    <div className='cols'  ref={boxRef} >
                        <p className='noselect'>Hi, my name is</p>
                        <h1>Ailany Rodriguez.</h1>
                    </div>
                </div>
            </div>
        </div>


    );


}