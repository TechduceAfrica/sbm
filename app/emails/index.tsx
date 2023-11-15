import React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
  timeStamp: string;
}

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const bannerStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  borderRadius: "10px 10px 0 0",
};

const textStyle = {
  fontSize: "18px",
  lineHeight: "1.5",
  color: "#333",
  maxWidth: "600px",
};

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "20px 0",
};

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  email,
  message,
  timeStamp,
}) => (
  <div style={containerStyle}>
    <img
      src="https://assets-social-brand-managers.netlify.app/og%20image/og-image.webp"
      alt="SBM Banner"
      style={bannerStyle}
    />
    <h1 style={textStyle}>
      Hi <strong>{firstName}</strong>, welcome to Social Brand Managers where we
      help you level up your business.
    </h1>
    <p style={textStyle}>
      We have received your message, and our CRM team will be with you shortly.
      In the meantime, you can check out our blog for fun-sized helpful content
      to upscale your brand.
    </p>
    <a href="https://socialbrandmanagers.com/blog" style={buttonStyle}>
      Visit Blog
    </a>
  </div>
);
