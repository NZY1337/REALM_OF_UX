import styled from "styled-components";

const ErrorPageWrapper = styled.div`
  .container-fluid {
    background-color: lightgray;
    background-image: url(${(props) => props.cover});
    background-position: center bottom;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    a {
      border: 2px solid var(--text-color-blue);
      padding: var(--btn-padding);
      text-transform: capitalize;
      display: inline-block;
      color: var(--text-color-white);
      background: var(--text-color-blue);
      box-shadow: var(--shadow-4);
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      font-weight: bold;
      border-radius: 50px;

      span {
        transform: skew(5deg, 6deg);
      }

      &:hover {
        background: transparent;
        color: var(--text-color-blue);
        border: 2px solid var(--text-color-blue);
      }
    }
  }
`;

export default ErrorPageWrapper;
