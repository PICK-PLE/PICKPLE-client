import type { SVGProps } from 'react';
const SvgIcClassPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" {...props}>
    <g stroke="#3E3F45" strokeWidth={1.5} clipPath="url(#ic_class_person_svg__a)">
      <path d="M16.249 8.534c0 2.094-1.684 3.783-3.75 3.783s-3.75-1.689-3.75-3.783c0-2.095 1.684-3.784 3.75-3.784s3.75 1.689 3.75 3.784Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.188 20H7.813c-.746 0-1.462-.239-1.99-.664C5.297 18.911 5 18.334 5 17.733c0-1.402.691-2.748 1.922-3.74s2.9-1.549 4.64-1.549h1.876c1.74 0 3.41.557 4.64 1.55 1.23.991 1.922 2.337 1.922 3.74 0 .6-.296 1.177-.824 1.602-.527.425-1.243.664-1.988.664"
      />
    </g>
    <defs>
      <clipPath id="ic_class_person_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcClassPerson;
