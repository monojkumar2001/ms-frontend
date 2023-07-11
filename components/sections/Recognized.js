const Recognized = ({ data, type = "one" }) => {
    return (
      <div className="recognized">
        <div className="container">
          <div className="recognized-wrapper">
            <div className="recognized-left" data-aos="fade-up"
        data-aos-duration="1000">
              <h1 className="section-title">Reach new heights with SongFly</h1>
           <p>We don’t ever send bots or any type of fake engagements. All campai</p>
            </div>
            <div className="recognized-right" data-aos="fade-up"
        data-aos-duration="2000">
                <div className="recognized-icon-item">
                <img src="/assets/home-1/img/recognized-1.svg" alt="" />
                </div>
                <div className="recognized-icon-item">
                <img src="/assets/home-1/img/recognized-2.svg" alt="" />
                </div>
                <div className="recognized-icon-item">
                <img src="/assets/home-1/img/recognized-3.svg" alt="" />
                </div>
                <div className="recognized-icon-item">
                <img src="/assets/home-1/img/recognized-4.svg" alt="" />
                </div>
                <div className="recognized-icon-item">
                <img src="/assets/home-1/img/recognized-5.svg" alt="" />
                </div>
                <div className="recognized-icon-item">
                <img src="/assets/home-1/img/recognized-6.svg" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Recognized;
  