"use client";
import React from "react";
import { IoClose, IoCallOutline, IoMailOutline } from "react-icons/io5";
import  { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
export const ContactFormModal = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    if (state.succeeded) {
      setForm({ name: "", email: "", phone: "", message: "" });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
      <div className="w-full sm:w-[420px] bg-white h-full p-6 overflow-auto">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-lg font-bold text-[#1e2a52]">Contact Us</h2>
          <button onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Give us a call or fill in the form below and we will contact you. We endeavor to answer all inquiries within 24 hours on business days.
        </p>

        <div className="flex items-center gap-2 text-sm text-green-700 mb-2">
          <IoCallOutline /> <span>(+92) 42 35970111</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-green-700 mb-6">
          <IoMailOutline /> <span>info@renergent.com</span>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="border p-3 rounded bg-[#f9fbf8]"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors || []} />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="border p-3 rounded bg-[#f9fbf8]"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors || []} />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            value={form.phone}
            onChange={handleChange}
            className="border p-3 rounded bg-[#f9fbf8]"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors || []} />

          <textarea
            name="message"
            rows="4"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className="border p-3 rounded bg-[#f9fbf8]"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors || []} />

          <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 text-white py-3 rounded font-medium"
            disabled={state.submitting}
          >
            Submit
          </button>

          {state.succeeded && <p className="text-green-600 mt-2">Thanks for your submission!</p>}
          {state.errors && state.errors.length > 0 && (
            <p className="text-red-600 mt-2">There was an error submitting the form.</p>
          )}
        </form>

        <div className="mt-6 text-xs text-gray-400">[social_profiles]</div>
      </div>
    </div>
  );
};