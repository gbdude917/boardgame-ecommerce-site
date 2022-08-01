import classes from "./GamePage.module.css";
import StaticSection from "./StaticSection";
import StickySection from "./StickySection";

function GamePage(props: any) {
  const { data } = props;
  return (
    <div className={classes.container}>
      <div className={classes.static}>
        <StaticSection
          title={data.name}
          img={data.images.original}
          description={data.description}
        />
      </div>

      <div className={classes.sticky}>
        <StickySection
          title={data.name}
          price={data.msrp_text}
          min_players={data.min_players}
          max_players={data.max_players}
          official_url={data.official_url}
          year_published={data.year_published}
          publisher={data.publisher}
          difficulty={data.difficulty}
        />
      </div>
    </div>
  );
}

export default GamePage;
