import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import GlobalStyle from "../Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme, { mytheme } from "../Styles/Theme";
import { HashRouter } from "react-router-dom";
import styled from "styled-components";
import Router from "./Routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Query = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const App = () => {
  const { data } = useQuery(Query);
  const isLoggedIn = data.isLoggedIn;
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyle />
        <HashRouter>
          <>
            <Router isLoggedIn={isLoggedIn} />
          </>
        </HashRouter>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
