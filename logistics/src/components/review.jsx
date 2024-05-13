import React from "react";

export default function Reviews (){
   return(
    <div className="reviews">
    <h2 className="review-title">What our clients say about us !</h2>
    <p className="review-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Officia ipsam voluptatibus recusandae ut, natus commodi reiciendis sunt mollitia minus maiores eaque sint at quod id dolores exercitationem accusamus debitis inventore.</p>
   
   <div className="review-cards">
    <div className="review-card">
        <img className="profile-pic" src="" alt="" />
        <p className="subject">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Perferendis, culpa? Quae, maiores suscipit? Placeat minima a sequi repudiandae molestiae dolorum sint esse alias odit maiores? 
            Accusamus explicabo aliquid cupiditate odit?
        </p>
        <p className="name">Matt Joe</p>
        <p className="status">Client</p>
    </div>
   </div>
   </div>
   )
}