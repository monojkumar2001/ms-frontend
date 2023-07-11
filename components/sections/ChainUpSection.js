import { CountUp } from "use-count-up";
const ChainUpSection = ({ type = "one" }) => {
  return (
    <section id="chainup" className={`type-${type}`}>
      <div className="container">
        <div className="chainup-wrapper">
          <div className="chainup-col" data-aos="fade-up"
        data-aos-duration="1000">
            <div className="chainup-img">
              <img src="/assets/home-1/img/chainup-img.svg" alt="" />
            </div>
          </div>
          <div className="chainup-col" data-aos="fade-up"
        data-aos-duration="2000">
            <h1 className="section-title">ChainUP Data Center Worldwide</h1>
            <div className="chainup">
              <div className="col-2">
                <div className="chainup-card">
                  <div className="chainup-icon">
                    <img src="/assets/home-1/img/chainup-icon-1.svg" alt="" />
                  </div>
                  <p className="count">
                    <CountUp isCounting end={6} duration={3} />+
                  </p>
                  <p>Playlist Creators</p>
                </div>
              </div>
              <div className="col-2">
                <div className="chainup-card">
                  <div className="chainup-icon">
                    <img src="/assets/home-1/img/chainup-icon-2.svg" alt="" />
                  </div>
                  <p className="count">
                    <CountUp isCounting end={56} duration={3} />+
                  </p>
                  <p>Playlist Creators</p>
                </div>
              </div>
              <div className="col-2">
                <div className="chainup-card">
                  <div className="chainup-icon">
                    <img src="/assets/home-1/img/chainup-icon-3.svg" alt="" />
                  </div>
                  <p className="count">
                    <CountUp isCounting end={140} duration={3} />+
                  </p>
                  <p>Playlist Creators</p>
                </div>
              </div>
              <div className="col-2">
                <div className="chainup-card">
                  <div className="chainup-icon">
                    <img src="/assets/home-1/img/chainup-icon-4.svg" alt="" />
                  </div>
                  <p className="count">
                    <CountUp isCounting end={28000} duration={3} />+
                  </p>
                  <p>Playlist Creators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainUpSection;
