import type { SVGProps } from 'react';
const SvgIcSend = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" {...props}>
    <g
      stroke="#9FA4AE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#ic_send_svg__a)">
      <path d="m9.998 14.5 11-11M21.941 3.84a1 1 0 0 0-1.28-1.28l-18 6.5-.077.03a1.55 1.55 0 0 0-.02 2.81l6.691 3.345 3.345 6.69a1.55 1.55 0 0 0 2.841-.095z" />
    </g>
    <defs>
      <clipPath id="ic_send_svg__a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcSend;
