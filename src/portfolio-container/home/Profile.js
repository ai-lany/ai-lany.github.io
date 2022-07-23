import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Profile.css';
import { useState } from "react";
import CustomPopup from "../../CustomPopup";

export default function Profile() {

    const [visibility, setVisibility] = useState(false);

    const boxRef = useRef();
    const [scrolled, setScrolled] = useState(0);



    useEffect(() => {
        gsap.to(boxRef.current, { x: 20, duration: 1.2 });
        
        const onScroll = () => setScrolled('d-none');
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        
    
    },[]);
    
    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    return (

        <div className='profile-container' id='home'>
             
            <div className='profile-parent'>

                    
                    <div className='cols ' ref={boxRef} >
                        <p className=''>Hi, my name is</p>
                        <h1 className='link noselect text-gradient'>Ailany.</h1>
                        <h3 className=''>Creative Full-stack Developer.</h3>
                        <button className=' btn btn-outline-light shadow-none contact-btn' onClick={(e) => setVisibility(!visibility)} >Contact</button>

            
                         </div>   
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className={scrolled + " bi bi-arrow-down-short"} viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </div>

                        
                        <CustomPopup
                        className = "contact-popup d-flex"
                        onClose={popupCloseHandler}
                        show={visibility}
                        title="Let's get in touch!">
                        <hr/>
                        
                        <form id='contact' className='' action="https://public.herotofu.com/v1/fc3e46f0-e1db-11ec-826d-57a28a4a2cb5" method="post">
                            <input name="name" placeholder='Name' type = "text" required/> <br/> <br/>
                            <input name="email" placeholder="email@gmail.com" type = "text" required/> <br/><br/>
                            <textarea name='msg' form='contact' placeholder='Leave me a message...'></textarea>
                        <button id='contactSubmit' className='btn' name='submit' type='submit' form='contact' >Submit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="black" class="bi bi-send" id="scroll-icon" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                    </svg> </button>
                        </form>
                        
                    </CustomPopup>
                  
                    

                </div>


                );


}