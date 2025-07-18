import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="bg-[#F6F6F6] px-4 py-6 md:py-44 flex flex-col items-center justify-start">
      <div className="max-w-3xl w-full text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold font-playfair text-gray-900 mb-3">
          Contact Me
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-nunito">
          Whether it’s about a project, job, or collaboration — I’d love to hear from you!
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-xl shadow-lg space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 transition text-black font-semibold px-6 py-3 rounded-lg"
        >
          Send Message
        </button>

        {success && (
          <p className="text-green-600 text-sm mt-2 font-medium">
            ✅ Your message has been sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
