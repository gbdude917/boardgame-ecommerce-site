import { Fragment } from "react";

import FeaturedItem from "./FeaturedItem";

// Interfaces

// interface ItemObject {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
// }

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
  official_url: string;
  year_published: number;
}

interface FeaturedItemsList {
  list: Data[];
}

function FeaturedItemsList(props: FeaturedItemsList) {
  return (
    <Fragment>
      {props.list.map((item: Data) => (
        <FeaturedItem
          key={item.id}
          id={item.id}
          image={item.images.small}
          title={item.name}
          description={item.description_preview}
        />
      ))}
    </Fragment>
  );
}

export default FeaturedItemsList;
