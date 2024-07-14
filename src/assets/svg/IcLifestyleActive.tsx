import type { SVGProps } from 'react';
const SvgIcLifestyleActive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 37" {...props}>
    <g opacity={0.8}>
      <g filter="url(#ic_lifestyle_active_svg__a)">
        <path
          fill="#6360FF"
          d="M3 21.115a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v11.79c0 .88-.742 1.595-1.655 1.595H4.655c-.218 0-.433-.042-.634-.122a1.7 1.7 0 0 1-.538-.346 1.6 1.6 0 0 1-.358-.518 1.5 1.5 0 0 1-.125-.61zM3 4.097C3 3.215 3.742 2.5 4.655 2.5h26.69c.913 0 1.655.714 1.655 1.597v11.788a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM14.6 7.3a1.6 1.6 0 1 0 0 3.2h6.8a1.6 1.6 0 1 0 0-3.2zm-.061 16.739a1.538 1.538 0 1 0 0 3.076h6.923a1.538 1.538 0 1 0 0-3.076z"
        />
      </g>
      <path
        stroke="url(#ic_lifestyle_active_svg__b)"
        strokeWidth={0.5}
        d="m3.657 33.852-.172.178.172-.179a1.3 1.3 0 0 1-.302-.435 1.3 1.3 0 0 1-.105-.51V21.114c0-.966.784-1.75 1.75-1.75h26c.966 0 1.75.784 1.75 1.75v11.79c0 .733-.621 1.345-1.405 1.345H4.655a1.5 1.5 0 0 1-.542-.105 1.4 1.4 0 0 1-.456-.294ZM3.25 4.097c0-.735.621-1.347 1.405-1.347h26.69c.784 0 1.405.61 1.405 1.347v11.788a1.75 1.75 0 0 1-1.75 1.75H5a1.75 1.75 0 0 1-1.75-1.75zM14.6 7.05a1.85 1.85 0 0 0 0 3.7h6.8a1.85 1.85 0 0 0 0-3.7zm-.061 16.739a1.788 1.788 0 1 0 0 3.576h6.923a1.788 1.788 0 1 0 0-3.576z"
      />
    </g>
    <defs>
      <linearGradient
        id="ic_lifestyle_active_svg__b"
        x1={32.2}
        x2={1.064}
        y1={2.5}
        y2={32.49}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <filter
        id="ic_lifestyle_active_svg__a"
        width={31.5}
        height={33.5}
        x={2.5}
        y={2}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.5} dy={-0.5} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 0.8 0" />
        <feBlend in2="shape" result="effect1_innerShadow_649_29700" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1} dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="effect1_innerShadow_649_29700" result="effect2_innerShadow_649_29700" />
      </filter>
    </defs>
  </svg>
);
export default SvgIcLifestyleActive;
