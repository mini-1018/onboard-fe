"use client";
import Introduction from "./Introduction";
import TechStack from "./TechStack";
import Structure from "./Structure";
import MainFunction from "./MainFunction";
import Perfomance from "./Perfomance";
import Retrospective from "./Retrospective";

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
    title: "프로젝트 구성",
    content: <Structure />,
  },
  {
    id: 4,
    title: "주요 기능",
    content: <MainFunction />,
  },
  {
    id: 5,
    title: "성능 최적화",
    content: <Perfomance />,
  },
  {
    id: 6,
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
