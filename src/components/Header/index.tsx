import Image from "next/image";
import { FaHome, FaMoneyBill } from "react-icons/fa";
import * as S from "./styles";

const Header = () => {

  return (
    <S.Container>
      <S.NavItems>
        <S.NavIcon href="/">
          <FaHome size={30} />
        </S.NavIcon>
      </S.NavItems>
      <S.Main>
      </S.Main>
      <S.User>
        <S.NavIcon href="/fonte">
          <FaMoneyBill size={30} />
          <b> Projuris</b>
        </S.NavIcon>
      </S.User>
    </S.Container>
  );
};

export default Header;
