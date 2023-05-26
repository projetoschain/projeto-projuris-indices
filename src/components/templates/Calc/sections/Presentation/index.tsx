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
              Tickets aren’t just an entry credential anymore. Own the moment in time. The moment and experience are captured in a single NFT.
              </S.Text>
            </div>
            <div className="buttons-presentation">
              <a href="#plans">
                <Button value="VER EVENTOS" />
              </a>

              <Button
                onClick={() => {
                  window.open("https://t.me/wvwcoinofficial", "_blank");
                }}
                colored={false}
                value="COMUNIDADE"
              />
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
