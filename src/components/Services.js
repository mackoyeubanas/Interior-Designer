import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Services';
import services from '../utils/services';

function Services() {
    return (
        <Wrapper>
            <div className="services-container">
                <div className="services-title"> </div>
                    <div className="line"></div>
                    <h1 className="title">What does the service look like?</h1>
                    <div className="line"></div>
            </div>   
                {services.map(({ id, img, alt, circle1, circle2, title, description }) => {
                    return (
                        <div key={id} className="service">
                            <div className="img-bg-container">
                                <div className="img-container">
                                    <img src={img} className="service-img" alt={alt} />
                                </div>
                                <div className={circle1}></div>
                                <div className={circle2}></div>
                            </div>
                            <div className="service-description service-1">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    );
                })}  
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>         
                <h4 className="services-description">
                   Interior design is a process of collaboration in which your suggestions and <span> preferences are important </span>. My knowledge, <span> together with your vision, will help you to design an interior that reflects your personality and meets all of your needs..{""}</span>
                    <span>
                        I am excited to work together with you and create an interior design or construction that meets your standards...
                    </span>
                </h4>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Link to="/projects" className="btn projects-btn">
            
                    Check completed projects
                </Link>
            </div>
        </Wrapper>
    );
}

export default Services;
