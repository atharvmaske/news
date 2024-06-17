import React from 'react';
import atharvPhoto from './atharv_photo.jpg'; 
import twitter from './twitter.webp'; 
import linkedin from './linkedin.png'; 
import git from './git.jpeg'; 
import './About.css';
const About = () => {
    return (
        <>
        <div style={{ textAlign: 'center', marginTop: '50px' , height:'39rem' }}>
            <img src={atharvPhoto} alt="Atharv Maske" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }} />
            <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>Atharv Maske</h2>
            <p>
              Hi! I'm Atharv Maske, a developer and tech enthusiast from Maharastra. I enjoy building apps that solve real problems.
            </p>
         <p>
        Feel free to connect with me on X,Github & LinkedIn, or check out my projects on GitHub.
          </p>
        

        <div className="social" style={{textAlign:'center', marginTop:'50px'}}>
        <a href="https://x.com/Atharv_maske_" target="_blank" rel="noopener noreferrer">
         <img className='social_media' src={twitter} alt="Twitter" />
        </a>
        <a href="https://github.com/atharvmaske" target="_blank" rel="noopener noreferrer">
            <img className='social_media' src={git} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/atharv-maske-61a983257/" target="_blank" rel="noopener noreferrer">
            <img className='social_media' src={linkedin} alt="LinkedIn" />
        </a>

        </div>
        </div>
        </>
    );
}

export default About;
