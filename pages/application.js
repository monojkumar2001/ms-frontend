import AppLayout from "../components/layout/AppLayout";
const ApplicationPage = () => {
	return (
		<div id="application">
			<div className="container">
				<h1 className="heading">
					Fill out the application below to receive more{" "}
					<span className="focus">information</span>
				</h1>
				<form className="application-form">
				<div className="form-list">
				<div className="form-field-item">
					<div className="form-field">
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter Your name"
						/>
					</div>
					<div className="form-field">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your Email"
						/>
					</div>
					</div>
					<div className="form-field-item">
					<div className="form-field">
						<label htmlFor="name">Playlist Link</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter your playlist url"
						/>
					</div>
					<div className="form-field">
						<label htmlFor="name">Social Media Link</label>
						<input
							type="text"
							name="social-media-link"
							id="social-media-link"
							placeholder="Your social media link"
						/>
					</div>
					</div>
				</div>
					
					<div className="form-field">
						<label htmlFor="name">Additional Information</label>
						<textarea
							rows="6"
							placeholder="Enter any additional information about your playlists and placement criterias"
						/>
					</div>
					<button type="submit">Submit your application</button>
				</form>
			</div>
		</div>
	);
};

ApplicationPage.layout = AppLayout;
ApplicationPage.title = "Fill out this application";

export default ApplicationPage;
