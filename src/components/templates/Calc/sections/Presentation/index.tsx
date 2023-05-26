import Button from "../../../../Button";
import * as S from "../../styles";
import * as IS from "./styles";

const Presentation = () => {
  return (
    <S.Section>
      <IS.Container>
        <S.Sphere scaleInPx={200} background="#7023809a" left="10%" top="18%" />
        <S.Sphere
          scaleInPx={200}
          background="#281357"
          right="10%"
          bottom="10%"
        />
        <IS.Main>
          <div className="texts">
            <S.TextColored>
            SEJA BEM VINDO <span>A CALCULADORA DE INDICES PROJURIS.</span>
            </S.TextColored>
            <div
              style={{
                maxWidth: "500px",
              }}
            >
              <S.Text>
              Desenvolvida por Bruno Santos e Cristian Andrade
              </S.Text>
            </div>
            <div className="buttons-presentation">
             </div>
          </div>

          <div
            className="community"
            onClick={() => {
              window.open("https://t.me/wvwcoinofficial", "_blank");
            }}
          >
          </div>
        </IS.Main>
      </IS.Container>
    </S.Section>
  );
};

export default Presentation;
