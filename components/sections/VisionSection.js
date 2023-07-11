const VisionSection = ({ type = "" }) => {
	return (
		<section id="vision" className={`type-${type}`}>
			<div className="container">
				<div className="vision-wrapper">
					<div className="vision-left" data-aos="fade-up"
            data-aos-duration="1000">
						<h2 className="vision-title">We are here to grow your channel</h2>

						<p className="vision-des">
						Our vision is to give talented independent music artists a possibility to get their music discovered by the right audiences through the best visual content &  marketing strategies. These will expand the reach of their music to viral influencers, hot playlists, record labels & radio stations.
							<br />
							Whether you make pop-rock or instrumental music, you only pay us to reach 100% active real listeners, influencers and curators who will dig your music.
						</p>
					</div>

					<div className="vision-right" data-aos="fade-up"
            data-aos-duration="1000">
						<img src="/assets/img/4.svg" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default VisionSection;
