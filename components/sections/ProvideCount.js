import { CountUp } from 'use-count-up'
import React, { Component } from 'react';
const ProvideCount = ({ type = "one" }) => {
	return (
	
        <div className="provide-count"  >
        <div className="container">
     <div className="provide-count-wrapper">
     <div className="provide-count-item" >
            <p>Provide a song that are ready to accompany Your Lonely</p>
          </div>
          <div className="provide-count-item">
          <div className="provide-count-list">
            <p className="count">
            <CountUp isCounting end={100} duration={3} />
            <span className="provide-count-span">+</span>
            </p>
            <span>Artist</span>
          </div>
          <div className="provide-count-list">
            <p className="count">
            <CountUp isCounting end={5} duration={3} />
            m<span className="provide-count-span">+</span>
            </p>
            <span>Songs</span>
          </div>
          <div className="provide-count-list">
            <p className="count">
            <CountUp isCounting end={50} duration={3} />
            <span className="provide-count-span">+</span>
            </p>
            <span>Albums</span>
          </div>
          </div>
     </div>
        </div>
      </div>
	);
};

export default ProvideCount;
