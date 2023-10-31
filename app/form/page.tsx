"use client";

import Image from "next/image";

import React, { useState, useRef } from "react";
import Button from "../components/Button";

import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// Define the contact details
const contacts = [
  {
    icon: "/group-241.svg",
    text: "91, Obafemi Awolowo Way, Ikeja, Lagos.",
    href: "https://googlemaps.com",
  },
  {
    icon: "/group-240.svg",
    text: "+234 906 000 6734",
    href: "tel:+2349060006734",
  },
  {
    icon: "/group-239.svg",
    text: "info@techduce.africa",
    href: "mailto:info@techduce.africa",
  },
];

const Page = () => {
  // FORM STATES
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    number: false,
    message: false,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setLoading(true);

      try {
        const uploadToDatabase = async (data: {
          name: string;
          email: string;
          message: string;
          number: string;
        }) => {
          // Add a new document in collection ""

          await setDoc(doc(db, "users", data.email), {
            name: data.name,
            email: data.email,
            message: data.message,
            number: data.number,
          });
        };
        await uploadToDatabase(form);

        // Send data to your API
        const postData = async (data: {}) => {
          try {
            const response = await fetch(
              "https://sbm-mailsever.onrender.com/form-submitted",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify(data),
              }
            );

            if (!response.ok) {
              throw new Error("Failed to send data");
            }

            const result = await response.json();
            console.log(result.status);
            return result;
          } catch (error) {
            console.error(error);
            // You can handle the error here or throw it further if needed
            throw error;
          }
        };

        const response = await postData(form);

        setLoading(false);

        if (response.status === "success") {
          setIsSubmitted(true);
          resetForm();
        } else {
          // Handle the case when the API call fails

          alert("Please check that you are connected to the internet");
          setLoading(false);
        }
      } catch (error: any) {
        // Handle errors that may occur during database or API operations
        alert("An Error occured, please try again " + error.message);
        setLoading(false);
        resetForm();

        // Log or display an error message to the user
        console.error(error);
      }
    }
  };

  const validateForm = () => {
    const errors = {
      name: form.name === "",
      email: form.email === "",
      number: form.number === "",
      message: form.message === "",
    };

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "",
      number: "",
    });
  };

  return (
    <div className="custom-container-max-width overflow-hidden mb-[50px] md:px-20 lg:px-20 px-3 flex flex-col lg:flex-row gap-10 text-body-text-colour my-[80px] shrink p-20">
      {/* FORM TEXT */}
      <motion.div
        className="form-text flex flex-col w-full gap-3"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <div className="form-text-upper flex flex-col gap-6 p-2">
          <h1 className="text-primary-blue text-[2em] lg:text-[3em]">
            Get in touch
          </h1>
          <p className="text-body-text-colour flex-wrap flex max-w-[455px]">
            We are here to assist you! We value your input and strive to provide
            the best experience possible.
          </p>
        </div>
        <div className="form-contact flex flex-col gap-4 justify-center items-start">
          {contacts.map((contact, key) => (
            <a
              role="link"
              key={key}
              href={`${contact.href}`}
              className="h-full w-full flex flex-row gap-x-2 "
            >
              <div className="icon relative min-w-[40px] min-h-[40px] lg:w-[80px] lg:h-[80px]">
                <Image fill alt="" src={contact.icon} />
              </div>
              <div className="text justify-center py-[30px] flex flex-wrap max-w-[300px] font-semibold text-[18px] leading-6 a">
                {contact.text}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
      {/* FORM */}
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <form
          className="form h-full lg:min-w-[400px] bg-white min-w-[300px] rounded-[20px] py-[20px] px-[30px] bg-form box-shadow"
          onSubmit={handleSubmit}
        >
          <div className="gap-[30px] flex flex-col">
            {/* NAME */}
            <div>
              <label htmlFor="name" className="text-semibold text-[16px]">
                Name
              </label>
              <div
                className={`w-[100%] border-2 ${
                  formErrors.name ? "border-red-600" : "border-primary-blue"
                } rounded-[5px] flex flex-row justify-between`}
              >
                <input
                  id="name"
                  name="name"
                  className="w-full"
                  type="text"
                  value={form.name}
                  placeholder="What's your name?"
                  onChange={handleChange}
                />
              </div>
              {formErrors.name && (
                <div className="text-red-600 text-[14px] ">
                  Name is required
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-semibold text-[16px]">
                Email
              </label>
              <div
                className={`w-[100%] border-2 ${
                  formErrors.email ? "border-red-600" : "border-primary-blue"
                } rounded-[5px] flex flex-row justify-between`}
              >
                <input
                  id="email"
                  name="email"
                  className="w-full"
                  type="email"
                  value={form.email}
                  placeholder="Your E-mail Address?"
                  onChange={handleChange}
                />
              </div>
              {formErrors.email && (
                <div className="text-red-600 text-[14px] ">
                  Email is required
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="number" className="text-semibold text-[16px]">
                Phone Number
              </label>
              <div
                className={`w-[100%] border-2 ${
                  formErrors.number ? "border-red-600" : "border-primary-blue"
                } rounded-[5px] flex flex-row justify-between`}
              >
                <input
                  id="phoneNumber"
                  name="number"
                  className="w-full"
                  type="tel"
                  placeholder="e.g. 08012345678"
                  maxLength={12}
                  min={8}
                  value={form.number}
                  onChange={handleChange}
                />
              </div>
              {formErrors.number && (
                <div className="text-red-600 text-[14px] ">
                  Phone Number is required
                </div>
              )}
            </div>

            {/* MESSAGES */}
            <div>
              <label htmlFor="message" className="text-semibold text-[16px]">
                Message
              </label>
              <div
                className={`w-[100%] border-2 ${
                  formErrors.message ? "border-red-600" : "border-primary-blue"
                } rounded-[5px] flex flex-row justify-between`}
              >
                <textarea
                  id="message"
                  name="message"
                  className="w-full"
                  rows={3}
                  value={form.message}
                  placeholder="How can we help you?"
                  onChange={handleChange}
                />
              </div>
              {formErrors.message && (
                <div className="text-red-600 text-[14px] ">
                  Message is required
                </div>
              )}
            </div>
            <div className="font-semibold">
              <Button
                title={`${loading ? "Sending..." : "Get in touch"}`}
                type="submit"
              />
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Page, "");
