import React from "react";
import styled from 'styled-components';

const ImageDiv = styled.div`
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
    width: 40%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin: 0 auto;
`;

const ImageH4 = styled.h4`

    font-size: 25px;
    margin: 5px 0;
`;

const AboutP = styled.p`

    font-size: 20px;
`;

function Image(props) {
 return(
     <ImageDiv>
        <h3>The Title of this Image: {props.title}</h3>
        <img className='space-image' alt='Space' src={props.url}/>
        <ImageH4>About this Image:</ImageH4>
        <AboutP>{props.explanation}</AboutP>
    </ImageDiv>
 )
};

export default Image