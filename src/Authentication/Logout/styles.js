import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

export const ButtonContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 1);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f65504;
    color: #fff;
  }
`;
