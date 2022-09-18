import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;