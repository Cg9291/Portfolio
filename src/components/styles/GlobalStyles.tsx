import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
*{
     margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
};
    body{
        height:100vh;
        width:100vw;
        padding:0;
        margin:0;
        //border:1px solid yellow;
        overflow-x:hidden
    };
    #root{
height:100%;
width:100%
 margin:0 ;
    };
`;

export default GlobalStyle;
