import Image from "next/image";
import image1 from "../../public/assets/image-1.png";

const ImageSection = ({ type = "one" }) => {
	return (
		<div className={`section-image type-${type}`}>
			<div className="section-img-content-warpper" data-aos="fade-up"
            data-aos-duration="1000">
				<h1 className="section-title">Want a Subscription</h1>
				<p>We also offer Pay As You Go credits on the platform which do not require to subscribe. We also offer plans to extract up to 500k leads per month.</p>
			<button className="sign-up-btn-all">Sign up to See all offers</button>
			</div>
			<Image src={image1} alt="image one" objectFit="cover" data-aos="fade-up"
            data-aos-duration="1000"/>
		</div>
	);
};

export default ImageSection;
