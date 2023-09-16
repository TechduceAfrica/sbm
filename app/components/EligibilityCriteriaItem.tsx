import React from "react";

export default function EligibilityCriteriaItem(props: any) {
  return (
    <div className="criteria-each">
      <div className="criteria-number">
        <span>{props.number}</span>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
