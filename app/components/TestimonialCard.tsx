import React from "react";

export default function TestimonialCard(props: any) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-img-wrapper">
        <img src={props.imgurl} alt={props.clientname} />
      </div>
      <div>
        <h5>{props.clientname}</h5>
      </div>
      <div>
        <p>{props.testimony}</p>
      </div>
    </div>
  );
}
