import { Fragment, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

// Animate on Scroll
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

// RC Slider Styles
// import "rc-tooltip/assets/bootstrap.css";
import "rc-slider/assets/index.css";

// Import Global Style
import "../styles/globals.scss";

// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
// axios.defaults.headers.post['Accept'] = 'application/json'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
	const title = Component.title || "Music Promotion Today";
	const Layout = Component.layout || Fragment;

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default MyApp;
