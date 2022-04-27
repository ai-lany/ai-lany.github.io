import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Profile.css';
import { useState } from "react";
import CustomPopup from "./CustomPopup";
import Bounce from './Bounce';

export default function Profile() {

    const boxRef = useRef();
    useEffect(() => {
        gsap.to(boxRef.current, { x: 50, duration: 1 });
    });
    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    return (

        <div className='profile-container' id='home'>
             
            <div className='profile-parent'>

                    
                    <div className='cols' ref={boxRef} >
                        <p className='noselect'>Hi, my name is</p>
                        <h1 className='link noselect text-gradient'>Ailany.</h1>
                        <h4 className='noselect'>Creative Full-stack Developer.</h4>
                        <button onClick={(e) => setVisibility(!visibility)} className=' btn shadow-none'>Contact</button>

            
                         </div>  
                        </div>
                        <CustomPopup
                        className = "contact-popup center"
                        onClose={popupCloseHandler}
                        show={visibility}
                        title="Let's get in touch!">
                        <hr/>
                        
                        <form id='contact'>
                            <input name="name" placeholder='Name' type = "text"/> <br/> <br/>
                            <input name="email" placeholder="email@gmail.com" type = "text"/> <br/><br/>
                           
                        </form>
                        <textarea name='msg' form='contact' placeholder='Leave me a message...'></textarea>
                        <button id='contactSubmit' className='btn' name='submit' type='submit' form='contact' formAction=''>Submit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="black" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg> </button>
                    </CustomPopup>
                  
                    

                </div>


                );


}