import React from "react";
import  { useState } from "react";
import "./Footer.css"
export default function Footer(){
    const [message , setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault ();
        alert(`Message submitted: ${message}`)
    };
    return (
        <div className="footer">
            <div className="footer-top">

            <h2>Inspired Hospitality</h2>
            <p>True hospitality consists of giving the best of yourself to your guests</p>

            <hr/>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                <h3>Hotel Raven</h3>
                <p>Luxury at your finger tips</p>
                <form onSubmit={handleSubmit}>
                    <label>Your Feedback:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                    placeholder="We love to hear from you..."
                    rows="3" cols="30" />
                    <br />
                    <button type="submit">submit</button>
                                    </form>

                
                </div>
                <div className="footer-bottom-right">
                    <div className="footer-list">
                        <div>

                        <ul>
                            <h4>Quick Links</h4>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                        </ul>
                        </div>
                        <div>

                        <ul>
                            <h4>Rates</h4>
                            <li>Credits</li>
                            <li>Sales</li>
                            <li>Newsletter</li>
                        </ul>
                        </div>
                        <div>

                        <ul>
                            <h4>Dining</h4>
                            <li>Lounge</li>
                            <li>pool</li>
                            <li>spa</li>
                        </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}