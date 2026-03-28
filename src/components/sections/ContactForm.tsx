"use client";

import React, { useState, FormEvent } from "react";
import { Input, Textarea, Button } from "@/components/ui";
import { CheckCircle, AlertCircle, Send, Mail, Phone, MapPin } from "lucide-react";

/**
 * Form validation state interface
 */
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/**
 * Form data interface
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * ContactForm Component
 *
 * Contact form with client-side validation and success/error states.
 * Features real-time validation and accessible form fields.
 *
 * Design decisions:
 * - Inline validation with clear error messages
 * - Success state with confirmation message
 * - Loading state during submission
 * - Accessible form with proper labels and ARIA attributes
 */
export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  /**
   * Validate individual field
   */
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;

      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address";
        }
        return undefined;

      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 3) return "Subject must be at least 3 characters";
        return undefined;

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        if (value.trim().length > 1000) return "Message must be less than 1000 characters";
        return undefined;

      default:
        return undefined;
    }
  };

  /**
   * Handle field change
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * Handle blur - validate on blur
   */
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call - replace with actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setSubmitError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-600 mb-4">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name Field */}
      <Input
        label="Full Name"
        name="name"
        type="text"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        disabled={isSubmitting}
        icon={<Mail className="w-5 h-5" />}
      />

      {/* Email Field */}
      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        disabled={isSubmitting}
        icon={<Mail className="w-5 h-5" />}
      />

      {/* Subject Field */}
      <Input
        label="Subject"
        name="subject"
        type="text"
        placeholder="How can we help?"
        value={formData.subject}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.subject}
        disabled={isSubmitting}
      />

      {/* Message Field */}
      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us about your project or inquiry..."
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.message}
        disabled={isSubmitting}
        rows={5}
      />

      {/* Submit Error */}
      {submitError && (
        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{submitError}</span>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        size="lg"
        loading={isSubmitting}
        leftIcon={!isSubmitting ? <Send className="w-5 h-5" /> : undefined}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {/* Form Info */}
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our Privacy Policy and consent to
        being contacted regarding your inquiry.
      </p>
    </form>
  );
};

export default ContactForm;
