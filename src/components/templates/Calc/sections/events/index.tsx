
import * as S from "../../styles";
import * as IS from "./styles";

const events = [
  {
    level: 0,
    title: "Ticket Prata",
    description: "Direito de acesso a pista",
    rendimento: "0% - BRTX",
    aproximado: "$0,85",
    isEmphasis: false,
  },
  {
    level: 1,
    title: "Ticket Ouro",
    description: "Duração 21 dias (6 saques)",
    rendimento: "18%",
    aproximado: "$35,00",
    isEmphasis: true,
  },
  {
    level: 2,
    title: "Ticket Diammont",
    description: "Duração 30 dias (6 saques)",
    rendimento: "40%",
    aproximado: "$103,00",
    isEmphasis: false,
  },
];

const Events = () => {
  return (
    <S.Section id="events">
      <IS.Container>
        <S.H1>Calculadora de indices</S.H1>
        <IS.CardsArea>
        </IS.CardsArea>
      </IS.Container>
    </S.Section>
  );
};

export default Events;
