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
			placement="top"
			key={index}
			overlayInnerStyle={{
				backgroundColor: "#FFAE34",
				padding: "14px 20px",
				fontWeight: 500,
				fontSize: 14,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#fff",
			}}
		>
			<Handle
				className="rc-slider-handle"
				style={{ border: "#FFAE34" }}
				value={value}
				{...restProps}
			/>
		</SliderTooltip>
	);
};

const wrapperStyle = { width: 400, margin: 50 };

const Test = () => {
	return (
		<div>
			<div style={wrapperStyle}>
				<Slider
					min={1}
					max={10}
					marks={{
						1: "",
						2: 2,
						3: 3,
						4: 4,
						5: 5,
						6: 6,
						7: 7,
						8: 8,
						9: 9,
						10: "Enterprise",
					}}
					onChange={(v) => console.log(v)}
					railStyle={{ background: "#E5E5E5" }}
					trackStyle={{ background: "#FFAE34" }}
					activeDotStyle={{ background: "#FFAE34", border: "none" }}
					tipFormatter={(value) => `${value}%`}
					handle={handle}
				/>
			</div>
		</div>
	);
};

export default Test;
