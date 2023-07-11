import React from "react";

function Follower({ type = "one" }) {
  return (
    <div className={` type-${type}`}>
     <div className="follower">
     <div className="container">
        <div className="follower-wrapper">
          <div className="follower-content-warpper">
            <h1 className="section-title" data-aos="fade-up"
            data-aos-duration="1000">
              How to grow your streams & followers on spotify
            </h1>
          </div>

          <div className="follower-card-items">
            <div className="follower-card-item" data-aos="fade-up"
            data-aos-duration="1000">
                <div className="follower-icon-img">
                <img src="/assets/home-2/img/follower-icon-1.svg" alt="" />
                </div>
                 <h4>Provide Your Information</h4>
                 <p>Launching  a new NFT DeFi Or fintech start up? Do you need a complete technical and marketing  support? T</p>
            </div>
            <div className="follower-card-item" data-aos="fade-up"
            data-aos-duration="1500">
                <div className="follower-icon-img">
                <img src="/assets/home-2/img/follower-icon-2.svg" alt="" />
                </div>
                 <h4>Provide Your Information</h4>
                 <p>Launching  a new NFT DeFi Or fintech start up? Do you need a complete technical and marketing  support? T</p>
            </div>
            <div className="follower-card-item follower-card-item-before-remove" data-aos="fade-up"
            data-aos-duration="2000">
                <div className="follower-icon-img">
                <img src="/assets/home-2/img/follower-icon-3.svg" alt="" />
                </div>
                 <h4>Provide Your Information</h4>
                 <p>Launching  a new NFT DeFi Or fintech start up? Do you need a complete technical and marketing  support? T</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Follower;
