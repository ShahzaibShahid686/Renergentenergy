'use client';
import { useSession, signIn } from "next-auth/react";
import { useState, forwardRef, useImperativeHandle } from 'react';

const ContactUsPopup = forwardRef((props, ref) => {
  const { data: session, status } = useSession();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  useImperativeHandle(ref, () => ({
    open: () => setShow(true),
    close: () => setShow(false),
  }));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted:\n' + JSON.stringify(form, null, 2));
    setForm({ name: '', email: '', phone: '', message: '' });
    setShow(false);
  };

  if (!show) return null;

  if (!session) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Please Sign In</h2>
          <button
            onClick={() => signIn("google")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

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
          Give us a call or fill in the form below and we will contact you. We endeavor to answer all inquiries within 24 hours.
        </p>

        <div className="flex items-center gap-2 mb-4 text-sm text-gray-700">
          <span> (+92) 42 35970111</span>
          <span>✉️ info@renergent.com</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name || session.user.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email || session.user.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-lime-500 hover:bg-lime-600 text-white py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
});

ContactUsPopup.displayName = 'ContactUsPopup';
export default ContactUsPopup;
