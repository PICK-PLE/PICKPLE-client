import type { SVGProps } from 'react';
const SvgIcSpeechActive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 57 57" {...props}>
    <rect width={56} height={56} x={0.5} y={0.5} fill="#EEF" stroke="#9997FF" rx={9.5} />
    <g clipPath="url(#ic_speech_active_svg__a)" opacity={0.8}>
      <g filter="url(#ic_speech_active_svg__b)">
        <path
          fill="#6360FF"
          d="M28.767 35.436c3.891 0 7.056-3.167 7.056-7.057V17.795a7.063 7.063 0 0 0-7.056-7.057 7.063 7.063 0 0 0-7.057 7.057v10.584c0 3.89 3.165 7.056 7.057 7.056m12.348-7.057v-3.528a1.764 1.764 0 1 0-3.528 0v3.528c0 4.864-3.957 8.82-8.82 8.82s-8.82-3.956-8.82-8.82v-3.528a1.764 1.764 0 1 0-3.529 0v3.528c0 6.21 4.61 11.347 10.585 12.208v1.905H21.71a1.764 1.764 0 0 0 0 3.528h14.113a1.764 1.764 0 0 0 0-3.528h-5.292v-1.905c5.975-.861 10.584-5.998 10.584-12.208"
        />
      </g>
      <path
        stroke="url(#ic_speech_active_svg__c)"
        d="M27.503 40.587v-.433l-.43-.062c-5.733-.826-10.155-5.757-10.155-11.713v-3.528a1.264 1.264 0 1 1 2.528 0v3.528c0 5.14 4.18 9.32 9.32 9.32s9.321-4.18 9.321-9.32v-3.528a1.264 1.264 0 1 1 2.528 0v3.528c0 5.956-4.422 10.887-10.156 11.713l-.428.062v2.838h5.792a1.264 1.264 0 0 1 0 2.528H21.71a1.264 1.264 0 0 1 0-2.528h5.793v-2.405Zm7.82-12.208a6.565 6.565 0 0 1-6.556 6.556 6.565 6.565 0 0 1-6.557-6.556V17.795a6.563 6.563 0 0 1 6.557-6.557 6.563 6.563 0 0 1 6.556 6.557z"
      />
    </g>
    <defs>
      <linearGradient
        id="ic_speech_active_svg__c"
        x1={40.456}
        x2={7.889}
        y1={10.738}
        y2={34.16}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity={0.25} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.5} />
      </linearGradient>
      <clipPath id="ic_speech_active_svg__a">
        <path fill="#fff" d="M10.5 10.5h36v36h-36z" />
      </clipPath>
      <filter
        id="ic_speech_active_svg__b"
        width={26.461}
        height={37.045}
        x={15.83}
        y={10.15}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.588} dy={-0.588} />
        <feGaussianBlur stdDeviation={0.294} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.866667 0 0 0 0 0.862745 0 0 0 0 1 0 0 0 0.8 0" />
        <feBlend in2="shape" result="effect1_innerShadow_3162_52531" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1.176} dy={1.176} />
        <feGaussianBlur stdDeviation={2.352} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="effect1_innerShadow_3162_52531" result="effect2_innerShadow_3162_52531" />
      </filter>
    </defs>
  </svg>
);
export default SvgIcSpeechActive;
