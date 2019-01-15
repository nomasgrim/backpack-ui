import colors from "../../styles/colors";
import { rgba } from "../../utils/color";

export default `
  .pswp__bg {
    background: ${colors.bgPrimary};
  }

  .pswp__button {
    opacity: 1;
  }

  .pswp__button--close {
    background-color: transparent;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" x="0px" y="0px" viewBox="0 0 32 32"><path fill="#d3d3d3" d="M17.6,16L31.7,1.9c0.4-0.4,0.4-1.2,0-1.6c-0.4-0.4-1.1-0.4-1.6,0L16,14.4L1.9,0.3c-0.4-0.4-1.2-0.4-1.6,0c-0.4,0.4-0.4,1.2,0,1.6L14.4,16L0.3,30.1c-0.4,0.4-0.4,1.2,0,1.6c0.4,0.4,1.2,0.4,1.6,0L16,17.6l14.1,14.1c0.4,0.4,1.2,0.4,1.6,0c0.4-0.4,0.4-1.1,0-1.6L17.6,16z" /></svg>') !important;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    height: 16px;
    margin-right: 8px;
    margin-top: 8px;
    padding: 22px;
    width: 16px;
    float: right;
  }

  @media (min-width: 45em) {
    .pswp__button--close {
      background-size: 32px 32px;
      height: 32px;
      padding: 44px;
      margin-right: 16px;
      width: 32px;
    }
  }

  .pswp__button--arrow--left,
  .pswp__button--arrow--right {
    height: 36px;
    width: 21px;
    padding: 44px;
  }

  .pswp__button--arrow--left {
    left: 16px;
  }

  .pswp__button--arrow--right {
    right: 16px;
  }

  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    background-color: transparent;
    top: 0;
    height: 36px;
    width: 21px;
    padding: 44px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 21px 36px;
  }

  .pswp__button--arrow--left:before {
    left: 0;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="21px" height="36px" x="0px" y="0px" viewBox="0 0 21 36"><path fill="#d3d3d3" d="M20.6,33.6L3.6,18l17-15.6c0.6-0.6,0.6-1.5,0-2c-0.6-0.6-1.5-0.6-2,0L0.6,16.8c-0.1,0-0.2,0-0.2,0.1C0.1,17.2,0,17.6,0,18c0,0.4,0.1,0.8,0.4,1.1c0.1,0.1,0.2,0,0.2,0.1l17.9,16.4c0.6,0.6,1.5,0.6,2,0C21.1,35,21.1,34.1,20.6,33.6z" /></svg>') !important;
  }

  .pswp__button--arrow--right:before {
    right: 0;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="21px" height="36px" x="0px" y="0px" viewBox="0 0 21 36"><path fill="#d3d3d3" d="M20.6,16.9c-0.1-0.1-0.2,0-0.2-0.1L2.4,0.4c-0.6-0.6-1.5-0.6-2,0c-0.6,0.6-0.6,1.5,0,2l17,15.6l-17,15.6c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.5,0.6,2,0l17.9-16.4c0.1,0,0.2,0,0.2-0.1c0.3-0.3,0.4-0.7,0.4-1.1C21,17.6,20.9,17.2,20.6,16.9z" /></svg>') !important;
  }

  .pswp__caption small {
    font-size: 12px;
    color: ${colors.accentGray};
  }

  .pswp__caption__center {
    text-align: center;
    max-width: 420px;
    font-size: 12px;
    padding: 20px;
    line-height: ${(20 / 12)};
    color: ${rgba(colors.textPrimary, 0.8)};
    letter-spacing: -.2px;
  }

  @media (min-width: 45em) {
    .pswp__caption__center {
      font-size: 14px;
      line-height: ${(22 / 14)};
    }
  }

  .pswp__caption__center a {
    color: ${rgba(colors.textPrimary, 0.8)};
    text-decoration: underline;
  }

  .pswp__top-bar {
    height: 0;
  }

  .pswp__ui--fit .pswp__top-bar,
  .pswp__ui--fit .pswp__caption {
    background-color: transparent;
  }
`;
