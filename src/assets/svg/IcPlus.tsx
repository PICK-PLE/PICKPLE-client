// import type { SVGProps } from 'react';
// const SvgIcPlus = (props: SVGProps<SVGSVGElement>) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
//     <path fill="#5451FF" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
//   </svg>
// );
// export default SvgIcPlus;
import type { SVGProps } from 'react';

const SvgIcPlus = ({ fill = '#5451FF', ...props }: SVGProps<SVGSVGElement> & { fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill={fill} d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
  </svg>
);

export default SvgIcPlus;
