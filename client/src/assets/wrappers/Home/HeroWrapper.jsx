import styled from "styled-components";

const HerroWrapper = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  .carousel {
    &-item {
      .hero-small-description {
        position: relative;
        p {
          position: relative;
          z-index: 1;
        }

        span {
          font-weight: 600;
          text-transform: uppercase;
          color: turquoise;
          font-size: 16px;
          margin-right: 20px;
          transition: color 0.2s;

          &:hover {
            color: white !important;
            cursor: pointer;
          }
        }

        span:nth-child(1) {
          color: black;
        }

        span:nth-child(2) {
          color: turquoise;
        }

        span:nth-child(3) {
          color: var(--text-color-orange);
        }

        &::after {
          width: 100%;
          height: 50%;
          content: "";
          display: block;
          background-image: radial-gradient(#602364 1.2px, #dbdbdb00 0.8px);
          background-size: 16px 16px;
          position: absolute;
          top: -15px;
          left: -30px;
        }
      }
    }

    &-indicators {
      bottom: 2rem;
    }
    &-indicators button.active {
      background-color: var(--text-color-orange);
    }

    &-indicators button {
      height: 4px;
    }

    &-titles {
      h1 {
        font-size: 60px;
        margin-bottom: 0;
      }

      p {
        font-size: 18px;
      }
    }

    &-control-next,
    &-control-prev {
      display: none;
    }

    .container,
    .row {
      height: 100%;
    }

    .row {
      align-items: center;
      color: var(--text-orange-color);

      color: white;
    }
  }
`;

export default HerroWrapper;
