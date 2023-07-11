import React from "react";
import ServiceCard from "../home/service/ServiceCard";

const Services = ({ type = "one" }) => {
  return (
    <div className="services"  data-aos="fade-up"
    data-aos-duration="1000">
      <div className="container">
        <div className="title-wrapper">
            <h1 className="section-title">Services</h1>
            <p className="sec-des">
            Prepare to launch a billion-dollar start-up on the NFT Fintech and Crypto Platform with its new, exciting features and capabilities.
            </p>
        </div>
        <div className="services-wrapper">
          <ServiceCard 
          img="/assets/home-1/img/service-1.svg" 
          heading="Spotify Promotion" 
          dec="With NFT CONSTRUCTER, you can build a feature-rich, user-friendly
              NFT minting platform or marketplace without any coding or
              technical" 
              link="/spotify-promotion/spotify-promotion"/>

          <ServiceCard 
          img="/assets/home-1/img/service-4.svg" 
          heading="Soundcloud Promotion" 
          dec="With NFT CONSTRUCTER, you can build a feature-rich, user-friendly
              NFT minting platform or marketplace without any coding or
              technical" 
              link="/soundcloud-promotion"/>
          <ServiceCard 
          img="/assets/home-1/img/service-3.svg" 
          heading="Instagram Promotion" 
          dec="With NFT CONSTRUCTER, you can build a feature-rich, user-friendly
          NFT minting platform or marketplace without any coding or
          technical" 
              link="/instagram-promotion"/>
          <ServiceCard 
          img="/assets/home-1/img/service-2.svg" 
          heading="Youtube Promotion" 
          dec=" With NFT CONSTRUCTER, you can build a feature-rich, user-friendly
          NFT minting platform or marketplace without any coding or
          technical" 
              link="/youtube-promotion"/>
        </div>
      </div>
    </div>
  );
};

export default Services;
