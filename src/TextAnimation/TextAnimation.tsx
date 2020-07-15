import React, { useState,useRef,useEffect } from 'react';
import gsap, { Sine,TweenMax,SteppedEase,Power4,TimelineMax } from 'gsap';
import './_TextAnimation.scss';
function TextAnimation() {
	const svgElement = useRef<SVGGElement>(null);
	const svgElement2 = useRef<SVGGElement>(null);
	useEffect(() => {
		let tl = gsap.timeline({repeat: -1, repeatDelay: 0.5,ease: Sine.easeIn,stagger: 0.2});
		tl.to(svgElement.current, 2, { "stroke-dashoffset": 0, "fill-opacity": 1})
		.to(svgElement2.current, 2, { "stroke-dashoffset": 0, "fill-opacity": 1});
	}, []);

	return (
		<div>
			<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="200">
				
				<g ref={svgElement} className="text">
					<path fill="none" stroke="#000000" stroke-width="5"  d="M193.952,72.806h17.34V45.059h-6.935
						c-2.314,0-3.469-1.156-3.469-3.47c0-2.312,1.154-3.469,3.469-3.469h10.405c2.312,0,3.468,1.156,3.468,3.469v34.684
						c0,2.313-1.156,3.47-3.468,3.47h-20.811c-4.801,0-8.89-1.69-12.27-5.072c-3.382-3.38-5.072-7.471-5.072-12.27V27.717
						c0-4.801,1.69-8.89,5.072-12.271c3.38-3.382,7.469-5.072,12.27-5.072h20.811c2.312,0,3.468,1.156,3.468,3.468
						c0,2.314-1.156,3.47-3.468,3.47h-20.811c-2.909,0-5.369,1.016-7.384,3.047c-2.015,2.032-3.022,4.484-3.022,7.357V62.4
						c0,2.908,1.008,5.368,3.022,7.382C188.583,71.797,191.043,72.806,193.952,72.806z"/>
				
				</g>
				<g ref={svgElement2} className="text">
					<path  fill="none" stroke="#000000" stroke-width="5" d="M298.887,62.873V13.842
						c0-2.312,1.156-3.468,3.468-3.468c2.314,0,3.47,1.156,3.47,3.468v62.431c0,2.313-1.155,3.47-3.47,3.47
						c-1.401,0-2.417-0.578-3.048-1.734L271.14,27.191v49.082c0,2.313-1.154,3.47-3.467,3.47c-2.313,0-3.47-1.156-3.47-3.47V13.842
						c0-2.312,1.156-3.468,3.47-3.468c1.365,0,2.432,0.684,3.204,2.049L298.887,62.873z"/>
				</g>
			</svg>
			

</div>
	
	);
}

export default TextAnimation;

// https://www.digitalocean.com/community/tutorials/js-draw-using-greensock
// https://codepen.io/maxisix/pen/WboKyN
// https://wani.kr/posts/2013/12/04/svg-path-animation/