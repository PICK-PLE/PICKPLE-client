import type { SVGProps } from 'react';
const SvgIcMoney = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" {...props}>
    <circle cx={12.5} cy={12} r={8.25} stroke="#3E3F45" strokeWidth={1.5} />
    <path
      fill="#3E3F45"
      stroke="#3E3F45"
      strokeWidth={0.2}
      d="m10.179 15.4.019.075h.977l.02-.075.749-2.927h1.108l.754 2.927.02.075h.967l.02-.075.745-2.927h.936v-.946H15.8l.733-2.877.032-.125h-1.012l-.018.077-.694 2.925h-1.097l-.715-2.926-.019-.076H11.98l-.019.076-.715 2.926h-1.097l-.694-2.925-.018-.077H8.434l.032.125.728 2.877h-.688v.946h.931zm.197-2.927h.638l-.322 1.324zm2.432-.946h-.62l.308-1.204zm1.17.946h.637l-.315 1.324z"
    />
  </svg>
);
export default SvgIcMoney;
