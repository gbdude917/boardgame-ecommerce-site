import classes from "./Description.module.css";
import Card from "../../UI/Card";

function Description() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2>Endless Fun for Everyone</h2>
        <div>
          <div className={classes.item}>
            <div>
              <h3>Fun For the Whole Family!</h3>
              <p>
                With over 1000+ boardgames, you will be able to find a boardgame
                to enjoy with friends and loved ones.
              </p>
            </div>
          </div>

          <div className={classes.item}>
            <div>
              <h3>An Endless Library!</h3>
              <p>
                We have an innumerable amount of boardgames, and we are ready to
                deliver them right to your doorstep.
              </p>
            </div>
          </div>

          <div className={classes.item}>
            <div>
              <h3>1, 2, 3 ... Play!</h3>
              <p>
                Finding and ordering a boardgame is easy as finding your
                boardgame, ordering, waiting, and playing!
              </p>
            </div>
          </div>

          <div className={classes.item}>
            <div>
              <h3>Product Quality</h3>
              <p>
                We make sure that all of our products are in the best condition.
                If you aren't satisfied, you can replace the board game for
                free!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
