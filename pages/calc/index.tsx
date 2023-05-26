import type { NextPage } from "next";
import Head from "next/head";
import Calculadora from "../../src/components/templates/Calc";

const Calc: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calculadora Indices Projuris</title>
        <meta
          name="description"
          content="Junte-se à nossa plataforma revolucionária que une artistas, organizadores e o público em uma experiência única com a tecnologia blockchain."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calculadora />
    </>
  );
};

export default Calc;
