"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { socialLinks } from "./lib/config";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const cardClass =
    "rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition-all";

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Profile Image */}
      <div className="flex justify-center mb-10">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className={`rounded-full bg-gray-100 w-48 h-48 object-cover transition duration-700 ${
            loaded ? "opacity-100 grayscale-0" : "opacity-0 grayscale"
          }`}
          unoptimized
          width={192}
          height={192}
          priority
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Me Card */}
        <div className={cardClass}>
          <h2 className="text-xl font-semibold mb-4">👋 About Me</h2>
          <p>
            I'm a Flutter developer passionate about creating clean, scalable apps. I specialize
            in cross-platform development, Firebase, and OpenVPN integrations.
          </p>
        </div>

        {/* Education Card */}
        <div className={cardClass}>
          <h2 className="text-xl font-semibold mb-4">🎓 Education</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              BS in Computer Science — Comsats University Islamabad
              <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">2020 – 2024</span>
            </li>
          </ul>
        </div>

        {/* Skills Card */}
        <div className={cardClass}>
          <h2 className="text-xl font-semibold mb-4">🛠 Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Flutter, Dart, GetX, Provider</li>
            <li>Firebase (Auth, DB, Storage)</li>
            <li>FastAPI, OpenVPN Integration</li>
            <li>UI/UX Design, App Deployment</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className={cardClass}>
          <h2 className="text-xl font-semibold mb-4">💼 Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Flutter Developer — TheCorise
              <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">2023 – Present</span>
              <br />
            
            </li>
          </ul>
        </div>

        {/* Social Media Card */}
        <div className={`${cardClass} md:col-span-2`}>
          <h2 className="text-xl font-semibold mb-4">🌐 Social Links</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline px-4 py-2 rounded-full text-sm text-white shadow hover:scale-105 transition"
              style={{ backgroundColor: "#B5004BFF" }}
            >
              GitHub
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline px-4 py-2 rounded-full text-sm text-white shadow hover:scale-105 transition"
              style={{ backgroundColor: "#0077b5" }}
            >
              LinkedIn
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline px-4 py-2 rounded-full text-sm text-white shadow hover:scale-105 transition"
              style={{ backgroundColor: "#25D366" }}
            >
              WhatsApp
            </a>
            <a
              href={socialLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline px-4 py-2 rounded-full text-sm text-white shadow hover:scale-105 transition"
              style={{ backgroundColor: "#8525D3FF" }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
