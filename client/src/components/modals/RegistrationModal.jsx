import React from "react";
import styled from "styled-components";

import Modal from "./Modal";
import RegistrationForm from "../pages/loginOrRegister/RegistrationForm";

const bgImgUrl = require("../../images/formBg.jpg");

const RegistrationModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <Wrapper className="registration-modal" bgImgUrl={bgImgUrl}>
        <RegistrationForm closeModal={closeModal} />
        <span>
          Already have an account?
          <span className="registration-modal__go-reg">
            <span className="icon-user-plus" /> Login
          </span>
        </span>
      </Wrapper>
    </Modal>
  );
};

export default RegistrationModal;

const Wrapper = styled.div`
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  background-image: ${({ bgImgUrl }) => `url(${bgImgUrl})`};

  span:nth-of-type(1) {
    cursor: pointer;
    margin-left: 3px;
  }

  .registration-modal__go-reg {
    font-weight: 600;
    text-decoration: underline;
  }
`;
