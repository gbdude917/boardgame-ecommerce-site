import Link from "next/link";

import classes from "./FeaturedItem.module.css";
import Card from "../../UI/Card";

interface FeaturedItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
}

function FeaturedItem(props: FeaturedItemProps) {
  return (
    <Card>
      <div className={classes.container}>
        <Link href={`/products/${props.title}`}>
          <a>
            <div className={classes.contents}>
              <h3>{props.title}</h3>
              <img src={props.image} alt={props.title} />
              <section>{props.description}</section>
            </div>
          </a>
        </Link>
        <div className={classes.button}>
          <button onClick={props.onAdd}>Add to Cart</button>
        </div>
      </div>
    </Card>
  );
}

export default FeaturedItem;
