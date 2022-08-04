import classes from "./FeaturedItemsSection.module.css";
import FeaturedItemsList from "./FeaturedItemsList";

// Interfaces
interface DataImages {
  large: string;
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
  amount: number;
}

interface FeaturedItemsSection {
  list: Data[];
}

function FeaturedItemsSection(props: FeaturedItemsSection) {
  return (
    <section className={classes.section}>
      <h2>Featured Games</h2>
      <div className={classes.list}>
        <FeaturedItemsList list={props.list} />
      </div>
    </section>
  );
}

export default FeaturedItemsSection;
