import Image from "next/image";
import Link from "next/link";

const PackageCard = ({
  package_type,
  cur_price,
  package_lead,
  includes,
  details,
  package_dis,
  index,
  sliderValue,
}) => {
  return (
    <div className="package-card">
      <div className="package-type">
        <h4>{package_type}</h4>
        <p>{package_dis}</p>
      </div>
      <div className="pricing-info">
        <p className="price">${cur_price * sliderValue}</p>
        <p>Per Month</p>

        <div className="package_lead">{package_lead} Lead/month</div>
      </div>
      <ul className="upper-details">
        {includes.map((item) => (
          <li key={item} className="list-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="11.5" fill="#D9FFE6" />
              <path
                d="M7 12L10.1579 16L17 8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <p className="item-text">{item}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/order-details"
        target={"_blank"}
       
      >
       <button className="purchase-btn"> Purchase</button>
      </Link>
    </div>
  );
};

export default PackageCard;
