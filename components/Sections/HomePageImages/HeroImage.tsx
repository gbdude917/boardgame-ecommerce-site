import Link from "next/link";

import classes from "./HeroImage.module.css";

function HeroImage() {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-content"]}>
        <h1>Uncover a World Right At Your Table</h1>
        <h2>We offer the best boardgames at unbeatable prices.</h2>
        <Link href="/products">
          <a>
            <button>Search for Boardgames</button>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default HeroImage;
