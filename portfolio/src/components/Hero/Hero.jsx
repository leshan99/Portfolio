import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <section id="home" className="hero-container">
        <div className="hero-content">
            <h5>Hello! I'm Leshan,</h5>
            <h2>Transforming Ideas into Digital Realities</h2>
            <p>DevOps | Cloud Engineer | Frontend Developer</p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/react.png" alt=""/>
                </div>
                <img className="profile" width="400px" src="./assets/images/Profile.png" alt=""/>
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/js.png" alt=""/>
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/docker.png" alt=""/>
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/linux.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
