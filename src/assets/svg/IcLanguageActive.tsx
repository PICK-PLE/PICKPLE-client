import type { SVGProps } from 'react';
const SvgIcLanguageActive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 37" {...props}>
    <g clipPath="url(#ic_language_active_svg__a)">
      <g filter="url(#ic_language_active_svg__b)" opacity={0.8}>
        <rect width={36} height={36} x={0.5} y={0.5} fill="#6360FF" rx={8} />
        <rect
          width={35}
          height={35}
          x={1}
          y={1}
          stroke="url(#ic_language_active_svg__c)"
          rx={7.5}
        />
      </g>
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.714}
        filter="url(#ic_language_active_svg__d)">
        <path d="M9.927 10.998h7.5M13.14 9.927c0 5.192 0 7.5.536 8.571" />
        <path d="M16.355 14.749c0 2.449-2.142 4.821-3.75 4.821-1.607 0-2.678-1.216-2.678-2.143q0-3.214 3.214-3.214c3.214 0 5.357.61 5.357 3.061q0 2.45-2.143 3.367m2.143 6.429 4.286-9.643 4.286 9.643m-.965-2.143h-6.643" />
      </g>
    </g>
    <defs>
      <filter
        id="ic_language_active_svg__b"
        width={37.414}
        height={37.414}
        x={-0.014}
        y={-0.014}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.514} dy={-0.514} />
        <feGaussianBlur stdDeviation={0.321} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 0.8 0" />
        <feBlend in2="shape" result="effect1_innerShadow_649_29708" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.9} dy={0.9} />
        <feGaussianBlur stdDeviation={2.571} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="effect1_innerShadow_649_29708" result="effect2_innerShadow_649_29708" />
      </filter>
      <filter
        id="ic_language_active_svg__d"
        width={28.285}
        height={28.285}
        x={4.357}
        y={4.357}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={0.643} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_649_29708" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_649_29708" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.514} dy={0.514} />
        <feGaussianBlur stdDeviation={0.643} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 0.8 0" />
        <feBlend in2="shape" result="effect2_innerShadow_649_29708" />
      </filter>
      <linearGradient
        id="ic_language_active_svg__c"
        x1={35.54}
        x2={0.5}
        y1={0.5}
        y2={36.5}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <clipPath id="ic_language_active_svg__a">
        <rect width={36} height={36} x={0.5} y={0.5} fill="#fff" rx={5} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcLanguageActive;
