import type { SVGProps } from 'react';

interface IcNjobProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}

const IcNjob = ({ strokeColor = '#6B6F77', ...props }: IcNjobProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" {...props}>
    <path
      stroke={strokeColor}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2.7}
      d="M13.166 23.861V11.64l9.167 12.222V11.64"
    />
    <path
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.7}
      d="M4 13.778c0-3.422 0-5.134.666-6.441a6.1 6.1 0 0 1 2.67-2.67C8.645 4 10.357 4 13.779 4h7.944c3.422 0 5.134 0 6.441.666a6.1 6.1 0 0 1 2.67 2.67c.667 1.308.667 3.02.667 6.442v7.944c0 3.422 0 5.134-.666 6.441a6.1 6.1 0 0 1-2.67 2.67c-1.308.667-3.02.667-6.442.667h-7.944c-3.422 0-5.134 0-6.441-.666a6.1 6.1 0 0 1-2.67-2.67C4 26.855 4 25.143 4 21.721z"
    />
  </svg>
);

export default IcNjob;
