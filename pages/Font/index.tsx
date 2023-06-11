import type { NextPage } from "next";
import Head from "next/head";
import ValoresPage from "../../src/components/templates/Fonte";

const Fonte: NextPage = () => {
  return (
    <>
      <Head>
        <title>Consulta Indices Projuris</title>
        <meta
          name="description"
          content="Junte-se à nossa plataforma revolucionária."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ValoresPage />
    </>
  );
};

export default Fonte;
