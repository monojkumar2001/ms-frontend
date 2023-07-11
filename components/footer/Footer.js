import Link from "next/link";
const Footer = () => {
	return (
		<footer id="footer">
			<div className="footer-area cpt-5">
				<div className="container">
					<div className="footer-wrapper">
						<div className="footer-col">
							<div className="footer-logo">
								<img src="/assets/img/footer-logo.png" alt="" />
							</div>
							<p>Build your brand with Top Notch Music PR Agency.</p>
							<div className="email-phone">
								<p>
									<img src="/assets/img/icon/phone.svg" alt="" className="" />{" "}
									+13025977087
								</p>
								<p>
									<img src="/assets/img/icon/email.svg" alt="" className="" />{" "}
									support@musicpromotiontoday.com
								</p>
								<p>
									<img src="/assets/img/icon/location.svg" alt="" className="" />{" "}
								30N Gould St sheridan WY 82801, United States
								</p>
							</div>
						</div>

						<div className="footer-col">
							<div className="quick-link-wrapper">
								<div className="quick-link-area">
									<h4 className="footer-link-title">Company</h4>
									<ul className="footer-ul">
										<li>
										
											<Link href="/about-us" >
											<a href="" className="footer-link">
												About
											</a>
											</Link>
										</li>
										<li>
											
											<Link href="/refund-policy" >
											<a href="" className="footer-link">
												Refund Policy
											</a>
											</Link>
										</li>
										<li>
										
											<Link href="/terms" >
											<a href="" className="footer-link">
												Terms of Service
											</a>
											</Link>
										</li>
										<li>
										
											<Link href="/privacy-policy" >
											<a href="" className="footer-link">
												Privacy Policy
											</a>
											</Link>
										</li>
									</ul>
								</div>
								<div className="quick-link-area">
									<h4 className="footer-link-title">OTHERS</h4>
									<ul className="footer-ul">
										<li>
								
											<Link href="/contact" >
											<a href="" className="footer-link">
												Contact Us
											</a>
											</Link>
										</li>
										{/* <li>
											<a href="/blog" className="footer-link">
												Blog
											</a>
										</li> */}
										<li>
											<Link href="/faq" >
											<a href="" className="footer-link">
												FAQ
											</a></Link>
										</li>
										{/* <li>
											<a href="" className="footer-link">
												Work With Us
											</a>
										</li> */}
									</ul>
								</div>
							</div>
						</div>

						<div className="footer-col">
							<h4 className="footer-link-title">Get In Touch</h4>
							<p>
								Get the ideas, tools and tips you need to grow your sound
								straight to your inbox.
							</p>

							<div className="subscribe-form">
								<form action="">
									<div className="input-group">
										<input
											type="text"
											placeholder="Enter Your Email"
											className="subscribe-input"
										/>
										<button type="submit" className="submit-button">
											Subscribe
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="social-area">
						<p>Follow Us On:</p>
						<ul className="social-ul">
							<li>
								<a href="https://facebook.com/musicpromotiontoday" target={"_blank"} className="social-link">
									<img src="/assets/img/icon/facebook.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/musicpromotiontoday" target={"_blank"} className="social-link">
									<img src="/assets/img/icon/twitter.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="https://linkedin.com/musicpromotiontoday" target={"_blank"} className="social-link">
									<img src="/assets/img/icon/linkind.svg" alt="" />
								</a>
							</li>
							<li>
								<a href="https://pinterest/musicpromotiontoday" target={"_blank"} className="social-link">
									<img src="/assets/img/icon/pintarest.svg" alt="" />
								</a>
							</li>
						</ul>
					</div>
					<div className="payment-method">
						<img src="/assets/img/7.png" alt="image not found" />
					</div>
				</div>
			</div>

			<div className="copyright-sec">
				<div className="container">
					<div className="copy-area">
						<p>© 2021 Music Promotion Today | All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
