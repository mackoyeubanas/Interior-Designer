import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Banner';
import TextAnimation from './TextAnimation';
import { MdOutlineContactSupport } from 'react-icons/md';

function Banner() {
    return (
        <Wrapper>
            <div className="banner-container">
                <Link to="/contact" className="contact-icon">
                    <MdOutlineContactSupport />
                </Link>
                <TextAnimation text={`To ensure the longevity of our company through repeat and referral business achieved by customer satisfaction in all areas including timeliness, attention to detail and service-minded attitudes...`} />
            </div>
        </Wrapper>
    );
}

export default Banner;
