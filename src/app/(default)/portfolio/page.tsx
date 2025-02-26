"use client";
import Introduction from "./Introduction";
import TechStack from "./TechStack";
import Backend from "./Backend";
import Retrospective from "./Retrospective";
import Frontend from "./Frontend";

const sections = [
  {
    id: 1,
    title: "Project Introduction",
    content: <Introduction />,
  },
  {
    id: 2,
    title: "Tech Stack",
    content: <TechStack />,
  },
  {
    id: 3,
    title: "Frontend",
    content: <Frontend />,
  },
  {
    id: 4,
    title: "Backend",
    content: <Backend />,
  },
  {
    id: 5,
    title: "Retrospective",
    content: <Retrospective />,
  },
];

export default function PortfolioPage() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50">
        <div className="w-[90%] mx-auto py-10 space-y-20">
          {sections.map((section) => (
            <section
              key={section.id}
              className="scroll-mt-20"
              id={`section-${section.id}`}
            >
              {section.content}
            </section>
          ))}
        </div>
      </div>
      <div className="w-full h-[100px]"></div>
    </>
  );
}
