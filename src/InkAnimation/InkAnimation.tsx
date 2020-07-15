import React, { useState,useRef,useEffect } from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4 } from 'gsap';
import './_InkAnimation.scss';
// https://codyhouse.co/gem/ink-transition-effect
function InkAnimation() {

	  useEffect(() => {
		var smiley = TweenMax.to(".smile", 1, {
			backgroundPosition:"-2500vw 0px",
			ease:SteppedEase.config(25),
			paused:true
		  });
		  TweenMax.to(smiley, 3, { progress:0, repeat:-1, ease:Power4.easeInOut });
	}, []);
	return (
		<div>
			<div className="App">
				<div className="smile"></div>
			</div>
		</div>
	);
}

export default InkAnimation;
