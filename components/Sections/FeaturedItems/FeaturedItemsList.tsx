import { Fragment } from "react";

import FeaturedItem from "./FeaturedItem";
import { useCartContext } from "../../../store/cart-context";

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

interface FeaturedItemsList {
  list: Data[];
}

function FeaturedItemsList(props: FeaturedItemsList) {
  const cartCtx = useCartContext();

  const addToCartHandler = (item: Data) => {
    cartCtx.addItem(item);
  };

  return (
    <Fragment>
      {props.list.map((item: Data) => (
        <FeaturedItem
          key={item.id}
          id={item.id}
          image={item.images.small}
          title={item.name}
          description={item.description_preview}
          onAdd={addToCartHandler.bind(null, item)}
        />
      ))}
    </Fragment>
  );
}

export default FeaturedItemsList;
