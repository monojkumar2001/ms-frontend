import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
const LinkedinSales = ({ data, type = "one" }) => {
  return (
    <div className={`services type-${type}`}>
      <div className="container">
        <div className="title-wrapper" data-aos="fade-up"
        data-aos-duration="1000">
          <h1 className="section-title">
            The #1 LinkedIn Sales Navigator Extractor
          </h1>
          <p>
            We Are Glad To Hear From People Their Positive Feedback About Our
            Service.
          </p>
        </div>
        <div className="linkedin-sales-wrapper" data-aos="fade-up"
        data-aos-duration="1000">
          <Swiper
            spaceBetween={60}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Navigation, EffectCoverflow, A11y]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              450: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1240: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="linkedin-sales-card">
                <div className="linkedin-sales-arrow-img">
                  <svg
                    width="32"
                    height="28"
                    viewBox="0 0 32 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.91821 27.2871C2.16546 27.2871 1.61799 27.0457 1.27583 26.563C1.0021 26.0802 0.865234 25.494 0.865234 24.8044V8.97676C0.865234 6.49401 1.4127 4.63194 2.50762 3.39056C3.60254 2.14918 4.90276 1.32159 6.40828 0.907802C7.98223 0.494006 9.41932 0.287109 10.7195 0.287109C11.6776 0.287109 12.3961 0.321591 12.8752 0.390556C13.4226 0.390556 13.8674 0.459522 14.2096 0.597456V6.18366C12.9094 6.18366 12.0882 6.52849 11.746 7.21815C11.4723 7.83884 11.3354 8.45952 11.3354 9.08021V12.0802H12.3619C12.9778 12.0802 13.4911 12.2871 13.9017 12.7009C14.3807 13.0457 14.6202 13.6319 14.6202 14.4595V24.8044C14.6202 26.4595 13.8674 27.2871 12.3619 27.2871H2.91821ZM20.1632 27.2871C19.4105 27.2871 18.863 27.0457 18.5209 26.563C18.2471 26.0802 18.1103 25.494 18.1103 24.8044V8.97676C18.1103 6.49401 18.6577 4.63194 19.7526 3.39056C20.8476 2.14918 22.1478 1.32159 23.6533 0.907802C25.2273 0.494006 26.6643 0.287109 27.9646 0.287109C28.9226 0.287109 29.6412 0.321591 30.1202 0.390556C30.6677 0.390556 31.1125 0.459522 31.4546 0.597456V6.18366C30.1544 6.18366 29.3332 6.52849 28.9911 7.21815C28.7173 7.83884 28.5805 8.45952 28.5805 9.08021V12.0802H29.607C30.2228 12.0802 30.7361 12.2871 31.1467 12.7009C31.6257 13.0457 31.8652 13.6319 31.8652 14.4595V24.8044C31.8652 26.4595 31.1125 27.2871 29.607 27.2871H20.1632Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="linkedin-sales-profile">
                  <img src="/assets/home-1/img/linkedin-sales-1.jpg" alt="" />
                </div>
                <h4>Alex Costa</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a gal not only five centuries, but also the leap{" "}
                </p>
                <div className="linkedin-sales-star">
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="linkedin-sales-card">
                <div className="linkedin-sales-arrow-img">
                  <svg
                    width="32"
                    height="28"
                    viewBox="0 0 32 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.91821 27.2871C2.16546 27.2871 1.61799 27.0457 1.27583 26.563C1.0021 26.0802 0.865234 25.494 0.865234 24.8044V8.97676C0.865234 6.49401 1.4127 4.63194 2.50762 3.39056C3.60254 2.14918 4.90276 1.32159 6.40828 0.907802C7.98223 0.494006 9.41932 0.287109 10.7195 0.287109C11.6776 0.287109 12.3961 0.321591 12.8752 0.390556C13.4226 0.390556 13.8674 0.459522 14.2096 0.597456V6.18366C12.9094 6.18366 12.0882 6.52849 11.746 7.21815C11.4723 7.83884 11.3354 8.45952 11.3354 9.08021V12.0802H12.3619C12.9778 12.0802 13.4911 12.2871 13.9017 12.7009C14.3807 13.0457 14.6202 13.6319 14.6202 14.4595V24.8044C14.6202 26.4595 13.8674 27.2871 12.3619 27.2871H2.91821ZM20.1632 27.2871C19.4105 27.2871 18.863 27.0457 18.5209 26.563C18.2471 26.0802 18.1103 25.494 18.1103 24.8044V8.97676C18.1103 6.49401 18.6577 4.63194 19.7526 3.39056C20.8476 2.14918 22.1478 1.32159 23.6533 0.907802C25.2273 0.494006 26.6643 0.287109 27.9646 0.287109C28.9226 0.287109 29.6412 0.321591 30.1202 0.390556C30.6677 0.390556 31.1125 0.459522 31.4546 0.597456V6.18366C30.1544 6.18366 29.3332 6.52849 28.9911 7.21815C28.7173 7.83884 28.5805 8.45952 28.5805 9.08021V12.0802H29.607C30.2228 12.0802 30.7361 12.2871 31.1467 12.7009C31.6257 13.0457 31.8652 13.6319 31.8652 14.4595V24.8044C31.8652 26.4595 31.1125 27.2871 29.607 27.2871H20.1632Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="linkedin-sales-profile">
                  <img src="/assets/home-1/img/linkedin-sales-2.jpg" alt="" />
                </div>
                <h4>Julia Hoffman</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a gal not only five centuries, but also the leap{" "}
                </p>
                <div className="linkedin-sales-star">
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="linkedin-sales-card">
                <div className="linkedin-sales-arrow-img">
                  <svg
                    width="32"
                    height="28"
                    viewBox="0 0 32 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.91821 27.2871C2.16546 27.2871 1.61799 27.0457 1.27583 26.563C1.0021 26.0802 0.865234 25.494 0.865234 24.8044V8.97676C0.865234 6.49401 1.4127 4.63194 2.50762 3.39056C3.60254 2.14918 4.90276 1.32159 6.40828 0.907802C7.98223 0.494006 9.41932 0.287109 10.7195 0.287109C11.6776 0.287109 12.3961 0.321591 12.8752 0.390556C13.4226 0.390556 13.8674 0.459522 14.2096 0.597456V6.18366C12.9094 6.18366 12.0882 6.52849 11.746 7.21815C11.4723 7.83884 11.3354 8.45952 11.3354 9.08021V12.0802H12.3619C12.9778 12.0802 13.4911 12.2871 13.9017 12.7009C14.3807 13.0457 14.6202 13.6319 14.6202 14.4595V24.8044C14.6202 26.4595 13.8674 27.2871 12.3619 27.2871H2.91821ZM20.1632 27.2871C19.4105 27.2871 18.863 27.0457 18.5209 26.563C18.2471 26.0802 18.1103 25.494 18.1103 24.8044V8.97676C18.1103 6.49401 18.6577 4.63194 19.7526 3.39056C20.8476 2.14918 22.1478 1.32159 23.6533 0.907802C25.2273 0.494006 26.6643 0.287109 27.9646 0.287109C28.9226 0.287109 29.6412 0.321591 30.1202 0.390556C30.6677 0.390556 31.1125 0.459522 31.4546 0.597456V6.18366C30.1544 6.18366 29.3332 6.52849 28.9911 7.21815C28.7173 7.83884 28.5805 8.45952 28.5805 9.08021V12.0802H29.607C30.2228 12.0802 30.7361 12.2871 31.1467 12.7009C31.6257 13.0457 31.8652 13.6319 31.8652 14.4595V24.8044C31.8652 26.4595 31.1125 27.2871 29.607 27.2871H20.1632Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="linkedin-sales-profile">
                  <img src="/assets/home-1/img/linkedin-sales-3.jpg" alt="" />
                </div>
                <h4>Angela Winc</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a gal not only five centuries, but also the leap{" "}
                </p>
                <div className="linkedin-sales-star">
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="linkedin-sales-card">
                <div className="linkedin-sales-arrow-img">
                  <svg
                    width="32"
                    height="28"
                    viewBox="0 0 32 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.91821 27.2871C2.16546 27.2871 1.61799 27.0457 1.27583 26.563C1.0021 26.0802 0.865234 25.494 0.865234 24.8044V8.97676C0.865234 6.49401 1.4127 4.63194 2.50762 3.39056C3.60254 2.14918 4.90276 1.32159 6.40828 0.907802C7.98223 0.494006 9.41932 0.287109 10.7195 0.287109C11.6776 0.287109 12.3961 0.321591 12.8752 0.390556C13.4226 0.390556 13.8674 0.459522 14.2096 0.597456V6.18366C12.9094 6.18366 12.0882 6.52849 11.746 7.21815C11.4723 7.83884 11.3354 8.45952 11.3354 9.08021V12.0802H12.3619C12.9778 12.0802 13.4911 12.2871 13.9017 12.7009C14.3807 13.0457 14.6202 13.6319 14.6202 14.4595V24.8044C14.6202 26.4595 13.8674 27.2871 12.3619 27.2871H2.91821ZM20.1632 27.2871C19.4105 27.2871 18.863 27.0457 18.5209 26.563C18.2471 26.0802 18.1103 25.494 18.1103 24.8044V8.97676C18.1103 6.49401 18.6577 4.63194 19.7526 3.39056C20.8476 2.14918 22.1478 1.32159 23.6533 0.907802C25.2273 0.494006 26.6643 0.287109 27.9646 0.287109C28.9226 0.287109 29.6412 0.321591 30.1202 0.390556C30.6677 0.390556 31.1125 0.459522 31.4546 0.597456V6.18366C30.1544 6.18366 29.3332 6.52849 28.9911 7.21815C28.7173 7.83884 28.5805 8.45952 28.5805 9.08021V12.0802H29.607C30.2228 12.0802 30.7361 12.2871 31.1467 12.7009C31.6257 13.0457 31.8652 13.6319 31.8652 14.4595V24.8044C31.8652 26.4595 31.1125 27.2871 29.607 27.2871H20.1632Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="linkedin-sales-profile">
                  <img src="/assets/home-1/img/linkedin-sales-1.jpg" alt="" />
                </div>
                <h4>Alex Costa</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a gal not only five centuries, but also the leap{" "}
                </p>
                <div className="linkedin-sales-star">
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                  <svg
                    width="40"
                    height="37"
                    viewBox="0 0 40 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3652 0.287109L24.9678 14.1068H39.8619L27.8123 22.6478L32.4148 36.4674L20.3652 27.9264L8.31564 36.4674L12.9182 22.6478L0.868576 14.1068H15.7627L20.3652 0.287109Z"
                      fill="#1DB954"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="slider-nav">
            <div className="prev">
              <svg
                width="12"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L1 7.5L8 14"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="next">
              <svg
                width="12"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 14L8 7.5L1 1"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinSales;
