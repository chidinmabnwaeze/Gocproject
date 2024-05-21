import React from "react";
import Button from "../components/button"
import { rec1,rec2 ,rec3 , rec4 } from "../constant/asset";

const dashboard =[
  {
    img: rec1,
    title: "Parcel Delivery",
    subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et."
    
  },
  {
    mg: rec1,
    title: "Parcel Delivery",
    subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et."
    
  },
   {
    mg: rec1,
    title: "Parcel Delivery",
    subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et."
    
  },
  {
    mg: rec1,
    title: "Parcel Delivery",
    subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et."
    
  }
]






export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="actions">
      {dashboard.map((dashBoard, index) =>(
        <div className="action-card" key ={index}>

        <img src="" alt="" />

        {/* <div className="action-card-text"> */}
         
            <h3 className="action-head">{dashBoard.title}</h3>
            <p className="action-text">{dashBoard.subject}
                </p>
        {/* </div> */}
        <Button/>
    </div>
      )) }
        

      </div>
    </div>
  );
}
