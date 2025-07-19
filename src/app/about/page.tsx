import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full bg-white text-black dark:bg-gray-900 dark:text-white transition-colors rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="w-40 h-40 flex-shrink-0">
          <Image
            src="/projects/photo.jpg"
            alt="Prashant Kumar"
            className="w-full h-full object-cover rounded-full border-4 border-blue-500"
          />
        </div>

        {/* Info Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
            Prashant Kumar
          </h2>
          <p className="text-gray-600 dark:text-white mb-4">
            I am a third-year B.Tech IT student at{" "}
            <strong>Birsa Institute of Technology, Sindri</strong> (8.5 CGPA),
            passionate about solving real-world problems through clean and
            scalable code.
          </p>
          <p className="text-gray-600 dark:text-white mb-6">
            With a solid understanding of <strong>Data Structures</strong>,{" "}
            <strong>MERN stack</strong>, and{" "}
            <strong>core CS fundamentals</strong> like Operating Systems and
            Networking, I love building full-stack applications and
            participating in coding challenges.
          </p>

          {/* Skills */}
          <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "C",
              "C++",
              "Java",
              "JavaScript",
              "SQL",
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "Linux",
              "RESTful APIs",
              "OOP",
              "DSA",
              "Postman",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Achievements */}
          <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
            Coding Achievements
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-white space-y-1 mb-6">
            <li>800+ coding problems solved across platforms</li>
            <li>GFG Max Rating: 1780 (Top 10%)</li>
            <li>LeetCode Max Rating: 1626</li>
            <li>CodeChef Max Rating: 1528</li>
            <li>5⭐ in Problem Solving & CPP on HackerRank</li>
          </ul>

          {/* Links */}
          <div className="mt-4 space-x-4">
            <a
              href="/projects/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
