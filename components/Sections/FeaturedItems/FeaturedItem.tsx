import Link from "next/link";

import classes from "./FeaturedItem.module.css";
import Card from "../../UI/Card";

interface FeaturedItemProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

function FeaturedItem(props: FeaturedItemProps) {
  const testHandler = () => {
    console.log("Featured Item");
  };
  return (
    <Link href="/products">
      <a>
        <Card>
          <div className={classes.container}>
            <div className={classes.contents}>
              <h3>{props.title}</h3>
              <img src={props.image} alt={props.title} />
              <section>{props.description}</section>
            </div>

            <div className={classes.button}>
              <button onClick={testHandler}>Add to Cart</button>
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default FeaturedItem;
