import type { SVGProps } from 'react';
const SvgIcOffline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#ic_offline_svg__a)">
      <path
        stroke="#3E3F45"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.652 4.714a.25.25 0 0 1 .322.322l-5.307 14.196a.23.23 0 0 1-.098.128.26.26 0 0 1-.152.034.26.26 0 0 1-.147-.054.24.24 0 0 1-.08-.14l-1.397-5.998a1.75 1.75 0 0 0-1.307-1.307l-6-1.397a.24.24 0 0 1-.139-.08.26.26 0 0 1-.053-.147.26.26 0 0 1 .034-.152.23.23 0 0 1 .128-.098l14.196-5.307-.263-.703z"
      />
    </g>
    <defs>
      <clipPath id="ic_offline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcOffline;
