import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  padding-top: 11px;
  background: none;
  border: none;
  font-weight: 600;
  font-size: 14px;
  text-decoration-line: underline;
  color: #737373;

  &:hover {
    color: red;
    transition: all ease-in-out 0.2s;
    cursor: pointer;
  }
`;

export const CheckBoxContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 11px;
  height: 16px;
  margin-top: 0.5rem;

  &::before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: 1px;
    background-color: #fff;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
    z-index: 1;
  }

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #fff;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }

  & [type="checkbox"] {
    display: none;

    &:checked + label {
      color: #aeaeae;

      &::before {
        background-color: #f65504;
        border: 1px solid #f65504;
      }
    }
  }

  & label {
    padding-left: 35px;
    font-size: 17px;
    line-height: 20px;
    white-space: nowrap;

    &::before {
      content: "";
      border: solid 1px #b9b9b9;
      border-radius: 50%;
      width: 21px;
      height: 21px;
      position: absolute;
      left: 0;
      transition: all ease-in-out 0.2s;
    }
  }
`;
