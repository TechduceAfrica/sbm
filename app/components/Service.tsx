"use client";
import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated import
import { motion } from "framer-motion";

interface ServiceData {
  title: string;
  features: string[];
  benefits: string[];
}

interface ServiceProps {
  title: string;
  text: string;
  image: string;
  url: string;
}

// Define the Service component
const Service: React.FC<ServiceProps> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="service-container">
      <div className="service-container-img">
        <img src={props.image} alt={props.title} title={props.title} />
      </div>
      <div className="service-container-text gap-y-3 flex flex-col">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <button onClick={() => router.push(props.url)}>
          <div className="pri-btn">
            <span className="text-[20px]">Know More</span>
          </div>
        </button>
      </div>
      {modalOpen && (
        <Modal title={props.title} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

interface ModalProps {
  title: string;
  onClose: () => void;
}

// Define the Modal component
const Modal: React.FC<ModalProps> = ({ title, onClose }) => {
  const router = useRouter();

  const onDismiss = () => {
    onClose();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onDismiss();
    }
  };

  const getServiceData = (title: string): ServiceData => {
    const data: Record<string, ServiceData> = {
      "Social media strategy development": {
        title: "Social media strategy development",
        features: [
          "Tailoring content for diverse social media platforms.",
          "Interacting with followers and addressing their queries.",
          "Optimizing content for maximum reach and impact.",
          "Establishing protocols and guidelines for crisis management.",
        ],
        benefits: [
          "Enhanced Audience Engagement",
          "Lead Generation and Conversion",
          "Increased Brand Awareness",
          "Data Analysis and Insights",
        ],
      },
      "Content creation and curation": {
        title: "Content creation and curation",
        features: [
          "Content Selection",
          "Organisation and Presentation",
          "Commentary and Context",
          "Crediting and Attribution",
        ],
        benefits: [
          "Building Relationships",
          "Search Engine Optimization",
          "Thought Leadership",
          "Establishing Authority",
        ],
      },
      "Community management": {
        title: "Community management",
        features: [
          "Cultivation of a sense of belonging and loyalty",
          "Resource for market research",
          "Identification of influential community members",
          "Building genuine relationships with community members",
        ],
        benefits: [
          "User-generated Content",
          "Early Access and Beta Testing",
          "Community Loyalty",
          "Community Loyalty",
        ],
      },

      "Social media advertising": {
        title: "Social media advertising",
        features: [
          "Integration with Analytics Tools",
          "Retargeting Capabilities",
          "Ad Scheduling",
          "Call-to-Action Buttons",
        ],
        benefits: [
          "Measurable Result",
          "Increased Brand Awareness",
          "Enhanced Customer Engagement",
          "Targeted Advertising",
        ],
      },

      "Analytics and reporting": {
        title: "Analytics and reporting",
        features: [
          "Data Integration",
          "Automated scheduling and distribution",
          "Data security and governance",
          "Collaboration and sharing",
        ],
        benefits: [
          "Enhanced competitiveness",
          "Real-time insights",
          "Identification of patterns and trends",
          "Improved customer understanding",
        ],
      },
    };

    return data[title] || { title: "", features: [], benefits: [] };
  };

  const selectedData = getServiceData(title);

  return (
    <motion.div
      className="modal"
      onClick={handleClick}
      initial={{ opacity: 0, y: 50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation when modal opens
      exit={{ opacity: 0, y: 50 }} // Animation when modal closes
    >
      <button
        type="button"
        onClick={onDismiss}
        className="close-button absolute lg:right-[calc(50%-_563px)] right-5 top-[50px]"
      >
        <Image src="/close-white.svg" width={17} height={17} alt="close" />
      </button>
      <div className="modal_wrapper">
        <motion.h3
          className="mt-[30px] lg:ml-[-402px] lg:text-[30px] text-[20px] text-left"
          initial={{ opacity: 0, y: -50 }} // Initial animation properties for text
          animate={{ opacity: 1, y: 0 }} // Animation when modal opens for text
          exit={{ opacity: 0, y: -50 }} // Animation when modal closes for text
        >
          <span className="text-primary-blue "> {title}</span>
        </motion.h3>
        <div
          className="modal-content-scroll flex flex-col md:flex-row gap-8 mt-6"
          style={{
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          <motion.div
            className="rounded-[20px] lg:min-w-[380px] min-w-[300px] h-full bg-[#D4E6FB] p-5"
            initial={{ opacity: 0, y: 50 }} // Initial animation properties for text
            animate={{ opacity: 1, y: 0 }} // Animation when modal opens for text
            exit={{ opacity: 0, y: 50 }}
          >
            <motion.div
              className="content flex flex-col gap-3"
              initial={{ opacity: 0, x: -50 }} // Initial animation properties for text
              animate={{ opacity: 1, x: 0 }} // Animation when modal opens for text
              exit={{ opacity: 0, x: -50 }}
            >
              <p className="text-[18px] text-primary-blue">Features</p>
              {selectedData.features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full h-full text-[16px] bg-white text-left px-2"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="rounded-[20px] lg:min-w-[380px] min-w-[300px] h-[302px] bg-[#E3CCC9] p-5"
            initial={{ opacity: 0, x: 50 }} // Initial animation properties for text
            animate={{ opacity: 1, x: 0 }} // Animation when modal opens for text
            exit={{ opacity: 0, x: 50 }}
          >
            <motion.div className="content flex flex-col gap-3">
              <p className="text-[18px]">Benefits</p>
              {selectedData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full h-full text-[16px] bg-white px-2"
                >
                  {benefit}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
