const ReviewCard = () => {
	return (
		<div className="review-card">
			<div className="client-info">
				<img className="client-img" src="/assets/review/img/1.png" alt="" />
				<h2 className="name">Wiliam Maher</h2>
				<p className="review">
					the best platform I've ever visited, here I can reach a wider market
					and with attractive competitors. the many communities here make the
					platform more lively. and more importantly.
				</p>

				<div className="quote">
					<svg
						viewBox="0 0 37 29"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M27.1709 0L19.2217 4.29688C22.1579 9.59635 23.6797 14.5557 23.7871 19.1748V28.6816H37V19.8193C36.9642 16.5609 35.9974 13.0697 34.0996 9.3457C32.2018 5.58594 29.8923 2.4707 27.1709 0ZM8.31836 0L0.369141 4.29688C3.30534 9.59635 4.82715 14.5557 4.93457 19.1748V28.6816H18.1475V19.8193C18.1117 16.5609 17.1449 13.0697 15.2471 9.3457C13.3493 5.58594 11.0397 2.4707 8.31836 0Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
