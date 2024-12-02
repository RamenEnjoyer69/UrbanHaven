"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster } from "@/components/ui/sonner";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_KEY}`,
        form.current,
        {
          publicKey: `${process.env.NEXT_PUBLIC_KEY_API}`,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="mt-8 space-y-4 " ref={form} onSubmit={sendEmail}>
      <input
        required={true}
        type="text"
        placeholder="Full name*"
        name="user_name"
        className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent outline-purple-500"
      />
      <input
        required={true}
        type="email"
        placeholder="Email*"
        name="user_email"
        className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent outline-purple-500"
      />
      <input
        required={true}
        type="text"
        placeholder="Phone*"
        name="phone_number"
        className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent outline-purple-500"
      />
      <textarea
        placeholder="Message"
        rows="6"
        name="message"
        defaultValue="I'm interested in this property."
        className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent pt-3 outline-purple-500"
      ></textarea>
      <input
        value="Send"
        type="submit"
        className="text-white bg-purple-500 hover:bg-purple-600 tracking-wide rounded-md px-4 py-3 w-full cursor-pointer"
      />

      <p className="text-[0.65rem] ">
        By proceeding, you consent to receive calls and texts at the number you
        provided, including marketing by autodialer and prerecorded and
        artificial voice, and email, from urbanhaven.com about your inquiry and
        other home-related matters, but not as a condition of any purchase.{" "}
      </p>
    </form>
  );
};

export default ContactForm;
