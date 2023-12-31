"use client";
import React, {useState, useRef} from "react";

export default function PortfolioItem(props: any) {
  const[showPopup, setShowPopup] = useState(false);

  const popupRef = useRef(null);

  const togglePopup =() => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       showPopup &&
  //       popupRef.current &&
  //       !popupRef.current.contains(event.target as Node) &&
  //       event.target !== popupRef.current
  //     ) {
  //       closePopup();
  //     }
  //   };
  
    // Attach the event listener to the document
    // document.addEventListener('mousedown', handleClickOutside);
  
    // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [showPopup]);

  return (
    <div className="portfolio-card">
      <h4>{props.sbmprojectname}</h4>
      <div className="portfolio-card-name">
        {/* <h5>{props.clientname}</h5> */}
        <p>Client</p>
      </div>
      <div className="portfolio-card-data">
        <p className="portfolio-card-dec">{props.projectdescription}</p>
        <a href="#" title={props.sbmprojectname} 
            onClick={togglePopup}>See More</a>
      </div>
      <div className="portfolio-card-img">
        <img src={props.imageurl} alt={props.sbmprojectname} title={props.sbmprojectname} />
      </div>
      <div ref={popupRef} className={showPopup ? `portfolio-popup-bg ${"showpopup"}`  : `${"closepopup"} portfolio-popup-bg`}>
        <div className="portfolio-popup-wrapper" onClick={closePopup}>
          <div className="portfolio-popup-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
              <path 
                  d="M14.5835 14.5833L35.4168 35.4166M14.5835 35.4166L35.4168 14.5833" 
                  stroke="#333333" 
                  stroke-width="4" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="portfolio-popup-container">
            <div className="portfolio-popup-text">
                <h4>
                  {props.sbmprojectname}
                </h4>
                {/* <div className="divider"></div>
                <p>
                  {props.projectdescription}
                </p> */}
                <div className="divider"></div>
                <h5>
                    What We Did
                </h5>
                <p>
                  {props.whatwedid}
                </p>
                <div className="divider"></div>
                <div className="portfolio-popup-year">
                    <h5>Year</h5>
                    <h5>
                        {props.projectyear}
                    </h5>
                </div>
                <div className="divider"></div>
                <div className="portfolio-popup-social">
                  <h5>Handle</h5>
                  <a href={props.url} title={props.projecthandle} target="_blank">
                      {props.projecthandle}
                  </a>
                </div>
            </div>
            <div className="portfolio-popup-img">
                <img src={props.projectimgslideone} alt={props.sbmprojectname} title={props.sbmprojectname} />
                <img src={props.projectimgslidetwo} alt={props.sbmprojectname} title={props.sbmprojectname} />
                <img src={props.projectimgslidethree} alt={props.sbmprojectname} title={props.sbmprojectname} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
