import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import GamePage from "../../components/GamePage/GamePage";
import { getClosestMatch } from "../../lib/get-data";

function ProductPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data } = props;
  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta
          name="description"
          content={data.description_preview || data.description}
        />
      </Head>
      <GamePage data={data} />
    </>
  );
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
