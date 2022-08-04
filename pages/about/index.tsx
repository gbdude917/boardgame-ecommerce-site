import Head from "next/head";

import About from "../../components/About/About";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about why Gabriel made this site and find out what he built the site with."
        />
      </Head>
      <About />
    </>
  );
}

export default AboutPage;
