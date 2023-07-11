import AppLayout from "../components/layout/AppLayout";
import React from "react";

const Contact = () => {
	return ( <>
          <div className="contact-header" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="contact-header-wrapper">
                <h1>Contact With Us</h1>
                <p>Our team wants to learn more about your project. Take some time to schedule a call and connect with us today. At Nftconstructer, we always respect your wishes and privacy and never share information with anyone or project details with people not employed by the company. Your security is our top priority.</p>
            </div>
            </div>  
        <div className='contact'>
        <div className='container'>
            <div className='contact-wrapper'>
                <div className='contact-left' data-aos="fade-up"
            data-aos-duration="1000">
                
                   <h2 className="contact-title">Lets talk with our awesome team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                
                    <div className='contact-contect'>
                        <div className='contact-item'>
                            <img src="/assets/contact/call.png" alt="" />	
                            <div className='contact-items'>
                                <span>call</span>
                                <p>+13025977087</p>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <img src="/assets/contact/email.png" alt="" />	
                            <div className='contact-items'>
                                <span>Email</span>
                                <p>support@musicpromotiontoday.com</p>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <img src="/assets/contact/location.png" alt="" />	
                            <div className='contact-items'>
                                <span>Location</span>
                                <p>Address  30N Gould St sheridan WY 82801,United States</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-right' data-aos="fade-up"
            data-aos-duration="1000">
                <form className="contact-form">
                    <div className="form-field">
                        <label htmlFor="name">Your Name</label>
                        <div className="input-field">
                            <div className="input-img">
                                <img src="/assets/contact/user.png"/>
                            </div>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Full name here"
                        />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Your mail</label>
                        <div className="input-field">
                            <div className="input-img">
                                <img src="/assets/contact/email.png"/>
                            </div>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email address"
                        />
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor="name">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Type your message here"
                        />
                    </div>
                    {/* <button className="form-btn" type="submit">Send message</button> */}
                    <a href="https://wa.me/13025977087" target={"_blank"} className="form-btn">Send message</a>
                 </form>
                </div>
            </div>
        </div>
    </div>
    </>
	);
};

Contact.layout = AppLayout;
Contact.title = "Contact";

export default Contact;


