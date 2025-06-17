import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "./Information";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="social-icons">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="social-link"
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      <div className="container text-center">
        <p className="footer-text">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
