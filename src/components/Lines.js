import React from "react";

function Line(){
    const line_style = {
        stroke: "#00AAE6",
        strokeWidth:"1"
    };

    const line_style2 = {
        stroke: "#FE4A49",
        strokeWidth:"0.3"
    };

    return (
    <>
    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#00AAE6" points="20,100 100,0 100,100"/>
        <line style={line_style} x1="5" y1="100" x2="100" y2="-15"/>
        <line style={line_style2} x1="9" y1="90" x2="100" y2="-20"/>
    </svg>
    
    </>
    );

}

export default Line;