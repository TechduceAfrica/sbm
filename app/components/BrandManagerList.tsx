import React from "react";

export default function BrandManagerList(props: any) {
  return (
    <div className="brandmanagerlist-container">
      <div className="brandmanagerlist-image">
        <img src={props.profileimg} alt={props.username} />
      </div>
      <div>
        <p>{props.username}</p>
      </div>
      <div>
        <div className="pri-btn">
          <a href={props.userprofilelink}>
            <span>View profile</span>
          </a>
        </div>
        <div className="sec-btn">
          <a href={props.userportfoliolink}>
            <span>See portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
