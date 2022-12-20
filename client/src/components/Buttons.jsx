import styled from "styled-components";

export const ButtonPrimary = styled.button`
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-4);
  background: var(--text-color-orange);
  border: 2px solid var(--text-color-orange);
  border-radius: var(--btn-border-radius);
  padding: var(--btn-padding);
  text-transform: capitalize;
  display: inline-block;
  color: var(--text-color-white);
  transition: all 0.2s;
  &:hover {
    background: transparent;
    color: var(--text-color-orange);
    border: 2px solid var(--text-color-orange);
  }

  svg {
    margin-left: 5px;
  }

  ${({ theme }) =>
    `@media ${theme.mobile} {
        background: var(--text-color-blue);
      }`}

  a {
    color: var(--text-color-primary);
  }
`;

export const ButtonSecondary = styled.button`
  cursor: pointer;
  border-radius: var(--btn-border-radius);
  border: 2px solid var(--text-color-blue);
  padding: var(--btn-padding);
  text-transform: capitalize;
  display: inline-block;
  color: var(--text-color-white);
  background: var(--text-color-blue);
  box-shadow: var(--shadow-4);
  transition: all 0.2s;
  svg {
    margin-left: 5px;
  }

  &:hover {
    background: transparent;
    color: var(--text-color-blue);
    border: 2px solid var(--text-color-blue);
  }
`;

export const ButtonTertiary = styled.button`
  cursor: pointer;
  border-radius: var(--btn-border-radius);
  //   padding: 0.25rem 1.25rem;
  padding-left: 0;
  text-transform: capitalize;
  display: inline-block;
  color: var(--text-color-orange);
  background: none;
  //   background: radial-gradient(100% 100% at 100% 0%, #5adaff 0%, #5468ff 100%);
  box-shadow: var(--shadow-4);
  transition: all 0.2s;
  font-size: 14px;
  x svg {
    margin-left: 5px;
  }
`;
