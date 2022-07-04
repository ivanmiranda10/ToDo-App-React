import React from "react";
import { HeaderContainer, Icon, Title, Question } from "./styles";
import poincenotIcon from "../../Utils/montania-noche.svg";

const Header = ({ listOfToDos, userAPI }) => {
  return (
    <HeaderContainer>
      <Icon src={poincenotIcon} alt="icon" />
      {listOfToDos.length >= 1 ? null : (
        <>
          <Title>To do list</Title>
          <Question>{`${
            userAPI?.email &&
            `Hola ${userAPI.email.substring(0, userAPI.email.indexOf("@"))}!`
          } ¿Qué cosas tenés que terminar hoy?`}</Question>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
