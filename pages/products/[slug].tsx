import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import GamePage from "../../components/GamePage/GamePage";
import { getClosestMatch } from "../../lib/get-data";

function ProductPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data } = props;
  return <GamePage data={data} />;
}

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context || !context.params) {
    return {
      notFound: true,
    };
  }

  // Get the game the query is calling for
  const data = await getClosestMatch(context.params.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
