import styled from "styled-components";

const HerroWrapper = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  .carousel {
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
        font-size: 80px;
        margin-bottom: 0;
      }

      p {
        font-size: 20px;
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
