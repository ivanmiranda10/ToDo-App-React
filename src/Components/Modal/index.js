import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./modal";
import { ClearAllButton, Icon } from "./styles";

const ButtonModal = ({ userAPI }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div>
      <ClearAllButton
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}
        type="button"
      >
        <Icon />
      </ClearAllButton>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close} userAPI={userAPI} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonModal;
