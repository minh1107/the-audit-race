export default function LineCustom({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1598"
      height="22"
      viewBox="0 0 1598 22"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_4974_7307)">
        <path d="M-1 11H1604" stroke="url(#paint0_linear_4974_7307)" />
      </g>
      <defs>
        <filter
          id="filter0_d_4974_7307"
          x="-11"
          y="0.5"
          width="1625"
          height="21"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.980246 0 0 0 0 0.457958 0 0 0 0 0.963398 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4974_7307"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4974_7307"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4974_7307"
          x1="801.5"
          y1="11"
          x2="801.5"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC6FD" />
          <stop offset="0.489583" stopColor="#FF9EFC" />
          <stop offset="1" stopColor="#FFC6FD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
