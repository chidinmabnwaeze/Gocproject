import React from "react";
// import "./illustrations/"
const Service = [
  {
    img: "./illustrations/Frame 139.png",
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
    <div className="services">
      {Service.map((service, index) => (
        <div className="services-card" key={index}>
          <img className="image" src={service.img} alt="" />
          <p>{service.title}</p>
          <p>{service.info}</p>
        </div>
      ))}
    </div>
  );
}
