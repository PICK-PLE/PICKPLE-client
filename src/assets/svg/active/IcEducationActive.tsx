import type { SVGProps } from 'react';
const SvgIcEducationActive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 57 57" {...props}>
    <rect width={56} height={56} x={0.5} y={0.5} fill="#EEF" stroke="#9997FF" rx={9.5} />
    <g clipPath="url(#ic_education_active_svg__a)">
      <path
        fill="#6360FF"
        stroke="url(#ic_education_active_svg__b)"
        strokeWidth={1.173}
        d="m44.278 36.519-.018.105.02.106a.733.733 0 0 1-.72.873H18.919a2.79 2.79 0 0 0-2.575 3.854 2.79 2.79 0 0 0 2.575 1.72H43.56a.733.733 0 0 1 0 1.467H18.918a4.254 4.254 0 0 1-4.254-4.254V15.747a4.254 4.254 0 0 1 4.254-4.254h23.587c.989 0 1.79.8 1.79 1.79v23.075a1 1 0 0 1-.017.16ZM24.198 17.36a1.907 1.907 0 0 0 0 3.814H34.76a1.907 1.907 0 0 0 0-3.814z"
        opacity={0.8}
      />
    </g>
    <defs>
      <linearGradient
        id="ic_education_active_svg__b"
        x1={44.059}
        x2={10.748}
        y1={10.906}
        y2={41.62}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <clipPath id="ic_education_active_svg__a">
        <path fill="#fff" d="M10.5 10.5h36v36h-36z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcEducationActive;
