import React from "react";
import styled from "styled-components";

const Modal = ({ children, openModal, closeModal }) => {
  return (
    <ModalWrapper className="modal-wrapper">
      <ModalContent className="modal-content"></ModalContent>
      <ModalLayout onClick={() => closeModal && closeModal()} />
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  z-index: 9999;
  display: flex;
  min-width: 300px;
  min-height: 300px;
  border-radius: 5px;
  background-color: #303030;
`;

const ModalLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.6);
`;
