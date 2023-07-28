import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "System One",
    description:
      "As a dedicated Full Stack Developer, I have gained three years of invaluable experience working on diverse projects, each requiring a wide range of cutting-edge technologies. My role encompassed the complete software development life cycle, from conceptualization to deployment, and I actively contributed to the success of multiple projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2020-present",
  },
  {
    title: "Travel Nurse Recruiter",
    location: "White Glove Placements Inc ",
    description:
      "As an accomplished Travel Nurse Recruiter, I have thrived in a dynamic and fast-paced environment, dedicating 1 year to connecting highly skilled nurses with exciting opportunities across diverse healthcare facilities.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2020",
  },
  {
    title: "Route Manager",
    location: "Affinity Waste Solutions",
    description:
      "As a dedicated Route Manager at Affinity Waste Solutions, I spearheaded the coordination and optimization of waste management services, contributing significantly to operational efficiency and client satisfaction.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "News Explorer",
    description:
      "I created a user-friendly News Explorer App. This dynamic application allows you to easily search, save, and organize news articles, ensuring you stay informed with the latest headlines.",
    tags: ["React", "Google Cloud", "MongoDB", "Node.js"],
    imageUrl: corpcommentImg,
  },
  {
    title: "OAK Academy",
    description:
      "As an ambitious full-stack developer, I took the initiative to create an innovative and empowering website designed to help fellow developers enhance their skills and knowledge.",
    tags: ["C#", "asp.net", "mvc", "mssql", "OOP"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Crown Clothing",
    description:
      "I created a fully functional e-commerce store utilizing Stripe for payments and integrating Firebase and Google Auth for a seamless and secure shopping experience.",
    tags: ["React", "Redux", "Firebase", "stripe", "styled-components"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "APS.Net",
  "MVC",
  "MongoDB",
  "Redux",
  "GraphQL",
  "FireBase",
  "Express",
  "PostgreSQL",
  "C#",
  "MSSQL",
  "Angular",
  "Oracle"
] as const;
