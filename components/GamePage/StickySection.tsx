import classes from "./StickySection.module.css";

// Interfaces
interface Props {
  title: string;
  price: string;
  min_players: string;
  max_players: string;
  official_url: string;
  year_published: number;
  publisher: string;
  difficulty: number;
  age: string;
  min_playtime: string;
  max_playtime: string;
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
}

function StickySection(props: Props) {
  let playerCountContent = "N/A";
  if (props.min_players !== "N/A" || props.max_players !== "N/A") {
    playerCountContent = `${props.min_players}-${props.max_players} Players`;
  }

  let ageContent = "N/A";
  if (props.age !== "N/A") {
    ageContent = `${props.age}+`;
  }

  let playtimeContent = "N/A";
  if (
    (props.min_playtime !== "N/A" || props.max_playtime !== "N/A") &&
    props.min_playtime === props.max_playtime
  ) {
    playtimeContent = `${props.max_playtime} mins`;
  } else if (
    (props.min_playtime !== "N/A" || props.max_playtime !== "N/A") &&
    props.min_playtime === props.max_playtime
  ) {
    playtimeContent = `${props.min_playtime} - ${props.max_playtime} mins`;
  }

  return (
    <div className={classes.wrapper}>
      <section className={classes.titleSection}>
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
        <div>
          <button onClick={props.onAdd} className={classes.button}>
            Add to Cart
          </button>
        </div>
      </section>

      <div className={classes.summary}>
        <section className={classes.summaryItem}>
          <h3>Number of Players</h3>
          <div>{playerCountContent}</div>
        </section>

        <section className={classes.summaryItem}>
          <h3>Difficulty</h3>
          <div>
            {props.difficulty === 0
              ? "N/A"
              : `${props.difficulty.toFixed(2)} / 5.00`}
          </div>
        </section>

        <section className={classes.summaryItem}>
          <h3>Age</h3>
          <div>{ageContent}</div>
        </section>

        <section className={classes.summaryItem}>
          <h3>Playtime</h3>
          <div>{playtimeContent}</div>
        </section>

        <section className={classes.summaryItem}>
          <h3>Publisher</h3>
          <div>
            <a href={props.official_url} target="_blank" rel="noreferrer">
              {props.publisher || "Not given"}
            </a>
          </div>
        </section>

        <section className={classes.summaryItem}>
          <h3>Year Published</h3>
          <div>{props.year_published || "Not given"}</div>
        </section>
      </div>
    </div>
  );
}

export default StickySection;
