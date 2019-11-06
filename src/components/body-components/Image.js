import React from "react";


function Image(props) {
 return(
     <div className='image-div'>
        <h3>The Title of this Image: {props.title}</h3>
        <img className='space-image' alt='Space' src={props.url}/>
        <h4>About this Image:</h4>
        <p>{props.explanation}</p>
    </div>
 )
};

export default Image