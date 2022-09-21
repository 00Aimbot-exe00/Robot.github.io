import type { NextPage } from "next";
import Head from "next/head";

import ContactDetails from "../components/Contact";

const Contact: NextPage = () => (
  <>
    <Head>
      <title>Richard Ekwonye | Contact</title>
    </Head>

    <ContactDetails />
  </>
);

export default Contact;
