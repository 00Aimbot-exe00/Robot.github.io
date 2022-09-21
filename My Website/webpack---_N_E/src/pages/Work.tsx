import type { NextPage } from "next";
import Head from "next/head";

import WorkTabs from "../components/WorkTabs";
import SendMessage from "../components/SendMessage";

const Work: NextPage = () => (
  <>
    <Head>
      <title>Richard Ekwonye | Work</title>
    </Head>

    <WorkTabs />
    <SendMessage sectionNumber="02" />
  </>
);

export default Work;
