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

const Page3 = () => {
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
    <div id="page3">
      {/* ====================== Hero Section =========== */}
      <div className="banner-container">
        <div className="banner-wrapper" data-aos="fade-up"
            data-aos-duration="1000">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Global Discovery</p>
                <h1 className="banner-title">
                  Targeted <span className="focus">Instagram</span>{" "}
                  <span className="shape">Promotion</span>
                </h1>
                <p className="banner-des">
                  Boost Instagram Profile to the new height among thousands of
                  followers. We will only promote your instagram profie to
                  connect with your target audiences.
                </p>
                <a href="" className="custom-btn">
                  GET STARTED
                </a>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
                <img src="/assets/home-3/img/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* =============== Service Section ================= */}
     <ServiceSection type="three" />
      {/* =============== Vision Section ================== */}
      <VisionSection type="three" />
      {/* =============== About Section =================== */}
      <AboutSection type="three" />
      {/* =============== Pricing Section ================= */}
      <PricingSection data={pricingData} type="three" />
      {/* =============== Image Section =================== */}
      <ImageSection type="three" />
      {/* =============== Engage Section ================== */}
      <EngageSection type="three" />
      {/* =============== How It Work ===================== */}
      <HowItWork type="three" />
      {/* =================== Agencies ==================== */}
      <Agencies type="three" />
      {/* =============== Follower ======================== */}
      <Follower type="three" />
       {/* =============== Song Fly ======================== */}
       <SongFly type="three"/>
      {/* =============== Linkedin Sales ================== */}
      <LinkedinSales type="three" />
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
      <ContactUs type="three" />
      {/* ============  Resgistration =================== */}
      <Registration type="three" />
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
      "Distribution To 100 Radios Stations ",
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
      "Reach 30K Audience Base",
      "Distribution To 250 Curators",
      "Distribution To 250 Playlists",
      "Distribution To 250 Radios Stations",
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

Page3.title = "Music Promotion Home";
Page3.layout = AppLayout;

export default Page3;
