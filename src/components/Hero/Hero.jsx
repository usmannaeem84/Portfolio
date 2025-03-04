import React from 'react'
import profile from "../../assets/Profile1.jpg"
import cv from "../../assets/pdf/cv.pdf"
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Hero() {
  return (
    <div id='Home' className="Hero">

      <div className="image">
        <img src={profile} alt="" />
      </div>
      <div className="heroInfo">
        <h1><span>I'm Muhammad Usman, </span>Frontend Developer Based in Pakistan</h1>
        <p>I'm a front-end developer dedicated to creating sleek, user-friendly interfaces. Passionate about blending design with technology, I specialize in crafting engaging digital experiences that leave a lasting impression. Let's build something remarkable together.</p>
      </div>

      <div className="heroButtons">

        <AnchorLink className='anchor' offset={50} href="#Contact">
          <button className="hBtn1">Connect With me</button>
        </AnchorLink>
        
        <a href={cv} download="Muhammad_Usman_CV.pdf">
          <button className="hBtn2">My resume</button>
        </a>

      </div>



    </div>
  )
}

export default Hero
