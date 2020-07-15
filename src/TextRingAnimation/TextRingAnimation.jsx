import React, { useState,useRef,useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './_TextRingAnimation.scss';

const Sector =styled.div`
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    text-transform: uppercase;
    transform: rotateY(${props=>props.rotateY}deg) translateZ(7rem);
`;

function GsapAnimation(props) {

    // const {str} =props;
    let str ="JUST DO IT NIKE.." ;
    let charGap = 360/str.length;
	return (
		<div className="preloader">
            <div className="preloader__ring">
                {
                    [...str].map((c,i) => <Sector rotateY={i*charGap}>{c}</Sector>)                       
                }
            </div>
        </div>
	);
}

export default GsapAnimation;
