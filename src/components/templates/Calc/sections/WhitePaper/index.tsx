import Button from "../../../../Button";
import * as S from "../../styles";
import * as IS from "./styles";

const WhitePaper = () => {
  return (
    <IS.Container>
      <IS.Main>
        <S.H1>Acesse a nossa base de conhecimento</S.H1>
        <S.Text>
          Em nossa base de conhecimento você consegue esclarecer várias dúvidas relacionadas ao projuris e também 
          terá acesso a Justine!
        </S.Text>
        <Button value="BASE DE CONHECIMENTO" />
      </IS.Main>
    </IS.Container>
  );
};

export default WhitePaper;
