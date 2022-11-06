import styled from "styled-components";

const SingleProjectWrapper = styled.div`
  .container {
    position: relative;
  }

  .comments-section {
    display: flex;
    border-bottom: 1px solid lightgray;
    margin-top: 1rem;
    justify-content: space-between;

    &__user {
      max-width: 85%;
      p:first-of-type {
        font-family: cursive;
        font-size: 18px;
        color: var(--text-color-orange);
        padding-bottom: 0.5rem;
      }
    }

    &__actions {
      display: flex;
      align-items: start;

      div {
        margin-right: 0.75rem;
        background: lightray;
        cursor: pointer;
        border-radius: 50px;
        width: 30px;
        height: 30px;
        transform: scale(1);
        transition: all 0.2s;
        background-color: aliceblue;
        &:hover {
          //   background-color: gray;
          transform: scale(1.5);
        }

        display: flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        // fill: #fff;
      }
    }
  }
`;

export default SingleProjectWrapper;
