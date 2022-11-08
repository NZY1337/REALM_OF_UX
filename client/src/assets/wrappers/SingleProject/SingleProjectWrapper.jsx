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
