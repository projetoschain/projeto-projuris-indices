import Image from "next/image";
import * as S from "../../styles";
import * as IS from "./styles";

const Mockups = () => {
  return (
    <S.Section>
      <IS.Container>
        <S.Sphere scaleInPx={200} background="#7023809a" left="1%" top="18%" />
        <S.Sphere scaleInPx={200} background="#281357" right="1%" bottom="0%" />
        <IS.ImageMockup>
          <Image
            height={500}
            width={500}
            style={{ width: "66%", height: "100%" }}
            src="/mockup.png"
            alt="mockup"
          />
        </IS.ImageMockup>
        <IS.TextArea>
          <S.H1>O futuro dos ingressos</S.H1>
          <S.Text>
          Fornecemos as ferramentas para você criar valor real a partir do relacionamento com os fãs e recompensar os fãs pela participação e lealdade ao evento.
          Nós permitimos um controle incomparável do mercado secundário. Abra vários novos fluxos de receita enquanto expõe anunciantes, cambistas e fraudadores.
          </S.Text>
        </IS.TextArea>
      </IS.Container>
    </S.Section>
  );
};

export default Mockups;
