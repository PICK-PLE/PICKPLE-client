import type { SVGProps } from 'react';
const SvgIcDate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      stroke="#3E3F45"
      strokeWidth={1.5}
      d="M4.75 6.89c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v11.112c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25zM20 10.973H4"
    />
    <path
      stroke="#3E3F45"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.444 4v3.556M15.556 4v3.556"
    />
  </svg>
);
export default SvgIcDate;
