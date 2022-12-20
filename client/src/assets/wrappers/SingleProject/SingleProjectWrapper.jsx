import styled from "styled-components";

const SingleProjectWrapper = styled.div`
  .container {
    position: relative;
  }

  img {
    height: 600px;
    position: relative;
    box-shadow: var(--shadow-4);
    border-radius: 5px;

    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      content: "";
      top: 0;
      bottom: 0;
      left: -20px;
      display: block;
    }
  }

  .comments-section {
    display: flex;
    border-bottom: 1px solid lightgray;
    margin-top: 1rem;
    justify-content: space-between;

    &__user {
      max-width: 85%;
      p:first-of-type {
        font-size: 18px;
        color: var(--text-color-orange);
        padding-bottom: 0.5rem;
      }
    }

    &__actions {
      display: flex;
      align-items: start;

      .dropdown.btn-group {
        div.dropdown-menu.show {
          background-color: #000;

          a:hover {
            background-color: var(--text-color-orange);
          }

          span,
          svg {
            color: #fff;
          }
        }

        button {
          background-color: transparent;
          color: black;
          border: none;

          &:focus {
            box-shadow: none;
          }
        }

        .dropdown-toggle::after {
          display: none;
        }
      }
    }
  }
`;

export default SingleProjectWrapper;
