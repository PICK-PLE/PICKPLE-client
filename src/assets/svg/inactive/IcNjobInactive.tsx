import type { SVGProps } from 'react';
const SvgIcNjobInactive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 57 57" {...props}>
    <rect width={56} height={56} x={0.5} y={0.5} fill="#F8F9FC" stroke="#EDEEF2" rx={9.5} />
    <g clipPath="url(#ic_njob_inactive_svg__a)">
      <g filter="url(#ic_njob_inactive_svg__b)" opacity={0.8}>
        <rect width={36} height={36} x={10.5} y={10.5} fill="#C6CAD4" rx={8} />
        <rect
          width={35}
          height={35}
          x={11}
          y={11}
          stroke="url(#ic_njob_inactive_svg__c)"
          rx={7.5}
        />
      </g>
      <g filter="url(#ic_njob_inactive_svg__d)">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M22 35V22l13 13V22"
        />
      </g>
    </g>
    <defs>
      <filter
        id="ic_njob_inactive_svg__b"
        width={37.1}
        height={37.1}
        x={10.1}
        y={10.1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.4} dy={-0.4} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 0.8 0" />
        <feBlend in2="shape" result="effect1_innerShadow_3162_52489" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.7} dy={0.7} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="effect1_innerShadow_3162_52489" result="effect2_innerShadow_3162_52489" />
      </filter>
      <filter
        id="ic_njob_inactive_svg__d"
        width={19}
        height={19}
        x={19}
        y={19}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={0.5} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3162_52489" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_3162_52489" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.4} dy={0.4} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" result="effect2_innerShadow_3162_52489" />
      </filter>
      <linearGradient
        id="ic_njob_inactive_svg__c"
        x1={45.54}
        x2={10.5}
        y1={10.5}
        y2={46.5}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <clipPath id="ic_njob_inactive_svg__a">
        <path fill="#fff" d="M10.5 10.5h36v36h-36z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcNjobInactive;
