import HeaderLanding from "../../HeaderLanding";
import Mockups from "./sections/Mockups";
import Events from "./sections/events";
import Presentation from "./sections/Presentation";
import WhitePaper from "./sections/WhitePaper";
import * as S from "./styles";

const LandingPage = () => {
  return (
      <S.Container>
        <HeaderLanding />
        <Presentation />
        <Events />
        <Mockups />
        <WhitePaper />
      </S.Container>
  );
};

export default LandingPage;
