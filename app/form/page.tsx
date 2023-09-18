"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import Button from "../components/Button";
import { type } from "os";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

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
  const [noName, setNoName] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noNumber, setNoNumber] = useState(false);
  const [noMessage, setNoMessage] = useState(false);
  const formRef = useRef();
  let isFormValid = true;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    if (form.name === "") {
      setNoName(true);
      isFormValid = false;
    }

    if (form.email === "") {
      setNoEmail(true);
      isFormValid = false;
    }

    if (form.number === "") {
      setNoNumber(true);
      isFormValid = false;
    }

    if (form.message === "") {
      setNoMessage(true);
      isFormValid = false;
    }

    // DETAILS CORRECT
    if (isFormValid) {
      setLoading(true);
      setNoName(false);
      setNoEmail(false);
      setNoMessage(false);
      setNoNumber(false);

      console.log(isSubmitted);

      const date = new Date();
      const timeStamp = date;

      const data = { form, timeStamp };

      const postData = async (data: {}) => {
        try {
          const submit = await fetch(
            "https://sbm-mailserver.onrender.com/form-submitted",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          const result = await submit.json();
          console.log(result.status);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
        alert("Thank you. We will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
          number: "",
        });
      };
      postData(data);
    }
  };

  return (
    <div className="custom-container-max-width overflow-hidden md:px-20 lg:px-20 px-3 flex flex-col lg:flex-row gap-10 text-body-text-colour my-[80px] shrink p-20">
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
          className="form h-full lg:min-w-[400px] min-w-[300px] rounded-[20px] py-[20px] px-[30px] bg-white box-shadow"
          onSubmit={handleSubmit}
        >
          <div className="gap-[30px] flex flex-col">
            <div>
              <label htmlFor="name" className="text-semibold text-[16px]">
                Name
              </label>
              <div
                className={`w-[100%] border-2 ${
                  noName ? "border-red-600" : "border-primary-blue"
                }  rounded-[5px] flex flex-row justify-between`}
              >
                <input
                  id="name"
                  name="name"
                  className="w-full"
                  type="text"
                  value={form.name}
                  minLength={2}
                  placeholder="What's your name?"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-semibold text-[16px]">
                Email
              </label>
              <div
                className={`w-[100%] border-2 ${
                  noEmail ? "border-red-600" : "border-primary-blue"
                }  rounded-[5px] flex flex-row justify-between`}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail Address"
                  className="w-full"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="number" className="text-semibold text-[16px]">
                Phone Number
              </label>
              <div
                className={`w-[100%] border-2 ${
                  noNumber ? "border-red-600" : "border-primary-blue"
                }  rounded-[5px] flex flex-row justify-between`}
              >
                <input
                  id="number"
                  name="number"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  placeholder="e.g. 123-4567-8900"
                  className="w-full"
                  value={form.number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-semibold text-[16px]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className={`w-[100%] border-2 ${
                  noMessage ? "border-red-600" : "border-primary-blue"
                }  rounded-[5px] flex flex-row justify-between`}
                placeholder="Tell us Something..."
                value={form.message}
                onChange={handleChange}
              ></textarea>
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
