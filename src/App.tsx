import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logos from "./images/photo.jpg"

import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGithub,
  FaGit,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";
import BottomNav from "./BottomNav";
import { icons, navigationLinks, projects, socialLinks } from "./Information";
import Footer from "./Footer";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeSection, setActiveSection] = useState<string>("home");
  const words = ["Freelancer", " Web Developer", "Creator"];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 100 : 200;
    const word = words[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === word.length)
          setTimeout(() => setDeleting(true), 1000);
      } else {
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, words]);
  useEffect(() => {
    const sections = document.querySelectorAll(".page");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0nnhonf",
        "template_xyih3nz",
        formData,
        "fJJ0hok8CgthLbQwP"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const skills = [
    { id: "html", icon: <FaHtml5 className="icon html" />, name: "HTML5" },
    { id: "css", icon: <FaCss3Alt className="icon css" />, name: "CSS3" },
    { id: "sass", icon: <FaSass className="icon sass" />, name: "Sass" },
    {
      id: "tailwind",
      icon: <SiTailwindcss className="icon tailwind" />,
      name: "Tailwind",
    },
    {
      id: "bootstrap",
      icon: <FaBootstrap className="icon bootstrap" />,
      name: "Bootstrap",
    },
    { id: "js", icon: <FaJs className="icon js" />, name: "JavaScript" },
    {
      id: "ts",
      icon: <SiTypescript className="icon ts" />,
      name: "TypeScript",
    },
    { id: "react", icon: <FaReact className="icon react" />, name: "React" },
    { id: "redux", icon: <SiRedux className="icon redux" />, name: "Redux" },
    {
      id: "next",
      icon: <SiNextdotjs className="icon next" />,
      name: "Next.js",
    },
    { id: "figma", icon: <FaFigma className="icon figma" />, name: "Figma" },
    { id: "git", icon: <FaGit className="icon git" />, name: "Git" },
    {
      id: "github",
      icon: <FaGithub className="icon github" />,
      name: "GitHub",
    },
    {
      id: "firebase",
      icon: <SiFirebase className="icon firebase" />,
      name: "Firebase",
    },
    {
      id: "supabase",
      icon: <SiSupabase className="icon supabase" />,
      name: "Supabase",
    },
  ];
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="container page-wrap">
      <BottomNav
        activeSection={activeSection}
        handleNavigation={handleNavigation}
      />
      <aside className="sidebar">
        <div className="sidebar__logo">
          <img
            style={{ borderRadius: "50%" }}
            width={100}
            src={Logos}
            alt="Logo"
            className="Logo"
          />
          <p className="name">Madina Muzaffarovna</p>
        </div>

        <ul className="sidebar__social">
          {socialLinks.map(({ href, icon, label }, idx) => (
            <li key={idx}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </a>
            </li>
          ))}
        </ul>

        <nav className="sidebar__navigation">
          <ul>
            {navigationLinks.map(({ id, label, icon }) => (
              <li key={id}>
                <button
                  className={`nav-button ${
                    activeSection === id ? "active" : ""
                  }`}
                  onClick={() => handleNavigation(id)}
                >
                  <i className={icon}></i> {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar__footer">&copy; 2025 Your Portfolio</div>
      </aside>

      <div
        className={`pages ${activeSection !== "home" ? "with-scrollbar" : ""}`}
      >
        <section id="home" className="page home ">
          <div className="homex">
            <h1>Madina Davlatova</h1>
            <p>
              I'm a <span className="typing-text"> {currentWord}</span>
            </p>
            <div className="iconss">
              {icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.url}
                  alt={icon.name}
                  title={icon.name}
                  className="w-10 h-10 hover:scale-110 transition-transform"
                />
              ))}
            </div>
            <button
              onClick={() => handleNavigation("contact")}
              className="contact-btn"
            >
              CONTACT ME
            </button>
          </div>
        </section>
        <section id="about" className="page about">
          <div style={{ width: "100%" }}>
            <div className="about-container">
              <div className="about-text">
                <motion.div
                  className="about-text"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <h2>About Me</h2>
                </motion.div>

                <div>
                  <div className="about_me">
                    <div className="about-me-text">
                      <p>
                        Hi, I'm Madina Davlatova — a Full Stack Developer
                        working with Next.js/React on the frontend and Java
                        (Spring Boot) on the backend. I enjoy creating
                        responsive, user-friendly web applications that solve
                        real-world problems. With a strong foundation in both
                        modern JavaScript frameworks and robust Java backend
                        systems, I aim to build efficient, scalable, and
                        maintainable solutions. I'm always curious, always
                        learning — especially when it comes to new technologies
                        and creative problem-solving.
                      </p>

                      <p className="p1">
                        When I'm not coding, you can usually find me watching
                        movies, reading psychological and personal growth books,
                        or exploring new places. Let's connect and create
                        something amazing together!
                      </p>
                    </div>
                    <div className="about-image">
                      <img
                        src={Logos}
                        alt="Profile"
                        className="img-fluid rounded"
                      />
                    </div>
                  </div>
                  <div className="btx">
                    <p>More about me</p>
                    <a
                      href="/Resume (3).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ rotate: [0, -20, 20, -20, 20, 0] }}
                        transition={{
                          duration: 2,
                          repeat: 1,
                        }}
                      >
                        Resume
                      </motion.button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills-icons-section skills page">
          <h2 className="skills-icons-title">Skills</h2>
          <div className="icons-wrapper">
            {skills.map((skill) => (
              <div key={skill.id} className={`icon-item ${skill.id}`}>
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="projects" className="projects-wrapper page projects">
          <h1 className="projects-title">My Projects</h1>

          <div className="carousel">
            <button className="nav-btn left" onClick={handlePrev}>
              ‹
            </button>

            <div className="carousel-track">
              {projects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  className={`project-card ${
                    index === activeIndex ? "active" : "hidden"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-content">
                    <img
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "200px",
                        height: "200px",
                        marginBottom: "10px",
                      }}
                      src={project.photo}
                      alt="rasm"
                    />
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                  </div>
                </a>
              ))}
            </div>

            <button className="nav-btn right" onClick={handleNext}>
              ›
            </button>
          </div>

          <div className="indicators">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? "active-dot" : ""}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </section>
        <section id="contact" className="page contact">
          <h1>Contact Us</h1>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact__form-submit">
              Send Message
            </button>
          </form>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;
