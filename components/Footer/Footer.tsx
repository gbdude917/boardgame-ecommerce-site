// Third part imports: Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <section>Created with NextJS by Gabriel Leong</section>
        <div className={classes["icon-container"]}>
          <a
            href="https://github.com/gbdude917"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className={classes.icon} />
          </a>

          <a
            href="https://www.linkedin.com/in/gbleong"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
