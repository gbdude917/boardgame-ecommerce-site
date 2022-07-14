import { Fragment } from "react";

import FeaturedItem from "./FeaturedItem";

// Interfaces
interface FeaturedItemsList {
  list: any;
}

interface ItemObject {
  id: number;
  image: string;
  title: string;
  description: string;
}

function FeaturedItemsList(props: FeaturedItemsList) {
  return (
    <Fragment>
      {props.list.map((item: ItemObject) => (
        <FeaturedItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </Fragment>
  );
}

export default FeaturedItemsList;
