import type { SVGProps } from 'react';
const SvgIcBtnMinus = ({
  fill = '#5451FF',
  stroke = '#5451FF',
  ...props
}: SVGProps<SVGSVGElement> & { fill?: string; stroke?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 48" {...props}>
    <circle cx={24.5} cy={24} r={23.5} fill="#fff" stroke={stroke} />
    <path fill={fill} d="M31.5 24.998h-14v-2h14z" />
  </svg>
);
export default SvgIcBtnMinus;
