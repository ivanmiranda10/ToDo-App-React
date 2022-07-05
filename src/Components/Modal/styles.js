import styled from "styled-components";
import { motion } from "framer-motion";
import { BsPlusCircleFill } from "react-icons/bs";

export const ClearAllButton = styled(motion.button)`
  background: none;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled(BsPlusCircleFill)`
  font-size: 1.1rem;
  margin-top: 5px;
`;

export const ModalContainer = styled(motion.div)`
  width: clamp(50%, 700px, 90%);
  height: min(50%, 300px);
  background: #f5f5f5;
  margin: auto;
  padding: 0 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackdropStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

export const Title = styled.h1`
  font-weight: bold;
  padding: 1.5rem 0;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export const CancelButton = styled(motion.button)`
  position: relative;
  bottom: 1.5rem;
  padding: 0 3rem;
  min-height: 3rem;
  margin: auto 1.5rem 0 auto;
  background: #f0efef;
  color: #000;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
  }
`;
export const ResetButton = styled(motion.button)`
  position: relative;
  bottom: 1.5rem;
  padding: 0 3rem;
  min-height: 3rem;
  background: #101315;
  color: #eeeeee;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
  }
`;
