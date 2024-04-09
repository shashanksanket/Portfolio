"use client"
import * as React from "react";
import { useState } from "react";

interface EllipseProps {
  resumeLink?: string;
}

const EllipseSvg = React.forwardRef<SVGSVGElement, EllipseProps>(({ resumeLink }, ref) => {
  const [isHover,setHover] = useState(false)
  return (
    <svg width="646" height="616" viewBox="0 0 846 816" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_0_1)">
        <ellipse cx="301.324" cy="388.96" rx="241.775" ry="185.105" transform="rotate(-59.503 301.324 388.96)" fill="url(#paint0_radial_0_1)" />
      </g>
      <g filter="url(#filter1_f_0_1)">
        <ellipse cx="538.172" cy="426.75" rx="266.024" ry="210.941" transform="rotate(-80.5461 538.172 426.75)" fill="url(#paint1_radial_0_1)" />
      </g>
      <g filter="url(#filter2_bi_0_1)">
        <path d="M744 439C744 607.447 603.865 730.5 431 730.5C258.135 730.5 118 607.447 118 439C118 270.553 258.135 134 431 134C603.865 134 744 270.553 744 439Z" fill="url(#paint2_linear_0_1)" fillOpacity="0.46" />
      </g>
      <g filter="url(#filter3_i_0_1)">
        <path d="M193.898 670.164C142.449 655.967 103.968 613.184 83.4609 555.197C62.9555 497.216 60.4848 424.168 81.0011 349.821C101.517 275.475 141.102 214.032 188.441 174.773C235.785 135.51 290.761 118.518 342.21 132.715C393.659 146.913 432.14 189.695 452.647 247.682C473.153 305.664 475.623 378.712 455.107 453.058C434.591 527.404 395.006 588.847 347.667 628.106C300.323 667.37 245.347 684.362 193.898 670.164Z" stroke="url(#paint3_linear_0_1)" strokeWidth="3" />
      </g>
         <defs>
        <linearGradient id="defaultGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="100%" stopColor="#E019E4" />
        </linearGradient>
        <linearGradient id="hoverGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E019E4" />
          <stop offset="40%" stopColor="#4e5f93" />
          <stop offset="100%" stopColor="#E019E4" />
        </linearGradient>
      </defs>
      <a onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} href={resumeLink}>
        <svg width="180" height="486" viewBox="0 0 190 186" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse className="transition-all duration-500" cx="94.5" cy="94.2346" rx="75.5" ry="74.2346" fill={`${isHover?'#F68DFF':'white'}`} fillOpacity="0.36" />
          <ellipse className="transition-all duration-500" cx="94.5852" cy="93" rx="94.5852" ry="93" fill={`${isHover?'#D8127D':'#F68DFF'}`}  fillOpacity="0.36" />
          <ellipse className="transition-all duration-500" cx="96.5" cy="93.3974" rx="63.5" ry="61.3974" fill={`url(#${isHover ? 'hoverGradient' : 'defaultGradient'})`} fillOpacity={`${isHover?'0.46':'0.56'}`}  />
          <path className="transition-all duration-500" d="M57.5 104.333L47.7083 94.5418L50.45 91.7022L55.5417 96.7939V80.8335H59.4583V96.7939L64.55 91.7022L67.2917 94.5418L57.5 104.333ZM45.75 112.167C44.6729 112.167 43.7512 111.784 42.9848 111.017C42.2185 110.251 41.8346 109.329 41.8333 108.25V102.375H45.75V108.25H69.25V102.375H73.1667V108.25C73.1667 109.327 72.7835 110.25 72.0171 111.017C71.2508 111.785 70.3284 112.168 69.25 112.167H45.75Z" fill="white" />
          <path className="transition-all duration-500" d="M102.845 110.567C99.8695 110.567 97.3104 109.937 95.1673 108.676C93.0368 107.403 91.3979 105.638 90.2507 103.382C89.1161 101.125 88.5488 98.5281 88.5488 95.5907C88.5488 92.6156 89.1224 90.006 90.2696 87.7621C91.4294 85.5055 93.0746 83.7469 95.2051 82.4862C97.3356 81.213 99.8695 80.5763 102.807 80.5763C105.341 80.5763 107.559 81.0365 109.463 81.9568C111.367 82.877 112.873 84.1692 113.983 85.8333C115.092 87.4973 115.703 89.4513 115.817 91.6953H108.215C108.001 90.2456 107.433 89.0795 106.513 88.197C105.605 87.3019 104.414 86.8544 102.939 86.8544C101.691 86.8544 100.601 87.1948 99.6678 87.8755C98.7475 88.5437 98.0289 89.5207 97.5121 90.8066C96.9952 92.0924 96.7368 93.6493 96.7368 95.4773C96.7368 97.3304 96.9889 98.9062 97.4932 100.205C98.01 101.503 98.7349 102.493 99.6678 103.174C100.601 103.854 101.691 104.195 102.939 104.195C103.859 104.195 104.685 104.006 105.416 103.627C106.16 103.249 106.772 102.701 107.251 101.982C107.742 101.251 108.064 100.375 108.215 99.3538H115.817C115.691 101.573 115.086 103.527 114.001 105.216C112.93 106.892 111.449 108.204 109.558 109.149C107.667 110.095 105.429 110.567 102.845 110.567ZM148.586 80.9545L138.431 110H129.354L119.2 80.9545H127.709L133.742 101.736H134.044L140.057 80.9545H148.586Z" fill="#F5F5F5" />
        </svg>
      </a>

      <g filter="url(#filter4_i_0_1)">
        <path d="M744.787 243.746C782.763 311.494 797.866 383.707 791.518 445.732C785.17 507.752 757.344 559.724 709.326 586.641C661.308 613.557 602.452 610.173 546.234 583.225C490.011 556.274 436.29 505.708 398.314 437.96C360.338 370.212 345.235 297.999 351.583 235.974C357.931 173.954 385.757 121.982 433.775 95.0653C481.793 68.1489 540.649 71.5325 596.867 98.4809C653.09 125.431 706.812 175.998 744.787 243.746Z" stroke="url(#paint4_linear_0_1)" strokeWidth="3" />
      </g>

      <g filter="url(#filter5_f_0_1)">
        <ellipse cx="665.304" cy="123" rx="38.5046" ry="30.456" transform="rotate(-80.5461 665.304 123)" fill="url(#paint5_radial_0_1)" />
      </g>
      <g filter="url(#filter6_f_0_1)">
        <ellipse cx="611" cy="109.493" rx="48.5693" ry="38.7062" transform="rotate(-59.503 611 109.493)" fill="url(#paint6_radial_0_1)" />
      </g>
      <g filter="url(#filter7_bi_0_1)">
        <ellipse cx="635" cy="115.5" rx="60" ry="55.5" fill="url(#paint7_linear_0_1)" fillOpacity="0.46" />
      </g>
      <defs>
        <filter id="filter0_f_0_1" x="0.0819778" y="60.3757" width="602.484" height="657.168" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_0_1" />
        </filter>
        <filter id="filter1_f_0_1" x="201.465" y="37.9824" width="673.414" height="777.535" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="62.0248" result="effect1_foregroundBlur_0_1" />
        </filter>
        <filter id="filter2_bi_0_1" x="91" y="107" width="680" height="650.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="13.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_1" />
        </filter>
        <filter id="filter3_i_0_1" x="65.2925" y="126.256" width="405.523" height="554.367" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.949109 0 0 0 0 0.215206 0 0 0 0 0.964086 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter id="filter4_i_0_1" x="348.679" y="74.9934" width="445.743" height="535.719" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.949109 0 0 0 0 0.215206 0 0 0 0 0.964086 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter id="filter5_f_0_1" x="624.597" y="74.686" width="81.4142" height="96.6282" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_0_1" />
        </filter>
        <filter id="filter6_f_0_1" x="559.526" y="53.2515" width="102.948" height="112.483" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_0_1" />
        </filter>
        <filter id="filter7_bi_0_1" x="548" y="32.9998" width="174" height="165" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="13.5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_1" />
        </filter>
        <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301.324 471.228) rotate(-90) scale(387.348 505.937)">
          <stop stopColor="#3CF3FF" />
          <stop offset="0.446" stopColor="#71F7FF" stopOpacity="0.724" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(538.172 520.501) rotate(-90) scale(441.413 556.679)">
          <stop stopColor="#FA00FF" />
          <stop offset="0.446" stopColor="#F237F6" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="paint2_linear_0_1" x1="431" y1="134" x2="431" y2="744" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_0_1" x1="79.4203" y1="349.911" x2="707.75" y2="523.303" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F237F6" />
          <stop offset="0.151" stopColor="#F237F6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint4_linear_0_1" x1="743.727" y1="244.921" x2="170.633" y2="566.168" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F237F6" />
          <stop offset="0.131" stopColor="#F237F6" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="paint5_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(665.304 136.536) rotate(-90) scale(63.7321 80.5744)">
          <stop stopColor="#FA00FF" />
          <stop offset="0.446" stopColor="#F237F6" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="paint6_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(611 126.696) rotate(-90) scale(80.9963 101.636)">
          <stop stopColor="#3CF3FF" />
          <stop offset="0.446" stopColor="#71F7FF" stopOpacity="0.724" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="paint7_linear_0_1" x1="635" y1="59.9998" x2="635" y2="171" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

  );
},
);
EllipseSvg.displayName = 'EllipseSvg';
export default EllipseSvg;
