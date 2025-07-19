import { ArrowRight } from "lucide-react";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-10 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors px-4 py-16">
      {/* Contact Form */}
      <div className="max-w-xl w-full bg-white text-black dark:bg-gray-900 dark:text-white transition-colors shadow-xl rounded-2xl p-8 border border-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Contact Me
        </h2>
        <form
          action="mailto:your-email@example.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="text-black dark:text-white mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="text-black dark:text-white mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="text-black dark:text-white mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links Below */}
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-zinc-200/50 dark:border-white/20 transition-colors">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
          Connect Online
        </h3>
        <div className="space-y-3">
          {/* GitHub */}
          <a
            href="https://github.com/Prashant20245"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group"
          >
            <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center">
              <FaGithub className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-zinc-900 dark:text-white">
                GitHub
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                @Prashant20245
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-300 dark:group-hover:text-white transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/prashant-kumar-2395aa175"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <LiaLinkedin className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-zinc-900 dark:text-white">
                LinkedIn
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                @prashant-kumar
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-300 dark:group-hover:text-white transition-colors" />
          </a>

          {/* Twitter (Optional or Replace with another link) */}
          <a
            href="#"
            className="flex items-center gap-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors group"
          >
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
              <FaXTwitter className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-zinc-900 dark:text-white">
                Twitter
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                @prashanttwitter
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-300 dark:group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
