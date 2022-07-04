import styled from "styled-components";

export const RegisterPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #dedede;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 15px;
  border: none;
  outline: none;
  height: 5px;
  width: 300px;
  padding: 1.2rem 0 1.2rem 1rem;
  margin: 1rem 0;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 60%;
  height: 40px;
  margin-top: 20px;
  border-radius: 25px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bolder;
  background: #f65504;

  &:hover {
    cursor: pointer;
    background: #000;
    transition: all ease-in-out 0.2s;
  }
`;

export const LoginButton = styled.button`
  padding-top: 11px;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 15px;
  text-decoration-line: underline;
  color: #737373;

  &:hover {
    color: #f65504;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: red;
  text-align: center;
`;
