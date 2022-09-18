import styled from "styled-components";

export const Header = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const Title = styled.div`
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  
    & > a {
      color: var(--colors-text);
    }
`;

export const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  
  & > svg {
    width: 14px;
    height: 14px;
  }
`;