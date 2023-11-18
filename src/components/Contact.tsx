import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="h-fit md:h-full flex items-center justify-center gap-10 lg:gap-20 flex-col md:flex-row py-8 md:py-0">
      <div className="flex-1 flex flex-col items-center justify-center p-5 gap-5 md:gap-10 text-center md:text-justify">
        <h1 className="text-3xl md:text-4xl font-semibold border-b-2 border-accent">
          Send Me an Email
        </h1>
        <p className="max-w-[25rem]">
          Want to ask me anything? Or send me a job offer, collaboration idea or
          a dad joke? Go ahead and send me a message and I&apos;ll respond ASAP.
        </p>
      </div>
      <div className="flex-1 mb-10 md:mb-0">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
