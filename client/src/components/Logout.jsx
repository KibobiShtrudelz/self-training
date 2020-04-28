import React from "react";
import styled from "styled-components";

// TODO: използвай локалсторидж евента при триене, за да презаредиш хедъра и да върнеш нелогнатия компонен

const Logout = () => (
  <LogoutSpan
    className="logout"
    onClick={() =>
      localStorage.setItem(
        "loginCredentials",
        JSON.stringify({ email: "", password: "" })
      )
    }
  >
    Logout
  </LogoutSpan>
);

export default Logout;

const LogoutSpan = styled.span`
  color: red;
`;
