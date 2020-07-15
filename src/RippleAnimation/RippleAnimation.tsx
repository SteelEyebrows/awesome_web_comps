import React, { useState,useRef,useEffect } from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';

import './rippleAnimation.scss';
// https://greensock.com/forums/topic/17320-background-parallax-effect-on-mouse-move/
//https://greensock.com/forums/topic/20134-help-needed-with-background-position-animation-related-to-mousemovement/

function RippleAnimation() {
	
	const {x, y, handleMouseMove} = useMove();
	const canvasElement = useRef<HTMLDivElement>(document.querySelector('.new'));

	useEffect(() => {		
		let offsetLeft = canvasElement.current?.offsetLeft;
		let offsetTop = canvasElement.current?.offsetTop;
		
		let pageX = x - offsetLeft;
		let pageY = y - offsetTop;
	
		let newvalueX = (pageX-window.innerWidth/2)/window.innerWidth * -100;
		let newvalueY = (pageY-window.innerHeight/2)/window.innerHeight * -30;
		
		gsap.to(canvasElement.current,0.5, {backgroundPosition: `${newvalueX}px ${newvalueY}px`});
	}, [x,y]);

	return (
		<div className="old" onMouseMove={handleMouseMove}>
			<div ref={canvasElement} className="new">
				{x}and{y}
			</div>
		</div>	
	);
}

const useMove = () => {
	const [state, setState] = useState({x: 0, y: 0})
  
	  const handleMouseMove = (e:React.MouseEvent) => {
		  e.persist()
		  setState(state => ({...state, x: e.clientX, y: e.clientY}))
	  }
	return {
	  x: state.x,
	  y: state.y,
	  handleMouseMove,
	}
  }

export default RippleAnimation;

