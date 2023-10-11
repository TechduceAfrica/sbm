import React from "react";

export default function SlidePhoneSingle(props: any) {
  
  return (
    <div className="slide-phone-card">
      <div className="slide-phone-card-img-wrapper">
        <img src={props.src} alt={props.clientname} title={props.clientname} />
      </div>
    </div>
  );
}