import { Fragment } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    image:
      "https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__opengraph/img/0A_yzGwxraMhSkdgPWbwChQeSvE=/fit-in/1200x630/filters:strip_icc()/pic3615739.png",
    name: "Spirit Island",
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

function ProductsListPage() {
  return (
    <Fragment>
      {/* Filter Component */}
      <h1>Products Page</h1>
    </Fragment>
  );
}

export default ProductsListPage;
