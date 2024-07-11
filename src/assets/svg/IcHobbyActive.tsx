import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcHobbyActive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 37" {...props}>
    <g opacity={0.8}>
      <g filter="url(#ic_hobby_active_svg__a)">
        <path
          fill="#6360FF"
          d="M12.623 22.042c-2.664.171-5.082 1.186-6.454 4.801a1.01 1.01 0 0 1-.969.663c-.738 0-3.019-1.837-3.669-2.281 0 5.468 2.52 10.275 8.5 10.275 5.038 0 8.5-2.907 8.5-7.981 0-.207-.043-.404-.064-.607zM31.938 1.5c-1.007 0-1.95.446-2.67 1.092-13.574 12.126-14.986 12.411-14.986 15.98 0 .91.216 1.777.58 2.57l4.237 3.532c.48.12.973.201 1.487.201 4.125 0 6.515-3.02 14.022-17.03.49-.953.923-1.983.923-3.055 0-1.92-1.726-3.29-3.593-3.29"
        />
      </g>
      <path
        stroke="url(#ic_hobby_active_svg__b)"
        strokeWidth={0.5}
        d="M9.048 23.36c-1.057.694-1.975 1.805-2.645 3.572zm0 0c1.034-.677 2.223-.97 3.492-1.062M9.048 23.36l3.492-1.062m0 0 5.69 4.743.017.117.013.09q.02.142.022.27c0 2.478-.844 4.403-2.28 5.71-1.438 1.31-3.498 2.022-5.97 2.022-2.914 0-4.963-1.166-6.291-2.984-1.255-1.717-1.88-4.035-1.953-6.547m10.752-3.42-10.752 3.42m0 0 .338.25c.317.235.69.509 1.065.768.374.26.757.509 1.096.694.17.093.333.172.481.229.145.055.295.096.432.096.538 0 1.009-.312 1.203-.824zm27.647-22.94c.684-.615 1.57-1.029 2.503-1.029 1.76 0 3.343 1.289 3.343 3.04 0 1.008-.407 1.992-.894 2.938-3.756 7.01-6.219 11.244-8.252 13.728-1.014 1.239-1.91 2.028-2.793 2.509-.879.478-1.759.66-2.756.66-.469 0-.923-.072-1.37-.18l-4.15-3.458a5.9 5.9 0 0 1-.534-2.415c0-.874.086-1.518.408-2.189.325-.679.901-1.403 1.92-2.414 1.184-1.174 2.931-2.702 5.512-4.96a847 847 0 0 0 7.063-6.23Z"
      />
    </g>
    <defs>
      <linearGradient
        id="ic_hobby_active_svg__b"
        x1={34.624}
        x2={1.531}
        y1={1.5}
        y2={35.5}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <filter
        id="ic_hobby_active_svg__a"
        width={35.7}
        height={35.7}
        x={0.831}
        y={0.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.7} dy={-0.7} />
        <feGaussianBlur stdDeviation={0.4} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend in2="shape" result="effect1_innerShadow_649_29706" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1} dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="effect1_innerShadow_649_29706" result="effect2_innerShadow_649_29706" />
      </filter>
    </defs>
  </svg>
);
export default SvgIcHobbyActive;
