import SvgIconIntegrationContainer from "./SvgIconIntegrationContainer";

const InboxIcon = () => {
  return (
    <SvgIconIntegrationContainer>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1155_687)">
          <path
            d="M2.5 11C2.5 5.75329 6.75329 1.5 12 1.5H40C45.2467 1.5 49.5 5.75329 49.5 11V39C49.5 44.2467 45.2467 48.5 40 48.5H12C6.75329 48.5 2.5 44.2467 2.5 39V11Z"
            stroke="#EAECF0"
            shapeRendering="crispEdges"
          />
          <path
            d="M20.0944 24.2288C20.0322 23.8282 20 23.4179 20 23C20 18.5817 23.6052 15 28.0526 15C32.4999 15 36.1052 18.5817 36.1052 23C36.1052 23.9981 35.9213 24.9535 35.5852 25.8345C35.5154 26.0175 35.4804 26.109 35.4646 26.1804C35.4489 26.2512 35.4428 26.301 35.4411 26.3735C35.4394 26.4466 35.4493 26.5272 35.4692 26.6883L35.8717 29.9585C35.9153 30.3125 35.9371 30.4895 35.8782 30.6182C35.8266 30.731 35.735 30.8205 35.6211 30.8695C35.4911 30.9254 35.3146 30.8995 34.9617 30.8478L31.7765 30.3809C31.6101 30.3565 31.527 30.3443 31.4512 30.3448C31.3763 30.3452 31.3245 30.3507 31.2511 30.3661C31.177 30.3817 31.0823 30.4172 30.893 30.4881C30.0097 30.819 29.0524 31 28.0526 31C27.6344 31 27.2237 30.9683 26.8227 30.9073M21.6316 35C24.5965 35 27 32.5376 27 29.5C27 26.4624 24.5965 24 21.6316 24C18.6667 24 16.2632 26.4624 16.2632 29.5C16.2632 30.1106 16.3603 30.6979 16.5395 31.2467C16.6153 31.4787 16.6532 31.5947 16.6657 31.6739C16.6786 31.7567 16.6809 31.8031 16.6761 31.8867C16.6714 31.9668 16.6514 32.0573 16.6113 32.2383L16 35L18.9948 34.591C19.1583 34.5687 19.24 34.5575 19.3114 34.558C19.3865 34.5585 19.4264 34.5626 19.5001 34.5773C19.5701 34.5912 19.6742 34.6279 19.8823 34.7014C20.4306 34.8949 21.0191 35 21.6316 35Z"
            stroke="#344054"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1155_687"
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
              result="effect1_dropShadow_1155_687"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1155_687"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </SvgIconIntegrationContainer>
  );
};

export default InboxIcon;
