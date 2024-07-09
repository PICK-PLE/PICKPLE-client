import type { SVGProps } from 'react';
const SvgIcCameraAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" {...props}>
    <path
      stroke="#6B6F77"
      strokeLinecap="round"
      strokeWidth={1.7}
      d="M16 24H6.5A1.5 1.5 0 0 1 5 22.5V11a1.5 1.5 0 0 1 1.5-1.5h2.522a1.5 1.5 0 0 0 1.426-1.035l.63-1.93A1.5 1.5 0 0 1 12.502 5.5H18.6a1.5 1.5 0 0 1 1.425 1.032l.636 1.936A1.5 1.5 0 0 0 22.086 9.5H24.5A1.5 1.5 0 0 1 26 11v6.5"
    />
    <circle cx={15.5} cy={15.5} r={3.65} stroke="#6B6F77" strokeWidth={1.7} />
    <path stroke="#6B6F77" strokeLinecap="round" strokeWidth={1.7} d="M22.5 18.5v7M19 22h7" />
  </svg>
);
export default SvgIcCameraAdd;
