import React from "react";
import { useDispatch } from "react-redux";
import Backdrop from "./backdrop";
import { clearAll } from "../../Redux/Actions";
import {
  ModalContainer,
  ModalButtonsContainer,
  CancelButton,
  ResetButton,
  ModalContent,
  Title,
  Text,
} from "./styles";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 45,
      stiffness: 350,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      type: "spring",
      damping: 55,
      stiffness: 300,
    },
  },
};

const Modal = ({ handleClose, userAPI }) => {
  const dispatch = useDispatch();
  const resetList = () => {
    dispatch(clearAll(userAPI?.userId));
    handleClose();
  };
  return (
    <Backdrop onClick={handleClose}>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ModalContent>
          <Title>Empezar nueva lista</Title>
          <Text>
            Cuando comenzás una nueva lista, tu lista existente se elimina.
          </Text>
          <br />
          <Text> ¿Estás seguro que querés empezar una nueva lista?</Text>
        </ModalContent>
        <ModalButtonsContainer>
          <CancelButton
            onClick={handleClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
          >
            Cancelar
          </CancelButton>
          <ResetButton
            onClick={resetList}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="button"
          >
            Nueva Lista
          </ResetButton>
        </ModalButtonsContainer>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
