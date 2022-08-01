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
}

function StickySection(props: Props) {
  const addToCartHandler = () => {
    console.log("Added to Cart");
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
        <div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>

      <div>
        <section>
          <h3>Number of Players</h3>
          <div>
            {props.min_players}-{props.max_players} Players
          </div>
        </section>

        <section>
          <h3>Difficulty</h3>
          <div>{props.difficulty.toFixed(2)} / 5</div>
        </section>

        <section>
          <h3>Publisher</h3>
          <div>
            <a href={props.official_url} target="_blank">
              {props.publisher}
            </a>
          </div>
        </section>

        <section>
          <h3>Year Published</h3>
          <div>{props.year_published}</div>
        </section>
      </div>
    </div>
  );
}

export default StickySection;
