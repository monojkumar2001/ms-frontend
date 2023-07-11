import ReviewSlider from "@components/slider/ReviewSlider";

const ReviewSection = ({ type = "one" }) => {
	return (
		<section id="review" className={`type-${type}`}>
			<div className="review-container">
				<h1 className="heading">Our Clients Review</h1>
				<p className="description">
					We Are Glad To Hear From People Their Positive Feedback About Our
					Service.
				</p>
				<ReviewSlider />
			</div>
		</section>
	);
};

export default ReviewSection;
