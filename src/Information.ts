import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedinIn,
  faUpwork,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Calculator from "./calculator1.jpg";
import Curcuit from "./images/curcuit1.jpg";
import Chat from "./images/chat1.jpg";
import Lesson from "./images/lesson1.jpg";
import Trello from "./images/trello1.jpg";
import Greenshop from "./images/greenshop.jpg";
import Barberbook from "./images/barberbook.jpg";
import CV from "./images/cv.jpg";
export const socialLinks = [
  {
    href: "https://github.com/madinadev2107",
    icon: faGithub,
    label: "Github",
  },
  {
    href: "https://www.instagram.com/your.mad1w_?igsh=cnl3OG03ZHkzY2Z3",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/share/18on7wiVGc/",
    icon: faFacebookF,
    label: "Facebook",
  },

  {
    href: "https://www.linkedin.com/in/muzaffarovna-madina-715996346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  { href: "https://www.upwork.com", icon: faUpwork, label: "Upwork" },
  {href:"https://t.me/your_mad1w", icon:faTelegram, label:"Telegram"}
];
export const navigationLinks = [
  { id: "home", label: "Home", icon: "fas fa-home" },
  { id: "about", label: "About", icon: "fas fa-info-circle" },
  { id: "skills", label: "Skills", icon: "fas fa-cogs" },
  { id: "projects", label: "Projects", icon: "fas fa-folder-open" },
  { id: "contact", label: "Contact", icon: "fas fa-envelope" },
];
export const icons = [
  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
];
export const projects = [
  {
    id: 1,
    title: "Calculator",
    desc: "Calculator with react js and bootstrap.",
    link: "https://calculator-masha.vercel.app/",
    photo: Calculator,
  },
  {
    id: 2,
    title: "Circuit",
    desc: "Curcuit figma with CSS",
    link: "https://figma1-mocha.vercel.app/",
    photo: Curcuit,
  },
  {
    id: 3,
    title: "Trello",
    desc: "Task manager with react js, bootstrap and realtime database",
    link: "https://trello-azure-psi.vercel.app/",
    photo: Trello,
  },
  {
    id: 4,
    title: "Lesson manager",
    desc: "Lesson manager with react js, bootstrap",
    link: "https://manage-lesson-s-video.vercel.app/",
    photo: Lesson,
  },
  {
    id: 5,
    title: "Chat",
    desc: "Chat with reactjs, tailwindCSS ",
    link: "https://chatmadiw.vercel.app/",
    photo: Chat,
  },
  {
    id: 6,
    title: "Greenshop",
    desc: "online shop with nextjs, tailwindCSS, supabase",
    link: "https://greenshop-tau.vercel.app/",
    photo: Greenshop,
  },
  {
    id: 7,
    title: "Barberbook",
    desc: "barberbook with nextjs, tailwindCSS, supabase ",
    link: "https://barbershop-six-phi.vercel.app/",
    photo: Barberbook,
  },
  {
    id: 8,
    title: "CVBuilder",
    desc: "CVbuilder with nextjs, tailwindCSS, supabase, html2canvas + jsPDF ",
    link: "https://c-vbuilder-six.vercel.app/",
    photo: CV,
  },
];
