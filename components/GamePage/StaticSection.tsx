import classes from "./StaticSection.module.css";

// Interfaces
interface Props {
  title: string;
  img: string;
  description: string;
}

function StaticSection(props: Props) {
  return (
    <div>
      <section className={classes.imageSection}>
        <img src={props.img} alt={props.title} />
      </section>

      <section>
        <h2>Description</h2>
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
      </section>
    </div>
  );
}

export default StaticSection;
