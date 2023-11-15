// import { Body } from "@react-email/body";
// import { Column } from "@react-email/column";
// import { Container } from "@react-email/container";
// import { Head } from "@react-email/head";
// import { Heading } from "@react-email/heading";
// import { Hr } from "@react-email/hr";
// import { Html } from "@react-email/html";
// import { Img } from "@react-email/img";
// import { Link } from "@react-email/link";
// import { Preview } from "@react-email/preview";
// import { Section } from "@react-email/section";
// import { Text } from "@react-email/text";
// import { Row } from "@react-email/row";
// import { Button } from "@react-email/button";
// import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phoneNumber: string;
  message: string;
  timeStamp: string;
}

// const baseUrl = "https://assets-social-brand-managers.netlify.app";

// const blogLink = "https://socialbrandmanagers.com/blog";

// const loginDate = new Date();
// const formattedDate = new Intl.DateTimeFormat("en", {
//   dateStyle: "long",
//   timeStyle: "short",
// }).format(loginDate);

// const divider = {
//   margin: "30px 0",
// };
// const footer = {
//   width: "680px",
//   margin: "32px auto 0 auto",
//   padding: "0 30px",
// };

// const footerDivider = {
//   ...divider,
//   borderColor: "#d6d8db",
// };

// const footerText = {
//   fontSize: "12px",
//   lineHeight: "15px",
//   color: "#9199a1",
//   margin: "0",
// };

// const footerLink = {
//   display: "inline-block",
//   color: "#9199a1",
//   textDecoration: "underline",
//   fontSize: "12px",
//   marginRight: "10px",
//   marginBottom: "0",
//   marginTop: "8px",
// };

// const footerAddress = {
//   margin: "4px 0",
//   fontSize: "12px",
//   lineHeight: "15px",
//   color: "#9199a1",
// };

// const footerHeart = {
//   borderRadius: "1px",
//   border: "1px solid #d6d9dc",
//   padding: "4px 6px 3px 6px",
//   fontSize: "11px",
//   lineHeight: "11px",
//   fontFamily: "Consolas,monospace",
//   color: "#e06c77",
//   maxWidth: "min-content",
//   margin: "0 0 32px 0",
// };

const buttonStyle = {
  backgroundColor: "#3498db", // Blue color
  color: "#ffffff", // White text
  width: "100px",
  height: "50px",
  borderRadius: "5px", // Add rounded corners if desired
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
  timeStamp,
}) => (
  <div>
    <img
      src="https://assets-social-brand-managers.netlify.app/og%20image/og-image.webp"
      alt="SBM Banner"
      width={500}
      height={300}
    />
    <h1>
      Hi <strong>{firstName}</strong>, welcome to Social Brand Managers where we
      help you level up your business.
    </h1>
    <h4>
      We have Received your message and our CRM team will be with you shortly.
    </h4>
    <h4>
      {" "}
      In the mean time you can check out our blog for fun-sized helpful contents
      to upscale your brand.
    </h4>
    <br />
    <a href="https://socialbrandmanagers.com/blog">
      <button style={buttonStyle}>Visit Blog</button>
    </a>
  </div>
);
