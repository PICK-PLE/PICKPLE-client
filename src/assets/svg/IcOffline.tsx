import type { SVGProps } from 'react';
const SvgIcOffline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" {...props}>
    <g clipPath="url(#ic_offline_svg__a)">
      <path
        stroke="#3E3F45"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.029 6.03a.25.25 0 0 1 .322.322l-5.307 14.196a.23.23 0 0 1-.098.128.26.26 0 0 1-.152.034.26.26 0 0 1-.147-.053.24.24 0 0 1-.08-.14L11.17 14.52a1.75 1.75 0 0 0-1.308-1.308l-5.998-1.396a.24.24 0 0 1-.14-.081.26.26 0 0 1-.053-.147.26.26 0 0 1 .034-.152.23.23 0 0 1 .128-.098L18.029 6.03l-.263-.702z"
      />
    </g>
    <defs>
      <clipPath id="ic_offline_svg__a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcOffline;
