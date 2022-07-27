import Link from "next/link";

import classes from "./Product.module.css";

// Interfaces
interface Props {
  id: string;
  name: string;
  msrp: string;
  image: string;
}

function Product(props: Props) {
  return (
    <div className={classes.wrapper}>
      <Link href={`/products/${props.name}`}>
        <a>
          <div
            id={props.id}
            key={props.id}
            className={classes.container}
            style={{
              backgroundImage: `url(${props.image})`,
            }}
          >
            <div className={classes.contents}>
              <div className={classes.name}>
                <h2>{props.name}</h2>
              </div>
              <div className={classes.price}>
                <h2>{props.msrp || <i>Price Not Listed</i>}</h2>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Product;
