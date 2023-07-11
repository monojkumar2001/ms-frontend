import React from "react";

function SelectedService() {
  return (
    <div className="selected-service-wrapper">
      <div className="selected-service-header">
        <div className="selected-service-header-left">
          <span>01</span>
          <div className="selected-title">
            <h1>Selected Service</h1>
            <p>
              The details provided in this section will be used to create access
              to the project portal.
            </p>
          </div>
        </div>
        <div className="selected-service-header-right">
          <img src="assets/oder-details/dwon-arrow.svg" alt="" />
        </div>
      </div>
      <div className="selected-service-project-item ">
        <div className="selected-service-project-img">
          <img src="assets/oder-details/project-img.svg" alt="" />
        </div>
        <h3>
          Targeted <span>Spotify</span> Promotion
        </h3>
      </div>
      <div className="selected-service-list-items">
        <div className="selected-service-list">
          <div className="selected-service-list-item">
            <span>
              <img src="assets/oder-details/check-mark.svg" alt="" />
            </span>
            <p>Everything in Pro</p>
          </div>
          <div className="selected-service-list-item">
            <span>
            <img src="assets/oder-details/check-mark.svg" alt="" />
            </span>
            <p>Everything in Pro</p>
          </div>
        </div>
        <div className="selected-service-list">
          <div className="selected-service-list-item">
            <span>
            <img src="assets/oder-details/check-mark.svg" alt="" />
            </span>
            <p>Everything in Pro</p>
          </div>
          <div className="selected-service-list-item">
            <span>
            <img src="assets/oder-details/check-mark.svg" alt="" />
            </span>
            <p>Everything in Pro</p>
          </div>
        </div>
        <div className="selected-service-list">
          <div className="selected-service-list-item">
            <span>
            <img src="assets/oder-details/check-mark.svg" alt="" />
            </span>
            <p>Everything in Pro</p>
          </div>
          <div className="selected-service-list-item">
            <span>
            <img src="assets/oder-details/check-mark.svg" alt="" />
            </span>
            <p>Everything in Pro</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedService;
