import ReactPlayer from "react-player/youtube";

const VideoPlayer = () => {
	return (
		<div className="player-container">
			<h1 className="heading">VIdeo Introductory</h1>
			<p className="description">
				An in-depth breakdown of our promotional services
			</p>
			<div style={{ maxWidth: 980, margin: "0 auto" }}>
				<div className="player-wrapper">
					<iframe
						className="video"
						src="https://www.youtube.com/embed/ONyrc0jHb3A"
						title="YouTube video player"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
