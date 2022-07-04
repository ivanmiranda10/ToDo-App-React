import styled from "styled-components";

export const Input = styled.input`
  padding: 0 35px;
  background-color: transparent;
  border: 1px solid transparent;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 80px;
  color: #000;
  width: 100%;

  & ::placeholder {
    color: #b9b9b9;
  }

  &:focus {
    outline: none;
  }
`;
