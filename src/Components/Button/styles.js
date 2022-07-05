import styled from "styled-components";

export const SubmitButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: 25px;
  width: 95%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  color: #a1a1a1;
  font-size: 1rem;
  background: #fcfcfc;

  &:hover {
    cursor: pointer;
    background: #000;
    color: #fcfcfc;
    transition: all ease-in-out 0.3s;
  }
`;
