// Layout and components
import AppLayout from "../components/layout/AppLayout";
import ServiceSection from "../components/sections/ServiceSection";
import VisionSection from "../components/sections/VisionSection";
import AboutSection from "../components/sections/ChainUpSection";
import PricingSection from "../components/sections/PricingSection";
import ImageSection from "../components/sections/ImageSection";
import EngageSection from "../components/sections/EngageSection";
import HowItWork from "../components/sections/HowItWork";
import Agencies from "../components/sections/Agencies";
import Follower from "../components/sections/Follower";
import ContactUs from "../components/sections/ContactUs";
import Registration from "../components/sections/Registration";
import LinkedinSales from "../components/sections/LinkedinSales";
import Faq from "react-faq-component";
import SongFly from "../components/sections/SongFly";

// Images

const Page2 = () => {
    // =========== Faq Question Data ===================
    const data = {
      rows: [
        {
          title: "Metaverse development: what is it?",
          content: `You can design your own virtual world setting to hold conventions, meetings, seminars, concerts, or even to start your own real-world company there.`,
        },
        {
          title: "How much does our metaverse development service cost?",
          content: `To get a price on your metaverse development project, get in touch with our team. Your specified features, functionalities, and other factors will affect the price. `,
        },
        {
          title: "What are the benefits of investing in metaverse platforms?",
          content: `Experts claim that the metaverse has a trillion-dollar industry thus has a promising future. If you work in such a growing field, you will be noticed by others. Be a pioneer in the field!`,
        },
        {
          title: "What can a metaverse development company do for you?",
          content: `What can a metaverse development company do for you?`,
        },
      ],
    };
  
    const styles = {
      titleTextColor: "blue",
      rowTitleColor: "blue",
    };
  return (
    <div id="page2">
      {/* ====================== Hero Section =========== */}
      <div className="banner-container">
        <div className="banner-wrapper" data-aos="fade-up"
            data-aos-duration="1000">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Stunning</p>
                <h1 className="banner-title">
                  Targeted <span className="focus">SoundCloud</span> <br />
                  <span className="focus2">Promotion</span>
                </h1>
                <p className="banner-des">
                  Get your songs heard by thousands of people. Grow your
                  Followers.Get Featured in hot channels and skyrocket your
                  artist populartity
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <div className="animated ban-a">
                  <div className="animated-inner">
                    <div className="card-left">
                      <img src="/assets/home-2/img/2.png" alt="" />
                    </div>
                    <div className="text-area">
                      <p className="animated-one-font">Total Comment 100K</p>
                    </div>
                  </div>
                </div>
                <div className="animated ban-d">
                  <div className="animated-inner">
                    <div className="review-card-img">
                      <img src="/assets/home-2/img/3.png" alt="" className="" />
                    </div>
                    <div className="text-area">
                      <h4>Rebirio</h4>
                      <p>Creative Director</p>
                      <img src="/assets/home-2/img/4.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="animated ban-b">
                  <div className="animated-inner">
                    <div className="animate-there extra-width">
                      <div className="hart">
                        <img src="/assets/home-2/img/icon/3.png" alt="" />
                        <p>Followers</p>
                      </div>
                      <h4>267.15k</h4>
                      <div className="offer">
                        <span>2.1% </span>
                        <p>vs last 7 days</p>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/assets/home-2/img/1.png"
                  alt=""
                  className="ban-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== Service Section ================= */}
      <ServiceSection type="two" />
      {/* =============== Vision Section ================== */}
      <VisionSection type="two" />
      {/* =============== About Section =================== */}
      <AboutSection type="two" />
      {/* =============== Pricing Section ================= */}
      <PricingSection data={pricingData} type="two" />
      {/* =============== Image Section =================== */}
      <ImageSection type="two" />
      {/* =============== Engage Section ================== */}
      <EngageSection type="two" />
      {/* =============== How It Work ===================== */}
      <HowItWork type="two" />
      {/* =================== Agencies ==================== */}
      <Agencies type="two" />
      {/* =============== Follower ======================== */}
      <Follower type="two" />
      {/* =============== Song Fly ======================== */}
          <SongFly type="two"/>
      {/* =============== Linkedin Sales ================== */}
      <LinkedinSales type="two" />
      {/*  ========= Faq Section start ======== */}
      <section id="faq">
        <div className="container">
          <h1 className="heading">Frequently Asked Questions</h1>
          <div className="content">
            <Faq data={data} styles={styles} />
          </div>
        </div>
      </section>
      {/* ============  Contact Us ===================== */}
      <ContactUs type="two" />
      {/* ============  Resgistration =================== */}
      <Registration type="two" />
    </div>
  );
};

const pricingData = [
  {
    package_type: "basic",
    cur_price: "69",
    off_price: "139 ",
    percent: "50",
    includes: [
      "Reach 10k Audience Base",
      "Distribution To 100 Curators",
      "Distribution To 100 Playlists",
      "Distribution To 100 Radio Stations",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "2-3 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 5,000 streams and 700 followers organically",
  },
  {
    package_type: "Standard",
    cur_price: "119",
    off_price: "239",
    percent: "50",
    includes: [
      "Reach 30k Audience Base",
      "Distribution To 250 Curators",
      "Distribution To 250 Playlists",
      "Distribution To 250 Radio Stations",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "3-5 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 15,000 streams and 1800 followers organically",
  },
  {
    package_type: "premium",
    cur_price: "299",
    off_price: "499",
    percent: "50",
    includes: [
      "Reach 100k Audience Base",
      "Distribution To 550 Curators",
      "Distribution To 550 Playlists",
      "Distribution To 550 Radios Stations",
      "Unlimited Revisions",
      "Start Within 24 hours",
      "9-10 Days Delivery",
    ],
    details:
      "Engagement may vary.*Typical engagements on average 50,000 streams and 10000 followers organically",
  },
];

Page2.title = "Music Promotion Home";
Page2.layout = AppLayout;

export default Page2;
