import SvgIconIntegrationContainer from "./SvgIconIntegrationContainer";

const Dropbox = () => {
  return (
    <SvgIconIntegrationContainer>
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1155_284)">
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
          <g filter="url(#filter1_dd_1155_284)">
            <circle cx="34" cy="33" r="24.5" fill="#0F287F" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.25 19L16.5 24.25L25.25 29.5L16.5 34.75L25.25 40L34 34.75L42.75 40L51.5 34.75L42.75 29.5L51.5 24.25L42.75 19L34 24.25L25.25 19ZM34 24.25L42.75 29.5L34 34.75L25.25 29.5L34 24.25Z"
              fill="#DAF8FE"
            />
            <path
              d="M25.25 43.5L34 38.25L42.75 43.5L34 48.75L25.25 43.5Z"
              fill="#DAF8FE"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_1155_284"
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
              result="effect1_dropShadow_1155_284"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1155_284"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dd_1155_284"
            x="3"
            y="3"
            width="62"
            height="62"
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
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1155_284"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_1155_284"
              result="effect2_dropShadow_1155_284"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_1155_284"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </SvgIconIntegrationContainer>
  );
};

export default Dropbox;
