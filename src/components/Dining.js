import React from "react";
import "./Dining.css";

export default function Dining(){
    return (
     <div className="container">
        <div className="left">
            <h2> <span>Fine Dining & <br /></span> Exceptional Amenities</h2>
            <div className="dining-button">
                <div className="dining-butts">
                <h2>Lounge</h2>
                <p>Welcome to the Lounge</p>
                </div>
                <div className="dining-butts">
                <h2>Spa</h2>
                <p>Refresh and Relax</p>
                </div>
                <div className="dining-butts">
                <h2>Fitness</h2>
                <p>Get your body in shape</p>
                </div>
                <div className="dining-butts">
                <h2 >Infinity Pool</h2>
                <p>Swimming is passion</p>
                </div>
            </div>
        </div>
     <div className="right">
        <div className="right-header">

        <p>
        Nestled in the picturesque Cuyamaca Mountains in East County, Hotel Raven is famous for its Olympic-sized pool and flowers from local orchards along with a rich California gold rush history
        </p>
        </div>
        <div className="right-box">
            <p>Hotel Raven is a historic Hotel in the mountains, 60 miles east of downtown San Diego. </p>
             
             <img src = "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fHww" alt="Dining-img" />

        </div>

        </div>

    
    </div>
    )
}