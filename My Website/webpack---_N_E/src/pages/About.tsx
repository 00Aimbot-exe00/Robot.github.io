import type { NextPage } from "next";
import Head from "next/head";

import AboutHero from "../components/AboutHero";
import AboutDetails from "../components/AboutDetails";
import Services from "../components/Services";
import PersonalInterests from "../components/PersonalInterests";
import AwardsAndRecognition from "../components/AwardsAndRecognition";
import LatestProject from "../components/LatestProject";
import SendMessage from "../components/SendMessage";

const About: NextPage = () => (
  <>
    <Head>
      <title>Richard Ekwonye | About</title>
    </Head>

    <AboutHero />
    <AboutDetails />
    <Services />
    <PersonalInterests />
    <AwardsAndRecognition />
    <LatestProject />
    <SendMessage sectionNumber="06" />
  </>
);

export default About;
