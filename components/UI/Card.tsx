import classes from "./Card.module.css";

interface ChildProps {
  children: any;
}

function Card(props: ChildProps) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
