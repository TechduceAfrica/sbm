import React from "react";

export default function BrandManagerList(props: any) {
  return (
    <div className="brandmanagerlist-container">
      <div className="brandmanagerlist-image">
        <img src={props.profileimg} alt={props.username} title={props.username} />
      </div>
      <div>
        <p>{props.username}</p>
      </div>
      <div>
        <div className="pri-btn">
          <a href={props.userprofilelink} title="View profile">
            <button>View profile</button>
          </a>
        </div>
        <div className="sec-btn">
          <a href={props.userportfoliolink} title="See portfolio">
            <button>See portfolio</button>
          </a>
        </div>
      </div>
    </div>
  );
}
