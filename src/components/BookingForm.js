import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";


export default function BookingForm(){
    const [formData, setFormData] = useState({
        checkIn:"",
        checkOut: "",
        guest: 1,
    });

    const handleChange = (e) => {
        setFormData ({...formData,[e.target.name]: e.target.value});

    };

    const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking from ${formData.checkIn} to ${formData.checkOut} for ${formData.guests} guest(s)`);
  };

    return (    
    <form className="booking-form" onSubmit={handleSubmit}>
              {/* <DatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        selectsStart
        startDate={checkIn}
        endDate={checkOut}
        placeholderText="Check-In Date"
        className="date-input"
      /> */}



        <div className="checkIn"><h4>Check in</h4>
      <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
      </div>
      <div className="checkOut"><h4>Check Out</h4>
      <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
      </div>
      <div className="guest"><h4>Guests</h4>
      <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />
      </div>
      <div className="form-button">
      <button type="submit">Check Availability</button>
      </div>
   

{/* <DatePicker
       selected={checkOut}
       onChange={(date) => setCheckOut(date)}
       selectsEnd
       startDate={checkIn}
       endDate={checkOut}
       minDate={checkIn}
       placeholderText="Check-Out Date"
       className="date-input"
     /> */}
      </form>
  );


}