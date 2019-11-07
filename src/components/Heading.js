import React from "react";
import styled from 'styled-components';

const TitleH1 = styled.h1`
    font-size: 64px;
    font-family: 'Gugi', cursive;
`;

const SubHeading = styled.h3`
    font-family: 'Raleway', sans-serif;
`;

function Heading(){
    return(
        <div>
            <TitleH1>NASA</TitleH1>
            <SubHeading>A Picture A Day</SubHeading>
        </div>
    )
}

export default Heading;