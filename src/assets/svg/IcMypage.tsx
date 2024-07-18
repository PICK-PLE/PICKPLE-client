import type { SVGProps } from 'react';
const SvgIcMypage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <circle cx={11.999} cy={8.2} r={3.95} stroke="#3E3F45" strokeWidth={1.7} />
    <path
      stroke="#3E3F45"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M17 20.6H7c-.796 0-1.559-.253-2.121-.703S4 18.837 4 18.2c0-1.486.737-2.91 2.05-3.96S9.143 12.6 11 12.6h2c1.857 0 3.637.59 4.95 1.64S20 16.714 20 18.2c0 .636-.316 1.247-.879 1.697S17.796 20.6 17 20.6"
    />
  </svg>
);
export default SvgIcMypage;
