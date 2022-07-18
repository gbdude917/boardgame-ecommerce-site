import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { getNData } from "../lib/get-data";

import classes from "../styles/Home.module.css";
import HeroImage from "../components/Sections/HomePageImages/HeroImage";
import FeaturedItemsSection from "../components/Sections/FeaturedItems/FeaturedItemsSection";
import Description from "../components/Sections/Description/Description";
import SecondImage from "../components/Sections/HomePageImages/SecondImage";

const DUMMY_DATA = [
  {
    id: 1,
    image:
      "https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__opengraph/img/0A_yzGwxraMhSkdgPWbwChQeSvE=/fit-in/1200x630/filters:strip_icc()/pic3615739.png",
    title: "Spirit Island",
    description:
      "A fun co-operative game for 1-6 players. Command your favorite spirit and defend the island from invaders!",
  },
  {
    id: 2,
    image:
      "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__opengraph/img/XDh_MXme0-wpRJ_IsOcDjEgdvTQ=/fit-in/1200x630/filters:strip_icc()/pic2437871.jpg",
    title: "Gloomhaven",
    description:
      "A 1-4 player adventure where players quest and defeat monsters ravaging the city of Gloomhaven.",
  },
  {
    id: 3,
    image:
      "https://cf.geekdo-images.com/LIooA9bTdjnE9qmhjL-UFw__opengraph/img/I2xd8RqcWxXURKI8DwTf3TAblTI=/fit-in/1200x630/filters:strip_icc()/pic3118622.jpg",
    title: "Mansions of Madness 2nd Edition",
    description:
      "Form an unlikely team of 2-5 investigators and the dark secrets within the city.",
  },
  {
    id: 4,
    image:
      "https://cf.geekdo-images.com/hRuD1y5BxdNpssgBqamS0A__opengraph_letterbox/img/J6sV2Z0MfdI7ORbvtIrEJTVRcio=/fit-in/1200x630/filters:fill(auto):strip_icc()/pic4595897.jpg",
    title: "Middara",
    description:
      "Go on an epic campaign journey for 1-4 players in this story-driven, action-packed, JRPG-like board game.",
  },
];

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
  const featuredGames = await getNData(4);

  return {
    props: { featuredGames },
  };
};
