import React from 'react'
import SignIn from '../components/SignIn/SignIn'
import Video from "../videos/video.mp4";
const signin = () => {
    return (
        <>
            <SignIn/>   
            <HeroBg>
        <video className="videoTag" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        {/* <VideoBg  autoPlay loop muted src={Video} type='video/mp4' /> */}
      </HeroBg>
        </>
    )
}

export default signin
