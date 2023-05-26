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
          <S.H1>Chamaaaaaaaaaaaaa</S.H1>
          <S.Text>
          O time de suporte da Projuris não é professor de matetamica, sendo assim foi desenvolvida essa calculadora para facilitar a nossa vida, em nome de jesus, AMÉM !!!!!!!
          Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla 
          </S.Text>
        </IS.TextArea>
      </IS.Container>
    </S.Section>
  );
};

export default Mockups;
