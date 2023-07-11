// Layout and components
import AppLayout from "../components/layout/AppLayout";
import Link from "next/link";
import ProvideCount from "../components/sections/ProvideCount";
import WhyUs from "../components/sections/WhyUs";
import Services from "../components/sections/Services";
import ChainUpSection from "../components/sections/ChainUpSection";
import SongFly from "../components/sections/SongFly";
import Recognized from "../components/sections/Recognized";
import MarketingAgenchy from "../components/sections/MarketingAgenchy";
import LinkedinSales from "../components/sections/LinkedinSales";

import Faq from "react-faq-component";
import ContactUs from "../components/sections/ContactUs";
import Registration from "../components/sections/Registration";
// import CountUp from "react-countup";
// Images

const Home = () => {
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
    
    <div id="home">
      
      {/*  ================ Hero Section ==============*/}
      <div className="hero">
        <div className="banner-wrapper"  data-aos="fade-up"
            data-aos-duration="1000">
          <div className="banner-inner">
            <div className="col">
              <div className="banner-content">
                <p className="sm-title">Organic & Genre</p>
                <h1 className="banner-title">
                  Your One-step E-Commerce Branding
                </h1>
                <p className="banner-des">
                  Get your songs heard by thousands of music lovers. Grow your
                  fanbase. Get featured in hot celebrity curator playlists and
                  skyrocket your Spotify channel popularity.
                </p>
                <Link href="/">
                  <button className="custom-btn"> GET STARTED</button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="banner-right">
              {/* <video
                className="video-controls"
                muted autoPlay loop
                src="https://res.cloudinary.com/dne6hxmao/video/upload/v1684137120/Music%20Promotion%20Today/Hover_Animation_pm5pti.mp4"
              ></video> */}
              <img src="assets/home-1/img/hero-img.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =================== Provide Count =============== */}
      <ProvideCount />
      {/* ================== Why Us  */}
      <WhyUs />
      {/* =================  Service ====================== */}
      <Services />
      {/* ================= Chain Up Section ============== */}
      <ChainUpSection />
      {/* ================= SongFly ======================= */}
      <SongFly />
      {/* ================== Recognized ==================== */}
      <Recognized />
      {/* ============== Marketing Agenchy ================ */}
      <MarketingAgenchy />
      {/* =============== Linkedin Sales ================== */}
      <LinkedinSales />
      {/*  ============== Faq Section start ============== */}
      <section id="faq">
        <div className="container">
          <h1 className="heading" data-aos="fade-up"
        data-aos-duration="1000">Frequently Asked Questions</h1>
          <div className="content" data-aos="fade-up"
        data-aos-duration="1000">
            <Faq data={data} styles={styles} />
          </div>
        </div>
      </section>
      {/* ============  Contact Us ===================== */}
      <ContactUs />
      {/* ============  Resgistration =================== */}
      <Registration />
    </div>
  );
};

Home.title = "Music Promotion Home";
Home.layout = AppLayout;

export default Home;
