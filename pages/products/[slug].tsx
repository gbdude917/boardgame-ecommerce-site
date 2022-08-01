import { GetStaticProps, InferGetStaticPropsType } from "next";

import GamePage from "../../components/GamePage/GamePage";
import { getAllData, getExactGame } from "../../lib/get-data";

// Interfaces
interface DataImages {
  large: string | string;
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
  publisher: string;
  difficulty: number;
}

function ProductPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = props;
  return <GamePage data={data} />;
}

export default ProductPage;

export async function getStaticPaths() {
  const data = await getAllData(100);

  const paths: string[] = [];
  data.forEach((game: Data) => {
    paths.push(`/products/${game.name}`);
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return { notFound: true };
  }

  const slug = context.params.slug;

  try {
    const data = await getExactGame(slug);
    return data ? { props: { data } } : { notFound: true };
  } catch (e) {
    console.log(e);
    return { notFound: true };
  }
};
