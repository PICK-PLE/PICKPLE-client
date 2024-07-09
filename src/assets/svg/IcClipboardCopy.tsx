import type { SVGProps } from 'react';
const SvgIcClipboardCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" {...props}>
    <g stroke="#3E3F45" clipPath="url(#ic_clipboard-copy_svg__a)">
      <rect width={8} height={8} x={4} y={7.25} rx={1.5} />
      <path d="M8 7.5V4.75a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1h-2.53" />
    </g>
    <defs>
      <clipPath id="ic_clipboard-copy_svg__a">
        <path fill="#fff" d="M.5 0h18v18H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcClipboardCopy;
