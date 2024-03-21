import SvgIconIntegrationContainer from "./SvgIconIntegrationContainer";

const Jira = () => {
  return (
    <SvgIconIntegrationContainer>
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1155_17)">
          <path
            d="M2 13C2 6.37258 7.37258 1 14 1H54C60.6274 1 66 6.37258 66 13V53C66 59.6274 60.6274 65 54 65H14C7.37258 65 2 59.6274 2 53V13Z"
            fill="white"
            shapeRendering="crispEdges"
          />
          <path
            d="M2.5 13C2.5 6.64873 7.64873 1.5 14 1.5H54C60.3513 1.5 65.5 6.64873 65.5 13V53C65.5 59.3513 60.3513 64.5 54 64.5H14C7.64873 64.5 2.5 59.3513 2.5 53V13Z"
            stroke="#EAECF0"
            shapeRendering="crispEdges"
          />
          <path
            d="M57.9133 31.6288L36.1131 10.5438L34 8.5L17.5897 24.372L10.0867 31.6288C9.30443 32.3864 9.30443 33.6136 10.0867 34.3712L25.0793 48.872L34 57.5L50.4103 41.628L50.6644 41.3823L57.9133 34.3712C58.6956 33.6136 58.6956 32.3864 57.9133 31.6288ZM34 40.2439L26.5104 33L34 25.7561L41.4896 33L34 40.2439Z"
            fill="#2684FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.0001 25.7561C29.0965 21.0127 29.0726 13.33 33.9466 8.5582L17.5564 24.4043L26.4771 33.0323L34.0001 25.7561Z"
            fill="url(#paint0_linear_1155_17)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.5097 32.9806L34 40.2439C36.3668 42.5317 37.6966 45.6355 37.6966 48.8719C37.6966 52.1084 36.3668 55.2121 34 57.5L50.4304 41.6086L41.5097 32.9806Z"
            fill="url(#paint1_linear_1155_17)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1155_17"
            x="0"
            y="0"
            width="68"
            height="68"
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
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1155_17"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1155_17"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1155_17"
            x1="32.6627"
            y1="18.428"
            x2="20.169"
            y2="23.883"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.18" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1155_17"
            x1="35.4311"
            y1="47.4878"
            x2="47.9022"
            y2="42.0716"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.18" stopColor="#0052CC" />
            <stop offset="1" stopColor="#2684FF" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIconIntegrationContainer>
  );
};

export default Jira;
