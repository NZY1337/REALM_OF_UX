import styled from "styled-components";

const ServicesCardWrapper = styled.a`
  background-color: var(--bg-color-primary);
  border-radius: 5px;
  padding: 1.25rem;
  display: flex;
  align-items: start;
  flex-direction: column;
  position: relative;
  p {
    color: var(--text-color-white);
  }

  h4 {
    color: var(--text-color-white);
    font-weight: bold;
  }

  span {
    color: var(--text-color-orange);
  }

  button {
    border: none;
  }

  img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export default ServicesCardWrapper;
