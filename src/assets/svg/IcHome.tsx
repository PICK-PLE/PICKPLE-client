import type { SVGProps } from 'react';
const SvgIcHome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <mask
      id="ic_home_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}>
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#ic_home_svg__a)">
      <path fill="#17171A" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6 8 6v12h-7v-6h-2v6z" />
    </g>
  </svg>
);
export default SvgIcHome;
