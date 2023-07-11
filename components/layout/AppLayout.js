import Footer from "../footer/Footer";
import Header from "../header/Header"
const AppLayout = ({ children }) => {
	return (
		<>
			<Header/>
			{children}
			<Footer />
		</>
	);
};

export default AppLayout;
