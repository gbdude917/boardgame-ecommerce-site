import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { getNRandomData, deleteUndefined } from "../lib/get-data";

import classes from "../styles/Home.module.css";
import HeroImage from "../components/Sections/HomePageImages/HeroImage";
import FeaturedItemsSection from "../components/Sections/FeaturedItems/FeaturedItemsSection";
import Description from "../components/Sections/Description/Description";
import SecondImage from "../components/Sections/HomePageImages/SecondImage";

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <div className={classes.container}>
      <HeroImage />
      <FeaturedItemsSection list={props.featuredGames} />
      <SecondImage />
      <Description />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredGames = await getNRandomData(4);

  deleteUndefined(featuredGames); // Remove undefined values

  return {
    props: { featuredGames },
  };
};
