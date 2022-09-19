import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  transform: translateY(0);
  transition: 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

export const Body = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

export const Title = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

export const List = styled.ul`
  padding: 1rem 0 0;
`;

export const Item = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  
  & > b {
    font-weight: var(--fw-bold);
  }
`;