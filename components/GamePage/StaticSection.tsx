// Interfaces
interface Props {
  title: string;
  img: string;
  description: string;
}

function StaticSection(props: Props) {
  const descriptionContents = props.description ? (
    <div dangerouslySetInnerHTML={{ __html: props.description }} />
  ) : (
    "Description not given"
  );
  return (
    <div>
      <section>
        <h2>Description</h2>
        {descriptionContents}
      </section>
    </div>
  );
}

export default StaticSection;
