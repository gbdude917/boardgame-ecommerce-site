import classes from "./GamePage.module.css";
import StaticSection from "./StaticSection";
import StickySection from "./StickySection";

// Interfaces
interface DataImages {
  large: string | string;
  medium: string;
  original: string;
  small: string;
  thumb: string;
}

interface Data {
  id: string;
  name: string;
  description_preview: string;
  description: string;
  images: DataImages;
  min_players: number;
  max_players: number;
  msrp_text: string;
  msrp: number;
  official_url: string;
  year_published: number;
  publisher: string;
  difficulty: number;
  age: number;
  min_playtime: number;
  max_playtime: number;
}

interface Props {
  data: Data;
}

function GamePage(props: Props) {
  const { data } = props;

  // Validity check
  let minPlayers = "N/A",
    maxPlayers = "N/A",
    minPlaytime = "N/A",
    maxPlaytime = "N/A",
    age = "N/A";
  if (data.min_players) minPlayers = data.min_players.toString();
  if (data.max_players) maxPlayers = data.max_players.toString();
  if (data.min_playtime) minPlaytime = data.min_playtime.toString();
  if (data.max_playtime) maxPlaytime = data.max_playtime.toString();
  if (data.age) age = age.toString();

  return (
    <div className={classes.container}>
      <div className={classes.static}>
        <section className={classes.imageSection}>
          <img src={data.images.original} alt={data.name} />
        </section>

        <div className={classes.phoneSticky}>
          <StickySection
            title={data.name}
            price={data.msrp_text}
            min_players={minPlayers}
            max_players={maxPlayers}
            official_url={data.official_url}
            year_published={data.year_published}
            publisher={data.publisher}
            difficulty={data.difficulty}
            age={age}
            min_playtime={minPlaytime}
            max_playtime={maxPlaytime}
          />
        </div>

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
          min_players={minPlayers}
          max_players={maxPlayers}
          official_url={data.official_url}
          year_published={data.year_published}
          publisher={data.publisher}
          difficulty={data.difficulty}
          age={age}
          min_playtime={minPlaytime}
          max_playtime={maxPlaytime}
        />
      </div>
    </div>
  );
}

export default GamePage;
