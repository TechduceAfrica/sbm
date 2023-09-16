import React from "react";

import EligibilityCriteriaItem from "./EligibilityCriteriaItem";

const criteriasleft = [
  {
    number: "1",
    text: "Proven track record in community management, reputation building, and crisis communication.",
  },
  {
    number: "2",
    text: "Deep understanding of social media platforms, and ability to create engaging content",
  },
];

const criteriasright = [
  {
    number: "3",
    text: "Analyze data, optimize campaigns, and foster meaningful connections with audiences.",
  },
  {
    number: "4",
    text: "Maintain a strong brand presence and ensure customer satisfaction.",
  },
];

export default function EligibilityCriteria() {
  return (
    <div className="container-width t-b-padding">
      <section className="criteria-section">
        <div>
          <h3>Eligibility Criteria.</h3>
        </div>
        <div className="criteria-wrapper">
          <div>
            {criteriasleft.map((criterias, index) => (
              <EligibilityCriteriaItem
                key={index}
                number={criterias.number}
                text={criterias.text}
              />
            ))}
          </div>
          <div>
            {criteriasright.map((criterias, index) => (
              <EligibilityCriteriaItem
                key={index}
                number={criterias.number}
                text={criterias.text}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
