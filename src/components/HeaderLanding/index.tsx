import * as S from "./styles";
import useHeader from "./hooks/useHeader";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const HeaderLanding = () => {
  
  const { isVisible } = useHeader();

  return (
    <S.Container isVisible={isVisible}>
      <S.Logo>
        <Image
          src="https://i.ibb.co/0K4ZDj4/Projuris-Horizontal-Tagline-Monocrom-tico-Branco.png"
          alt="Logo"
          height={100}
          width={200}
          style={{
            width: "60%",
            height: "100%",
          }}
        />
      </S.Logo>
      <S.Options>
        <S.Option>
          <a href="#calc"><Button width={130} value="Calculadora" /></a>
        </S.Option> 
          <Link href={"/font"}><Button width={130} value="Buscar Fonte" /></Link>       
      </S.Options>
    </S.Container>
  );
};

export default HeaderLanding;
