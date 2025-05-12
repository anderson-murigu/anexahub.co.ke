"use client"
import React, { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess("Thank you! Your message has been sent.");
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700 text-center">Get in Touch with Anexahub Ltd</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">We're here to help your Nairobi or Kenya-based SME with all its IT needs. Reach out today for a consultation or support.</p>
      <form className="bg-white rounded-lg shadow p-8 mb-10 space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input name="name" type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Your Name" required />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
            <input name="company" type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Company Name" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input name="email" type="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="you@email.com" required />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input name="phone" type="tel" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="07xx xxx xxx" required />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Service You're Interested In</label>
          <select name="service" className="w-full border border-gray-300 rounded px-3 py-2" required>
            <option value="">Select a service</option>
            <option value="ETR Services">ETR Services</option>
            <option value="Process Automation">Process Automation</option>
            <option value="POS Systems">POS Systems</option>
            <option value="Custom Software">Custom Software</option>
            <option value="IT Support">IT Support</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Your Message</label>
          <textarea name="message" className="w-full border border-gray-300 rounded px-3 py-2" rows={4} placeholder="How can we help you?" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
        {success && <p className="text-green-600 text-center font-medium mt-2">{success}</p>}
        {error && <p className="text-red-600 text-center font-medium mt-2">{error}</p>}
      </form>
      <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">Our Contact Information</h2>
        <p className="mb-1"><span className="font-semibold">Email:</span> <a href="mailto:info@anexahub.co.ke" className="text-blue-700 hover:underline">info@anexahub.co.ke</a></p>
        <p className="mb-1"><span className="font-semibold">Phone:</span> <a href="tel:0710578231" className="text-blue-700 hover:underline">0710 578 231</a></p>
        <p className="mb-1"><span className="font-semibold">Address:</span></p>
        <p>Anexahub Ltd<br />12th Floor, Ambank House (formerly Ambank Towers)<br />University Way<br />Nairobi, Kenya</p>
      </div>
    </div>
  );
} 