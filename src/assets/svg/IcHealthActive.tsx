import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcHealthActive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 37" {...props}>
    <g opacity={0.8}>
      <g filter="url(#ic_health_active_svg__a)">
        <path
          fill="#6360FF"
          d="M3.5 31.994c-1.59-.858-2.404-2.627-2.19-4.42.543-4.554 1.85-13.554 4.307-20.295 1.354-3.715 5.362-5.286 9.239-4.515a2.85 2.85 0 0 1 2.155 3.671l-.51 1.577a1.75 1.75 0 0 1-1.668 1.213 2.503 2.503 0 0 0-2.502 2.502v11.021h1.888c3.777-5.798 11.596-7.914 16.317-5.798 6.232 2.89 5.665 11.597 0 15.45-4.204 2.872-16.269 5.404-27.037-.406"
        />
      </g>
      <path
        stroke="url(#ic_health_active_svg__b)"
        strokeWidth={0.7}
        d="M11.98 22.748v.35h2.43l.103-.159c1.839-2.823 4.667-4.757 7.62-5.725 2.956-.97 5.997-.958 8.258.054 2.97 1.379 4.325 4.137 4.257 7.037-.069 2.91-1.572 5.944-4.309 7.805-2.033 1.39-6.032 2.73-10.879 2.993-4.836.263-10.478-.548-15.794-3.417-1.45-.783-2.208-2.405-2.009-4.071.543-4.551 1.847-13.516 4.289-20.216 1.278-3.508 5.082-5.04 8.842-4.292a2.5 2.5 0 0 1 1.89 3.22l-.51 1.578c-.188.578-.727.97-1.334.97a2.853 2.853 0 0 0-2.853 2.852z"
      />
    </g>
    <defs>
      <linearGradient
        id="ic_health_active_svg__b"
        x1={34.093}
        x2={1}
        y1={1.5}
        y2={35.5}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <filter
        id="ic_health_active_svg__a"
        width={35.225}
        height={34.427}
        x={0.775}
        y={2.073}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.5} dy={-0.5} />
        <feGaussianBlur stdDeviation={0.3} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 0.8 0" />
        <feBlend in2="shape" result="effect1_innerShadow_649_29702" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1} dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="effect1_innerShadow_649_29702" result="effect2_innerShadow_649_29702" />
      </filter>
    </defs>
  </svg>
);
export default SvgIcHealthActive;
