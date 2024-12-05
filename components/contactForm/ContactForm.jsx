"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster } from "@/components/ui/sonner";
import { useToast } from "@/hooks/use-toast";
import { Toast } from "../ui/toast";

const publicKey = process.env.NEXT_PUBLIC_API_KEY;
const ContactForm = () => {
  const form = useRef();
  const { toast } = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    const currentUrl = window.location.href;
    const urlInput = form.current?.querySelector('input[name="attachment"]');

    if (urlInput) {
      urlInput.value = currentUrl;
    }

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_KEY}`,
        form.current,
        {
          publicKey: `${publicKey}`,
        }
      )
      .then(
        () => {
          toast({
            title: "Success!",
            description: "Your email has been sent.",
            variant: "default",
          });
        },
        (error) => {
          toast({
            title: "Error",
            description: `Failed to send email, please try again later..`,
            variant: "destructive",
            // action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
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
        rows="3"
        name="message"
        defaultValue="I'm interested in this property."
        className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent pt-3 outline-purple-500"
      ></textarea>
      <input type="hidden" name="attachment" value="" />

      <input
        value="Send"
        type="submit"
        className="text-white bg-purple-500 hover:bg-purple-600 tracking-wide rounded-full px-4 py-3 w-full cursor-pointer"
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
