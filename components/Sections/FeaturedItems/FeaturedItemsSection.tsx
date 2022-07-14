import classes from "./FeaturedItemsSection.module.css";
import FeaturedItemsList from "./FeaturedItemsList";

// Interfaces
interface ListObjects {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface FeaturedItemsSection {
  list: ListObjects[]; // TODO: Array of objects
}

function FeaturedItemsSection(props: FeaturedItemsSection) {
  return (
    <section className={classes.section}>
      <h2>Featured Items</h2>
      <div className={classes.list}>
        <FeaturedItemsList list={props.list} />
      </div>
    </section>
  );
}

export default FeaturedItemsSection;
