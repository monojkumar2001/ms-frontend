import Accordion from "../components/accordion/Accordion";
import AccordionHeader from "../components/accordion/AccordionHeader";
import AppLayout from "../components/layout/AppLayout";
import Faq from "react-faq-component";
const FaqPage = () => {
	const data = {
		rows: [
		  {
			title: "Metaverse development: what is it?",
			content: `You can design your own virtual world setting to hold conventions, meetings, seminars, concerts, or even to start your own real-world company there.`,
		  },
		  {
			title: "How much does our metaverse development service cost?",
			content: `To get a price on your metaverse development project, get in touch with our team. Your specified features, functionalities, and other factors will affect the price. `,
		  },
		  {
			title: "What are the benefits of investing in metaverse platforms?",
			content: `Experts claim that the metaverse has a trillion-dollar industry thus has a promising future. If you work in such a growing field, you will be noticed by others. Be a pioneer in the field!`,
		  },
		  {
			title: "What can a metaverse development company do for you?",
			content: `What can a metaverse development company do for you?`,
		  },
		],
	  };
	
	  const styles = {
		titleTextColor: "blue",
		rowTitleColor: "blue",
	  };
	return (
		<div className="faq">
			<div className="container" data-aos="fade-up"
            data-aos-duration="1000">
				<h1 className="heading">
				Frequently Asked Questions <br /> <span className="focus">FAQs</span>
				</h1>
				<p className="body-text">
					Here you can read the frequently asked questions about our music
					promotion service, or you can scroll down below to send us message.
					Please keep in mind that we might take up to 1 business day to reply
					to your inquiry.
				</p>
			<div className="faq-qes-con">
				<div className="faq-left">
					<div className="faq-img">
						<img src="/assets/faq/faq-img.png" alt="" />	
					</div>
				</div>
				<div className="content">
					<Faq data={data} styles={styles} />
				</div>
			</div>
			</div>
		</div>
	);
};

FaqPage.layout = AppLayout;
FaqPage.title = "Frequently Asked Question";

export default FaqPage;
