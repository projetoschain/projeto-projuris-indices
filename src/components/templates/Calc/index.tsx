import HeaderLanding from "../../HeaderLanding";
import Mockups from "./sections/Mockups";
import Calc from "./sections/Calc";
import Fonte from "../Fonte";
import Presentation from "./sections/Presentation";
import WhitePaper from "./sections/WhitePaper";
import * as S from "./styles";

const LandingPage = () => {
  return (
      <S.Container>
        <HeaderLanding />
        <Presentation />
        <Calc />
        <Mockups />
        <WhitePaper />
      </S.Container>
  );
};

export default LandingPage;
