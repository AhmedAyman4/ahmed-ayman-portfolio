"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      if (onSuccess) {
        onSuccess();
      }

      setTimeout(() => {
        setStatus("idle");
      }, 15000);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {status === "success" && (
        <div className="contact-alert success whitespace-nowrap overflow-hidden">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="whitespace-nowrap text-[10.5px] min-[360px]:text-[11.5px] sm:text-xs md:text-sm tracking-tight">
            Thank you! Your message has been sent successfully.
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="contact-alert error">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="contact-form-grid">
        <div className="contact-field">
          <label htmlFor="name" className="contact-label">
            Name <span className="text-black dark:text-white font-bold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="contact-input"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="email" className="contact-label">
            Email <span className="text-black dark:text-white font-bold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="contact-input"
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="subject" className="contact-label">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Collaboration / Inquiry"
          className="contact-input"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="message" className="contact-label">
          Message <span className="text-black dark:text-white font-bold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can I help you?"
          className="contact-input contact-textarea"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="contact-submit-btn"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
