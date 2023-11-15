"use client";
import { Body } from "@react-email/body";
import { Column } from "@react-email/column";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Row } from "@react-email/row";
import { Button } from "@react-email/button";
import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phoneNumber: string;
  message: string;
  timeStamp: string;
}

const baseUrl = "https://assets-social-brand-managers.netlify.app";

const blogLink = "https://socialbrandmanagers.com/blog";

const loginDate = new Date();
const formattedDate = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeStyle: "short",
}).format(loginDate);

const divider = {
  margin: "30px 0",
};
const footer = {
  width: "680px",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerLink = {
  display: "inline-block",
  color: "#9199a1",
  textDecoration: "underline",
  fontSize: "12px",
  marginRight: "10px",
  marginBottom: "0",
  marginTop: "8px",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

const footerHeart = {
  borderRadius: "1px",
  border: "1px solid #d6d9dc",
  padding: "4px 6px 3px 6px",
  fontSize: "11px",
  lineHeight: "11px",
  fontFamily: "Consolas,monospace",
  color: "#e06c77",
  maxWidth: "min-content",
  margin: "0 0 32px 0",
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
  timeStamp,
}) => (
  <Html>
    <Head />
    <Preview>Welcome to Social Brand Managers</Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Section className="mt-[32px]">
            <Img
              src={`${baseUrl}/og%20image/og-image.webp`}
              width="600"
              height="300"
              alt="Social Brand Managers"
              className="my-0 mx-auto"
            />
          </Section>
          <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            Hi <strong>{firstName}</strong> welcome to Social Brand Managers
            where we help you level up your business.
          </Heading>
          <Text className="text-black text-[14px] leading-[24px]">
            We have Received your message and our CRM team will be with you
            shortly.
          </Text>
          <Text className="text-black text-[14px] leading-[24px]">
            In the mean time you can check out our blog for fun-sized helpful
            contents to upscale your brand.
          </Text>
          <Section className="text-center mt-[32px] mb-[32px]">
            <Button
              className="bg-[#0048a0] rounded text-white text-[12px] font-semibold no-underline text-center"
              href={blogLink}
            >
              Visit Blog
            </Button>
          </Section>
          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Text className="text-[#666666] text-[12px] leading-[24px]">
            This onboarding email was intended for{" "}
            <span className="text-black">{firstName} </span>.
          </Text>{" "}
          <Section style={footer}>
            <Text style={footerText}>
              You're receiving this email because your Stack Overflow activity
              triggered this tip or reminder.
              {formattedDate}
            </Text>

            <Link href="/" style={footerLink}>
              Unsubscribe from emails like this{" "}
            </Link>
            <Link href="/" style={footerLink}>
              Edit email settings{" "}
            </Link>
            <Link href="/" style={footerLink}>
              Contact us
            </Link>
            <Link href="/" style={footerLink}>
              Privacy
            </Link>

            <Hr style={footerDivider} />

            <Img
              width={111}
              src={`${baseUrl}/logo%20and%20icon/SBM%20Favicon%20(2).png`}
            />
            <Text style={footerAddress}>
              <strong>Stack Overflow</strong>, 110 William Street, 28th Floor,
              New York, NY 10038
            </Text>
            <Text style={footerHeart}>{"<3"}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
