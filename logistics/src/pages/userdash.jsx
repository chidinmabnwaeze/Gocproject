import react from "react";
import Button from "../components/button"

const dashboard =[
  {
    img: "",
    title: "Parcel Delivery",
    subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et."
  },
  {
    
  }
]






export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="actions">

        <div className="action-card">
            <img src="" alt="" />

            <div className="action-card-text">
                <h3 className="action-head">Parcel Delivery</h3>
                <p className="action-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis. 
                    Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et.
                    </p>
            </div>
            <Button/>
        </div>

      </div>
    </div>
  );
}
