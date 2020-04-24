import React from "react";
import styled from "styled-components";

import Modal from "../modals/Modal";
import LoginForm from "../pages/login/LognForm";

const bgImgUrl = require("../../images/formBg.jpg");

const LoginModal = ({ closeLoginModal }) => {
  return (
    <Modal closeModal={closeLoginModal}>
      <Wrapper className="login-modal" bgImgUrl={bgImgUrl}>
        <LoginForm />
        <span>
          Don't have an account?
          <span className="login-modal__go-reg">
            <span className="icon-user-plus" /> Register
          </span>
        </span>
      </Wrapper>
    </Modal>
  );
};

export default LoginModal;

const Wrapper = styled.div`
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  box-sizing: border-box;
  background-image: ${({ bgImgUrl }) => `url(${bgImgUrl})`};

  span:nth-of-type(1) {
    margin-left: 3px;
  }

  .login-modal__go-reg {
    font-weight: 600;
    text-decoration: underline;
  }
`;
