import React from "react";
import { FaSchool, FaMagnifyingGlass } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";

const navLinks = [
  { label: "Home", link: "/" },
  { label: "Certificates", link: "/certificates" },
];
export const pagelinks = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];
export default navLinks;

export const journeyData = [
  {
    title: "Diploma",
    institution: "Tamil Nadu Polytechnic College Madurai",
    location: "Madurai, TamilNadu",
    description: "Computer Science",
    icon: React.createElement(FaSchool),
    date: 2018,
  },
  {
    title: "Bachelor of Engineering",
    institution: "Anna University Regional Campus Madurai",
    location: "Madurai, TamilNadu",
    description: "Computer Science And Engineering",
    icon: React.createElement(IoSchool),
    date: 2022,
  },
  {
    title: "Full Stack Developer",
    institution: "Quantanics Tech Serv Pvt Ltd",
    location: "Madurai, TamilNadu",
    description:
      "I am a Full Stack Developer with extensive experience in both front-end and back-end development. I excel at creating responsive interfaces, managing robust backend systems, and handling IoT-based web applications. Skilled in integrating various technologies for seamless and efficient solutions.",
    icon: React.createElement(FaMagnifyingGlass),
    date: "2021-2024",
  }
];
export const projectData = [
  {
    title: "SmartMach",
    description:
      "plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    tag: ["Codeigniter4","Html5","Css3","Bootstrap5","Python","Mysql","Mongodb","DigitalOcean","System-services"],
    imgUrl: "smartmach.png",
    git: "https://github.com/strategynaveen/smarttech"
  },
  {
    title: "Terion",
    description:
      "plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    tag: ["Reactjs","Material UI","Bootstrap5","Nodejs","Postgresql","DigitalOcean","System-services","Razorpay"],
    imgUrl: "terion.png",
    git: "https://github.com/strategynaveen/terion_git"
  },
  {
    title: "Quantanics Webpage",
    description:
      "plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    tag: ["Laravel","Bootstrap5","DigitalOcean","System-services"],
    imgUrl: "quantanics_web.png",
    git: "https://github.com/strategynaveen/quantanics_laravel"
  },
  {
    title: "Agri Water Management",
    description:
      "plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    tag: ["Android Studio","Embedded c","Mqtt"],
    imgUrl: "mobile_iot.jpeg",
    git: "https://github.com/strategynaveen/Android_studio_files"
  },
  {
    title: "Talent64 Compiler and Certificate Generation",
    description:
      "plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    tag: ["Reactjs","Nodejs","Expressjs","Material UI","Tailwind css","Fabricjs"],
    imgUrl: "certificate.png",
    git: "https://github.com/strategynaveen/learning_canva"
  },
];
