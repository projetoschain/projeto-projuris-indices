import { useRouter } from "next/router";
import Header from "../../Header";
import Button from "./components/Button";
import CardDashboard from "./components/CardDashboard";
import Chart from "./components/Chart";
import * as S from "./styles";

const Dashboard = () => {

  const { push } = useRouter();

  const handleOpenPancakeSwap = () => {
    window.open(
      "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e",
      "_blank"
    );
  };

  return (
    <S.Container>
      <Header />
      <S.Dashboard>
        <S.InformationsArea>
          <div>
            <h1>Olá, nessa áres é possivel consultar os valores atualizados na fonte</h1>
            <p>
              você pode baixar o PDF contendo a URL de todas as fontes, ou se preferir consultar
              o indice de sua preferencia.
            </p>
          </div>
          <S.ButtonsArea>
            <Button onClick={() => push("/saque")}>SACAR</Button>

            <Button>BAIXAR PDF FONTES</Button>
          </S.ButtonsArea>
          <S.CardsArea>
            
          </S.CardsArea>
          <div>
            <h1>Consultar indice</h1>
            <div className="chart">
              <Chart />
            </div>
          </div>
        </S.InformationsArea>
      </S.Dashboard>
    </S.Container>
  );
};

export default Dashboard;
