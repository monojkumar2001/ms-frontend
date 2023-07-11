import LoginForm from "../auth/LoginForm";
import Modal from "react-modal";

const customStyles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0 ,0.2)",
		zIndex: 10000000,
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

const LoginModal = ({ handleModal, modalIsOpen }) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={handleModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<LoginForm />
		</Modal>
	);
};

export default LoginModal;
