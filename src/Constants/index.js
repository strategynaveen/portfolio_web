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
    date: 2019,
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
    date: "DEC 2021- JAN 2025",
  },
   {
    title: "Programmer Analyst",
    institution: "PERI Software Solutions Pvt Ltd",
    location: "Chennai, TamilNadu",
    description:
      "Currently working as a Programmer Analyst, responsible for developing and delivering complete software products. Specialized in Laravel development, handling both front-end and back-end implementation. Building responsive and user-friendly interfaces optimized for multiple devices. Managing server deployment, hosting, and maintenance to ensure smooth product performance. Focused on providing scalable, secure, and business-oriented software solutions.",
    icon: React.createElement(FaMagnifyingGlass),
    date: "FEB 2025- Present",
  }
];
export const projectData = [
  {
    title: "SmartMach",
    description:
      "Worked on the SmartMach OEE Monitoring Project, handling both front-end and back-end development. Also managed server deployment and hosting to ensure seamless performance.",
    tag: ["Codeigniter4","Html5","Css3","Bootstrap5","Python","Mysql","Mongodb","DigitalOcean","System-services"],
    imgUrl: "smartmach.png",
    git: "https://github.com/strategynaveen/smarttech"
  },
  {
    title: "Terion",
    description:
      "Developed Terion, an invoice generation software with log-wise invoicing, handling both front-end and back-end development. Integrated payment gateway APIs and managed deployment for a seamless user experience.",
    tag: ["Reactjs","Material UI","Bootstrap5","Nodejs","Postgresql","DigitalOcean","System-services","Razorpay"],
    imgUrl: "terion.png",
    git: "https://github.com/strategynaveen/terion_git"
  },
  {
    title: "Quantanics Webpage",
    description:
      "Developed the company website with a fully responsive design, ensuring smooth performance across mobile, tablet, and desktop devices. Focused on delivering a clean, user-friendly interface with modern UI practices.",
    tag: ["Laravel","Bootstrap5","DigitalOcean","System-services"],
    imgUrl: "quantanics_web.png",
    git: "https://github.com/strategynaveen/quantanics_laravel"
  },
  {
    title: "ERP Software",
    description:
      "Developed and managed an ERP software solution, ensuring accurate data processing with complete front-end and back-end handling. Deployed and hosted the application on a dedicated server for reliable performance.",
    tag: ["Laravel 11","Postgres","Live Wire","Apexcharts"],
    imgUrl: "mobile_iot.jpeg",
    git: "https://github.com/strategynaveen/Peri-Work"
  },
  {
    title: "Online Compiler and Certificate Generation",
    description:
      "plan and create test cases, test scripts and test the product using both manual and selinium automation testing.",
    tag: ["Reactjs","Nodejs","Expressjs","Material UI","Tailwind css","Fabricjs"],
    imgUrl: "certificate.png",
    git: "https://github.com/strategynaveen/learning_canva"
  },
];
