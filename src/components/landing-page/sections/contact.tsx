"use client"
import Image from "next/image"
import dots from "@/assets/landing-page/effects-5.svg"
import contactEffect1 from "@/assets/landing-page/contact-effext-1.svg"
import contactEffectMobile1 from "@/assets/landing-page/contact-effect-mobile-1.svg"
import verticalDots from "@/assets/landing-page/vertical-dots.svg"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    const newErrors: string[] = [];
    if (!name.trim()) {
      newErrors.push("Name field is required");
    }
    if (!email.trim()) {
      newErrors.push("Email field is required");
    } else if (!isValidEmail(email)) {
      newErrors.push("Please enter a valid email address");
    }
    if (!message.trim()) {
      newErrors.push("Message field is required");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes
    alert("Form submitted successfully");
  };

  const isValidEmail = (email: string) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div id="contact" className="text-white w-full mt-40 flex flex-col gap-y-20">
      <p className="text-center text-5xl font-extrabold">Contact Me</p>
      <Image className="mx-auto md:hidden" src={dots} alt="dots" />
      <Image className="absolute -z-10 md:-mt-96" src={contactEffect1} alt="contactEffect1" />
      <form className="flex flex-col justify-between items-center gap-y-5 w-full md:w-[30rem] mx-auto px-20" onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul className="text-red-400">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <span className="flex flex-col gap-y-1 w-full">
          <label className="text-white">Name:</label>
          <input className="text-white bg-[#351e2e] rounded-2xl px-3 py-3" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name here" />
        </span>
        <span className="flex flex-col gap-y-1 w-full">
          <label className="text-white">Email:</label>
          <input className="text-white bg-[#351e2e] rounded-2xl px-3 py-3" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email here" />
        </span>
        <span className="flex flex-col gap-y-1 w-full">
          <label className="text-white">Message:</label>
          <textarea className="text-white resize-none bg-[#351e2e] rounded-2xl px-3 py-3" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
        </span>
        <button className="w-fit rounded-full ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-fuchsia-500 my-10 shadow-2xl shadow-fuchsia-500 text-white px-5 py-2 hover:bg-blue-200 hover:text-black hover:shadow-blue-200 transition-all duration-300">Contact Me</button>
      </form>
      <Image className="absolute hidden md:block -mt-48 -z-50" alt="contactEffectMobile1" src={contactEffectMobile1} />
      <div className="absolute hidden md:flex justify-end w-full">
        <Image className="absolute " alt="vertical-dots" src={verticalDots} />
      </div>
    </div>
  );
}
