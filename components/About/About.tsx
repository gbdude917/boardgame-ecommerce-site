import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.container}>
      <h1>About</h1>
      <p>
        This is a small project I made in my downtime during my Summer 2022
        internship. This site was built with NextJS and was designed to immitate
        a boardgame ecommerce site. My primary goal was to learn React, NextJS,
        and Typescript through a personal project. You can check out my Github
        or connect with me on Linkedin by clicking the icons down on the footer.
        The API used to retrieve the board games was from this site:{" "}
        <a href="https://www.boardgameatlas.com/api/docs">Board Game Atlas</a>.
      </p>
    </div>
  );
}

export default About;
