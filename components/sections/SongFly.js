const SongFly = ({ data, type = "one" }) => {
  return (
    <div className="songFly services">
      <div className="container">
        <div className="songFly-wrapper">
          <div className="songFly-left" data-aos="fade-up"
        data-aos-duration="1000">
            <h1 className="section-title">Reach new heights with SongFly</h1>
            <div className="songfly-list-item">
              <div className="songfly-list">
                <div className="songfly-squre"></div>
                <p>Requires Zero Digital Advertising knowledge</p>
              </div>
              <div className="songfly-list">
                <div className="songfly-squre"></div>
                <p>Deploy ads to Facebook, Instagram, Tiktok and more </p>
              </div>
              <div className="songfly-list">
                <div className="songfly-squre"></div>
                <p>Dont spend time and money on ad creatives</p>
              </div>
              <div className="songfly-list">
                <div className="songfly-squre"></div>
                <p>Automatic audience targeting just for your music</p>
              </div>
              <div className="songfly-list">
                <div className="songfly-squre"></div>
                <p>Create and test New ads with just few clicks!</p>
              </div>
              <div className="songfly-list">
                <div className="songfly-squre"></div>
                <p>Start a campaign for as low as $150 for 1 month!</p>
              </div>
            </div>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="songFly-right" data-aos="fade-up"
        data-aos-duration="2000">
            <img src="/assets/home-1/img/songfly-img.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongFly;
