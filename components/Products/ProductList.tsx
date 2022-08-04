import { Fragment, useEffect, useState } from "react";

import Product from "./Product";

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

interface Props {
  list: Data[];
}

function ProductList(props: Props) {
  return (
    <Fragment>
      {props.list.map((product) => (
        <Product
          id={product.id}
          key={product.id}
          name={product.name}
          msrp={product.msrp_text}
          image={product.images.large}
        />
      ))}
    </Fragment>
  );
}

export default ProductList;
