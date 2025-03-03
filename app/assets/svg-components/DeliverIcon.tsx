import SvgIconIntegrationContainer from "./SvgIconIntegrationContainer";

const DeliverIcon = () => {
  return (
    <SvgIconIntegrationContainer>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1155_622)">
          <path
            d="M2.5 11C2.5 5.75329 6.75329 1.5 12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11Z"
            stroke="#EAECF0"
            shapeRendering="crispEdges"
          />
          <path
            d="M27 15L18.0934 25.6879C17.7446 26.1064 17.5702 26.3157 17.5676 26.4925C17.5652 26.6461 17.6337 26.7923 17.7532 26.8889C17.8907 27 18.1632 27 18.708 27H26L25 35L33.9065 24.3121C34.2553 23.8936 34.4297 23.6843 34.4324 23.5075C34.4347 23.3539 34.3663 23.2077 34.2467 23.1111C34.1092 23 33.8368 23 33.292 23H26L27 15Z"
            stroke="#344054"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1155_622"
            x="0"
            y="0"
            width="52"
            height="52"
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
              result="effect1_dropShadow_1155_622"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1155_622"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </SvgIconIntegrationContainer>
  );
};

export default DeliverIcon;
