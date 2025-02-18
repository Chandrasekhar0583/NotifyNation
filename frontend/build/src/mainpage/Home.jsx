import React from "react";
import './home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import Footer from "../footer/footer";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => animateOut(current),
    afterChange: (current) => animateIn(current),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const animateIn = (current) => {
    const h1Element = document.querySelector(`.carousel-image:nth-child(${current + 1}) h1`);
    if (h1Element) h1Element.classList.add("animate-in");
  };

  const animateOut = (current) => {
    const h1Element = document.querySelector(`.carousel-image:nth-child(${current + 1}) h1`);
    if (h1Element) h1Element.classList.remove("animate-in");
  };

  return (
    <div className="home">

    <div className="MB">

        
     
      <div className="navbar">
        <div className="navbar-brand">ExamPortal</div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>

      <Slider {...settings} className="carousel">
        <div className="carousel-image">
          <img src={image1} alt="Army" />
          <h1>Army</h1>
        </div>
        <div className="carousel-image">
          <img src={image2} alt="Navy" />
          <h1>Navy</h1>
        </div>
        <div className="carousel-image">
          <img src={image3} alt="Air Force" />
          <h1>Air Force</h1>
        </div>
        <div className="carousel-image">
          <img src={image4} alt="SSC Exams" />
          <h1>SSC Exams</h1>
        </div>
        <div className="carousel-image">
          <img src={image5} alt="Apply Exam Online" />
          <h1>Apply Exam Online</h1>
        </div>
        <div className="carousel-image">
          <img src={image6} alt="Take Test" />
          <h1>Take Test</h1>
        </div>
      </Slider>

      <button className="cta-btn">Get Started</button>
    </div>


      {/* <button className="cta-btn">Get Started</button> */}
       <div className="storys">
        <div className="story1">
            <div className="homecard">
                <img src="https://th.bing.com/th/id/OIP.0A5tib3WP3QrArZajm_5KQHaL1?rs=1&pid=ImgDetMain" alt="" />
                <div className="intro">
                    <h1  className="homeh1">name</h1>
                    <p className="homep">sjdkfhakhdfkhdfefe= fewf wejkbh a uehfiuehfuk uf ha</p>
                </div>
            </div>
        </div>
        <div className="story1">
        <div className="homecard">
                <img src="https://th.bing.com/th/id/OIP.0A5tib3WP3QrArZajm_5KQHaL1?rs=1&pid=ImgDetMain" alt="" />
                <div className="intro">
                    <h1  className="homeh1">name</h1>
                    <p className="homep">sjdkfhakhdfkhdfefe= fewf wejkbh a uehfiuehfuk uf ha</p>
                </div>
            </div>
        </div>
        <div className="story1"> <div className="homecard">
                <img src="https://th.bing.com/th/id/OIP.0A5tib3WP3QrArZajm_5KQHaL1?rs=1&pid=ImgDetMain" alt="" />
                <div className="intro">
                    <h1  className="homeh1">name</h1>
                    <p className="homep">sjdkfhakhdfkhdfefe= fewf wejkbh a uehfiuehfuk uf ha</p>
                </div>
            </div></div>
        <div className="story1"> <div className="homecard">
                <img src="https://th.bing.com/th/id/OIP.0A5tib3WP3QrArZajm_5KQHaL1?rs=1&pid=ImgDetMain" alt="" />
                <div className="intro">
                    <h1 className="homeh1">name</h1>
                    <p className="homep">sjdkfhakhdfkhdfefe= fewf wejkbh a uehfiuehfuk uf ha</p>
                </div>
            </div></div>
        <div className="story1"> <div className="homecard">
                <img src="https://th.bing.com/th/id/OIP.0A5tib3WP3QrArZajm_5KQHaL1?rs=1&pid=ImgDetMain" alt="" />
                <div className="intro">
                    <h1  className="homeh1">name</h1>
                    <p className="homep">sjdkfhakhdfkhdfefe= fewf wejkbh a uehfiuehfuk uf ha</p>
                </div>
            </div></div>
        <div className="story1"> <div className="homecard">
                <img src="https://th.bing.com/th/id/OIP.0A5tib3WP3QrArZajm_5KQHaL1?rs=1&pid=ImgDetMain" alt="" />
                <div className="intro">
                    <h1  className="homeh1">name</h1>
                    <p className="homep">sjdkfhakhdfkhdfefe= fewf wejkbh a uehfiuehfuk uf ha</p>
                </div>
            </div></div>

        
       </div><br></br>
       <div className="scrollinganimationparent">
       <div className="scrollinganimation">
       <div className="scrollingname">ARMY</div>
       <div className="scrollingname">Navy</div>
       <div className="scrollingname">airfroce</div>
       <div className="scrollingname">railway</div>
       <div className="scrollingname">bank</div>
       <div className="scrollingname">eamcet</div>
       <div className="scrollingname">JEE</div>
       <div className="scrollingname">group c</div>
       <div className="scrollingname">Nvay srr</div>
       <div className="scrollingname">NEEt</div>
       <div className="scrollingname">group D</div>


       </div>
       <div className="scrollinganimation">
       <div className="scrollingname">ARMY</div>
       <div className="scrollingname">Navy</div>
       <div className="scrollingname">airfroce</div>
       <div className="scrollingname">railway</div>
       <div className="scrollingname">bank</div>
       <div className="scrollingname">eamcet</div>
       <div className="scrollingname">JEE</div>
       <div className="scrollingname">group c</div>
       <div className="scrollingname">Nvay srr</div>
       <div className="scrollingname">NEEt</div>
       <div className="scrollingname">group D</div>


       </div>
       </div>
       
    <Footer />
    </div>

  );
};

export default Home;