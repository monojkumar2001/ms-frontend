import AppLayout from "../components/layout/AppLayout";

const VerifyPage = () => {
	return (
		<div className="verify">
			<div className="container">
				<h1 className="heading">
					Verify <span className="focus">Code</span>
				</h1>
				<p className="body-text">
					Check your SMS inbox, we have sent you the code at{" "}
					<strong>+0 000 000 0000</strong>.
				</p>

				<form className="otp-form">
					<div className="field-wrapper">
						<input type="text" name="code" id="code" />
						<input type="text" name="code" id="code" />
						<input type="text" name="code" id="code" />
						<input type="text" name="code" id="code" />
					</div>

					<button type="submit">SEND</button>
				</form>
				<p className="timer">(00:58)</p>
				<p className="resend-text">Didn’t not received the code?</p>
				<button className="resend-btn">Resend Code</button>
			</div>
		</div>
	);
};

VerifyPage.layout = AppLayout;
VerifyPage.title = "Verify Code";

export default VerifyPage;
