import React from "react";


function Image(props) {
 return(
    <img className='space-image' alt='Space' src={props.url}/>
 );
};

export default Image