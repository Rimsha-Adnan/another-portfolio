"use client";
import React, { useState, useEffect } from "react";
import { projectsData } from "./WorkData";
import { projectsNav } from "./WorkData";
import WorkItems from "./WorkItems";
import { StaticImageData } from "next/image";
interface portfolioProjects {
  id: number;
  image: string;
  title: string;
  category: string;
  link : string
}

interface project {
  name: string;
}

function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState<portfolioProjects[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((projects) => {
        return projects.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    const target = e.target as HTMLSpanElement;
    setItem({ name: target.textContent?.toLowerCase() || "" });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index: number) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""}
                work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        
        {projects.map((item) => (
          <WorkItems
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            category={item.category}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
