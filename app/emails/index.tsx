import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phoneNumber: string;
  message: string;
  timeStamp: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,email, message, timeStamp
}) => (
  <div>
    <img src="https://assets-social-brand-managers.netlify.app/og%20image/og-image.webp" alt="SBM Banner" width={100} height={50}/>
    <h4>Here are the details of your message to us for reference purposes</h4>
          <p><strong>Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Time:</strong> ${timeStamp}</p>
  </div>
);
