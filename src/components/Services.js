import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Services';
import services from '../utils/services';

function Services() {
    return (
        <Wrapper>
            <div> className="services-container"</div>
                <div className="services-title"> </div>
                    <div className="line"></div>
                    <h1 className="title">What does the service look like?</h1>
                    <div className="line"></div>
               
            
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
                <h4 className="services-description"></h4>
                   Interior design is a process of collaboration in which your suggestions and preferences are important. My knowledge, together with your vision, will help you to design an interior that reflects your personality and meets all of your needs..
                    <span>
                        I am excited to work together with you and create an interior design or construction that meets your standards...
                    </span>
                <Link to="/projects" className="btn projects-btn">
                    Check completed projects
                </Link>
        </Wrapper>
    );
}

export default Services;
