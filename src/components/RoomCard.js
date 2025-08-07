import React from "react";
import "./RoomCard.css";

export default function RoomCard({image, title, price}) {
    return(
        <div className="room-card">
            <img src ={image} alt={title} />
            <h3>{title}</h3>
            <p>${price} / night</p>
            <button>Book Now</button>
</div>
    )
}