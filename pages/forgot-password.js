import AppLayout from "../components/layout/AppLayout";
import { useState } from "react";
const FortgotPasswordPage = () => {
	const [type, setType] = useState("text");
	const toggleType = () => {
		if (type === "text") {
			setType("password");
		} else {
			setType("text");
		}
	};

	return (
		<div className="forgot-password">
			<div className="container">
			<div className="forgot-left">
				<div className="forgot-img">
				<img src="/assets/login-from/forget.png" alt="" />
				</div>
			</div>
			<div className="forgot-right">
					<h1 className="heading">
					Forgot Password
				</h1>
				<p className="body-text">
					Please enter your <strong>email address </strong>or{" "}
					<strong>phone number</strong> to reset your password
				</p>
				<form className="forgot-password-form">
					<div className="form-field">
						<label htmlFor="name">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="yourusername@example.com"
						/>
					</div>

					<button type="submit">SEND</button>
				</form>
			</div>
			</div>
		</div>
	);
};

FortgotPasswordPage.layout = AppLayout;
FortgotPasswordPage.title = "Forgot Password";

export default FortgotPasswordPage;
