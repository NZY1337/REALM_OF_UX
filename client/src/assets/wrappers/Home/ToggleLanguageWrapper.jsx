import styled from "styled-components";

const ToggleLanguageWrapper = styled.div`
  display: flex;
  align-items: center;

  #toogle {
    display: none;
  }

  .toogle-button {
    font-weight: bold;
    font-size: 10px;
    display: inline-block;
    width: 37px;
    height: 15px;
    background-color: var(--text-color-gray);
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }

  .toogle-button::after {
    content: "EN";
    width: 25px;
    height: 25px;
    color: var(--text-color-white);
    background-color: var(--text-color-blue);
    border: 2px solid var(--text-color-orange);
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: -5px;
    left: -1.25px;
    line-height: 1px;
    display: grid;
    place-content: center;
    transition: all 0.2s;
    transform: 1s ease-in;
  }

  #toogle:checked + .toogle-button::after {
    border: 2px solid var(--text-color-white);
    content: "RO";
    background-color: var(--text-color-orange);
    transform: translateX(15px) rotate(360deg);
  }
`;

export default ToggleLanguageWrapper;
