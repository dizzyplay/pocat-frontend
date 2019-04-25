import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export default createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
     body{
       font-size:14px;
       font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;
