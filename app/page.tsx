import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
          unoptimized
          width={300}
          height={300}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Meet Haroon Naeem!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a Flutter developer passionate about building cross-platform mobile applications
          with clean UI and scalable architecture. I have experience in deploying apps on both
          Android and iOS using Flutter, integrated with REST APIs, Firebase, and OpenVPN.
        </p>
        <p>
          Currently working at <strong>TheCorise</strong> as a Flutter Developer, I’ve developed
          and deployed production apps such as <em>Qalb-e-Saleem</em>, <em>Cloud VPN</em>, and{" "}
          <em>Car Care</em> on the Play Store and App Store.
        </p>
        <p>
          My Final Year Project <strong>Vessel</strong> was a service provider app with Google
          Maps tracking, real-time chat, live bidding, emergency contact, and a feedback system.
        </p>

        <p>
          I specialize in:
        </p>
        <ul>
          <li>Flutter, GetX, Provider, Firebase (Auth, DB, Storage)</li>
          <li>FastAPI, Maps integration, OpenVPN, REST API</li>
          <li>UI/UX design, Deployment (Play Store & App Store)</li>
        </ul>
        <p>
          Let’s connect:
          {" "}
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>,
          {" "}
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>,
          {" "}
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">Whatsapp</a>
        </p>
      </div>
    </section>
  );
}
