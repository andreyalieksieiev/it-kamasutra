import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    margin: 0 auto;
    width: 1200px;

    grid-template-areas:
    "h h"
    "n c";

    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr; 
`;

export const Wrap = styled.div`
    grid-area: c;
    background-color: cornflowerblue;
`;