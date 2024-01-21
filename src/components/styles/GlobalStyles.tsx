import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        max-height:100vh;
};
    body{
        height:100vh;
        width:100vw;
        padding:0;
        margin:0;
        overflow:hidden;
    };
    #root{
        height:100%;
        width:100%
        margin:0 ;
        padding:0;
    };
`;

export default GlobalStyle;
