import Head from "next/head";
import AppLayout from "../src/components/layout/AppLayout";
import Calc from "./home";
import Font from "./Font"

export async function getStaticProps() {

  return {
    props: {
  
    },
    revalidate: 18000,
  };
}

const IndexPage = ({ }) => {
  return (
    <>
      <Head>
        <title>Calculadora Projuris</title>
        <meta name="description" content="Calculadora de indices" />
        <link rel="icon" href="" />
      </Head>
        <AppLayout>
          <Calc />
          <Font />
        </AppLayout>
    </>
  );
};

export default IndexPage;
