import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import ReviewCard from "@components/cards/ReviewCard";

SwiperCore.use([Navigation, Pagination]);

const ReviewSlider = () => {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	return (
		<div className="review-slider">
			<div ref={navigationPrevRef} className="sw-btn-prev">
				<svg
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.2929 21.0411C10.6834 21.4316 11.3166 21.4316 11.7071 21.0411C12.0976 20.6506 12.0976 20.0174 11.7071 19.6269L4.08023 12L20.334 12C20.8863 12 21.334 11.5523 21.334 11C21.334 10.4477 20.8863 10 20.334 10L4.08153 10L11.7071 2.37442C12.0976 1.9839 12.0976 1.35074 11.7071 0.960212C11.3166 0.569688 10.6834 0.569688 10.2929 0.960212L0.959559 10.2935"
						fill="#1DB954"
					/>
					<path
						d="M0.957767 10.2953C0.569036 10.686 0.569633 11.3178 0.95956 11.7078L10.2929 21.0411"
						fill="#1DB954"
					/>
				</svg>
			</div>
			<div ref={navigationNextRef} className="sw-btn-next">
				<svg
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.7071 0.958909C11.3166 0.568385 10.6834 0.568385 10.2929 0.958909C9.90237 1.34943 9.90237 1.9826 10.2929 2.37312L17.9198 10H1.66602C1.11373 10 0.666016 10.4477 0.666016 11C0.666016 11.5523 1.11373 12 1.66602 12H17.9185L10.2929 19.6256C9.90237 20.0161 9.90237 20.6493 10.2929 21.0398C10.6834 21.4303 11.3166 21.4303 11.7071 21.0398L21.0404 11.7065"
						fill="#1DB954"
					/>
					<path
						d="M21.0422 11.7047C21.431 11.314 21.4304 10.6822 21.0404 10.2922L11.7071 0.958909"
						fill="#1DB954"
					/>
				</svg>
			</div>

			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = navigationPrevRef.current;
					swiper.params.navigation.nextEl = navigationNextRef.current;
				}}
				pagination={{
					el: ".new-pagination",
					clickable: true,
				}}
				speed={2000}
				preventClicks={false}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					// when window width is >= 640px
					// 640: {
					// 	slidesPerView: 2,
					// 	spaceBetween: 40,
					// },
					// 1024: {
					// 	slidesPerView: 3,
					// 	spaceBetween: 40,
					// },
				}}
			>
				<SwiperSlide>
					<ReviewCard />
				</SwiperSlide>
				<SwiperSlide>
					<ReviewCard />
				</SwiperSlide>
				<SwiperSlide>
					<ReviewCard />
				</SwiperSlide>
				<SwiperSlide>
					<ReviewCard />
				</SwiperSlide>
			</Swiper>

			<div className="new-pagination flex items-center justify-center my-4"></div>
		</div>
	);
};

export default ReviewSlider;
