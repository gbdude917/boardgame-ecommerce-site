import classes from "./ProductSection.module.css";
import ProductList from "./ProductList";

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
}

interface Props {
  list: Data[];
}

function ProductSection(props: Props) {
  return (
    <div className={classes.container}>
      <h2>Results</h2>
      <div>
        <ProductList list={props.list} />
      </div>
    </div>
  );
}

export default ProductSection;
