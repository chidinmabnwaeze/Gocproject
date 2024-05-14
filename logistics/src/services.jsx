import React from "react";
import { illustrations } from "./constant/asset";


const Service = [
  {
    img: illustrations,
    // img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
  {
    img: ".illustrations/Frame 139.png",
    title: "Explore Various Services",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est veniamdolorum aliquam redc",
  },
];

export default function Services() {
  return (
    <div className="services-section">
    <div className="heading">
      <h3>Why Choose Us</h3>
      </div>
    <div className="services">
      {Service.map((service, index) => (
        <div className="service-card" key={index}>
          <img className="image" src={service.img} alt="" />
          <h4>{service.title}</h4>
          <p>{service.info}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
