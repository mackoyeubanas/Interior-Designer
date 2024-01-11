import React from 'react';
import Wrapper from '../assets/wrappers/Contact';
import background from '../assets/img/flowers.png';

let sectionStyle = {
    position: 'absolute',
    height: '100vh',
    width: '100%',
    top: '0%',
    left: '0',
    zIndex: '-10',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${background})`
};

function Form() {
    return (
        <Wrapper>
            <div className="contact-wrapper">
                <form className="contact-form">
                    <h1>
                        Contact me, together we will create<span>Your dream</span>one
                    </h1>
                    <h2>Contact Form</h2>
                    <h3>
                        I will be happy to answer <span>your</span> questions
                    </h3>
                    <input className="name" type="text" placeholder="Name..." />
                    <input className="email" type="email" placeholder="E-mail.." />
                    <textarea className="message" placeholder="Message..."></textarea>
                    <div className="agreement">
                        <label className="form-control">
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <p>
                                I consent to the processing of my personal data in accordance with the Data Protection Act
                                personal data in connection with the processing of the application, Privacy Policy.
                            </p>
                        </label>
                    </div>
                    <button className="btn" type="submit">
                        send
                    </button>
                </form>

                <div style={sectionStyle}></div>
            </div>
        </Wrapper>
    );
}

export default Form;
