import React from "react";

export default function HiddenCard({picture, first_name, last_name, birthday, country, phone}) {
  return (
    <div className="hidden-card">
        <div className="hidden-content">
            <img src={picture} alt="photo" />
            <ul>
                <li>First Name: {first_name}</li>
                <li>Last Name: {last_name}</li>
                <li>Birthday: {birthday}</li>
                <li>Phone: {phone}</li>
                <li>Country: {country}</li>
            </ul>
        </div>
      
    </div>
  );
}