import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="h-full max-w-6xl m-auto flex items-center gap-5 flex-col justify-center py-8 md:py-0 md:flex-row">
      <div className="flex-1 flex items-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Send me an email</h1>
      </div>
      <div className="flex-1">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
