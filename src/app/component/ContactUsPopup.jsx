"use client";
import React, { useState } from "react";
import { forwardRef, useImperativeHandle, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUsPopup = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => setShow(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  useImperativeHandle(ref, () => ({
    open: () => setShow(true),
    close: () => setShow(false),
  }));

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-[#1e2a52] mb-2">Contact Us</h2>
        <p className="text-sm text-gray-600 mb-4">
          Give us a call or fill in the form below and we will contact you. We
          endeavor to answer all inquiries within 24 hours.
        </p>

        <div className="flex items-center gap-2 mb-4 text-sm text-gray-700">
          <span> (+92) 42 35970111</span>
          <span>✉️ info@renergent.com</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full text-black p-2 border border-gray-300 rounded"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full text-black p-2 border border-gray-300 rounded"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            className="w-full text-black p-2 border border-gray-300 rounded"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="4"
            className="w-full text-black p-2 border border-gray-300 rounded"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            className="w-full bg-lime-500 text-black hover:bg-lime-600 py-2 rounded"
            disabled={state.submitting}
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>

          {state.succeeded && (
            <p className="text-green-600 mt-2">
              Thanks for your submission! This popup will close shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
});

ContactUsPopup.displayName = "ContactUsPopup";
export default ContactUsPopup;