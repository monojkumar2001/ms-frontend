const ServiceSection = ({ data, type = "one" }) => {
  return (
    <section>
      <div id="service" className={`service cpb-6 type-${type}`}>
        <div className="container">
          <div className="title-wrapper" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="sec-title">
              <p className="sec-sm-title">Our Services</p>
              <h2 className="main-title">
                Your Complete Music Marketing Agency
              </h2>

              <p className="sec-des">
              Built For From Music Artist To Record Labels Get All Your Music Marketing Needs In One Place.
              </p>
            </div>
          </div>

          <div className="service-wrapper mt-3">
            <div className="service-card" data-aos="fade-up"
            data-aos-duration="1000">
              <div className="service-agency-img">
              <img src="/assets/home-2/img/agenchy-img-1.svg" alt="" />
              </div>
              <div className="service-details">
                <h4>Targeted Campaigns</h4>
                <p>
                  Country and genre targeting, We’ll get your music heard by the
                  right people.
                </p>
              </div>
            </div>
            <div className="service-card service-card-middle" data-aos="fade-up"
            data-aos-duration="1500">
              <div className="service-agency-img">
              <img src="/assets/home-2/img/agenchy-img-2.svg" alt="" />
              </div>
              <div className="service-details">
                <h4>Earn Royalties</h4>
                <p>
                We only run real campaigns to attract real people, so you continue to earn royalties for streams.
                </p>
              </div>
            </div>
            <div className="service-card" data-aos="fade-up"
            data-aos-duration="2000">
              <div className="service-agency-img">
              <img src="/assets/home-2/img/agenchy-img-3.svg" alt="" />
              </div>
              <div className="service-details">
                <h4>Scalable Solutions</h4>
                <p>
                We have plans for the starting artist for big agencies and all in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
