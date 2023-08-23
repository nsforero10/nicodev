import * as React from "react";
import Backdrop from "./Backdrop";

interface ContactFormProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactForm({ open, onClose }: ContactFormProps) {
  return (
    <Backdrop open={open}>
      <div className="flex flex-col z-200 bg-gray text-teal w-3/4 max-w-3xl min-w-[320px] p-8">
        <div className="w-full flex justify-end">
          <button className="static right-4" onClick={onClose}>
            X
          </button>
        </div>
        <form
          className="flex flex-col gap-4 "
          action="https://getform.io/f/d064dd33-73a3-47f3-a75e-4b0e34f06e9a"
          method="POST"
        >
          <h1 className="font-display text-6xl text-gray">Say Hi!</h1>
          <div className="flex flex-col md:flex-row w-full gap-4">
            <input
              required
              className="bg-black p-2 text-light-gray w-full focus:outline-none focus:border-teal focus:border"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              required
              className="bg-black p-2 text-light-gray w-full focus:outline-none focus:border-teal focus:border"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <input
            required
            className="bg-black p-2 text-light-gray focus:outline-none focus:border-teal focus:border"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            required
            className="bg-black p-2 text-light-gray focus:outline-none focus:border-teal focus:border"
            name="message"
            id="message"
            rows={5}
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-teal text-black font-bold py-2 w-1/2 min-w-[260px]"
          >
            Send message
          </button>
        </form>
      </div>
    </Backdrop>
  );
}
