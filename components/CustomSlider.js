import React from "react";
import Slider, { SliderTooltip } from "rc-slider";

const { Handle } = Slider;

const handle = (props) => {
	const { value, dragging, index, ...restProps } = props;
	return (
		<SliderTooltip
			prefixCls="rc-slider-tooltip"
			overlay={`${value} %`}
			visible={dragging}
			placement="bottom"
			key={index}
			overlayInnerStyle={{
				padding: "14px 20px",
				fontWeight: 500,
				fontSize: 14,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#fff",
			}}
		>
			<Handle className="rc-slider-handle" value={value} {...restProps} />
		</SliderTooltip>
	);
};

const wrapperStyle = {
	maxWidth: 800,
	width: "90%",
	margin: "0px auto 100px auto",
};

const CustomSlider = ({ setSliderValue }) => {
	return (
		<div>
			<div style={wrapperStyle} data-aos="fade-up"
            data-aos-duration="1000">
				<Slider
					min={1}
					max={10}
					marks={{
						1: "",
						2: 2,
						3: "",
						4: 4,
						5: "",
						6: 6,
						7: "",
						8: 8,
						9: "",
						10: "Enterprise",
					}}
					onChange={(v) => setSliderValue(v)}
					tipFormatter={(value) => `${value}%`}
					handle={handle}
				/>
			</div>
		</div>
	);
};

export default CustomSlider;
