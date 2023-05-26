import HeaderLanding from "../../HeaderLanding";
import Mockups from "./sections/Mockups";
import Events from "./sections/events";
import Presentation from "./sections/Presentation";
import * as S from "./styles";

const LandingPage = () => {
  return (
      <S.Container>
        <HeaderLanding />
        <Presentation />
        <Events />
        <Mockups />
      </S.Container>
  );
};

export default LandingPage;
