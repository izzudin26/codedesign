import Navbar from "@kourse/components/Navbar";
import KourseCard from "@kourse/components/Card";
import KourseFeature from "@kourse/components/Feature";
import { useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

export default function KoursePage() {
  const [headline] = useState("Elevate Your Career to the Next Level");

  const [subtitle] = useState(
    "Get expert-led instruction from experienced professionals in Industry and gain valuable skills and knowledge that can be applied to your career or personal life."
  );

  const [features] = useState([
    {
      icon: <HiOutlineClock size={24} color="white" />,
      title: "Self-paced Learning",
      subtitle:
        "This feature allows learners to progress through the course at their own pace, rather than being tied to a fixed schedule. This can be especially useful for learners who have busy schedules or who prefer to learn at their own speed.",
    },
    {
      icon: <HiOutlineChatBubbleOvalLeft size={24} color="white" />,
      title: "Instructor support",
      subtitle:
        "Providing learners with access to the instructor can be a valuable feature, as it allows them to ask questions and get feedback in real-time. This could be in the form of office hours, live Q&A sessions, or one-on-one consultations.",
    },
  ]);

  return (
    <div className="flex w-full min-h-[100svh] bg-gradient-to-t from-kourse-primary to-kourse-primary/95">
      <div className="container px-5 xl:px-0 mx-auto flex flex-col w-full lg:py-10 py-5">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-20 gap-14 w-full">
          <div className="w-full lg:w-4/5 text-left">
            <h1 className="text-[50px] text-white font-poppins">{headline}</h1>
            <p className="text-white/60 mt-4 font-poppins">{subtitle}</p>
            <div className="flex flex-row mt-12 gap-6 items-center">
              <button className="text-white px-5 py-2 rounded-full bg-kourse-secondary shadow-lg shadow-blue-900 font-poppins">
                Find a Course
              </button>
              <a
                href="#"
                className="underline font-poppins text-lg text-kourse-secondary"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* Card */}
          <div className="hidden lg:flex w-full relative ml-5 items-center justify-center">
            <div className="w-3/5 z-30">
              <KourseCard
                tags="Web Development"
                title="Front-End Development"
                price="$599"
                duration="13h 18min"
                lessons={18}
              />
            </div>
            <div className="w-3/5 z-30 absolute">
              <KourseCard
                tags="Web Development"
                title="Front-End Development"
                price="$599"
                duration="13h 18min"
                lessons={18}
              />
            </div>
            <div className="w-3/5 absolute top-2 right-20 scale-90 z-20">
              <KourseCard
                tags="Web Development"
                title="Front-End Development"
                price="$599"
                duration="13h 18min"
                lessons={18}
              />
            </div>
            <div className="w-3/5 absolute top-2 right-0 scale-75 z-10">
              <KourseCard
                tags="Web Development"
                title="Front-End Development"
                price="$599"
                duration="13h 18min"
                lessons={18}
              />
            </div>
          </div>
        </div>
        {/* Features */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-20 gap-8">
          {features.map((f) => (
            <KourseFeature
              title={f.title}
              Icon={f.icon}
              subtitle={f.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
