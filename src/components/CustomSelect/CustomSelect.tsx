import styled from "styled-components";
import Select from "react-select";

// @ts-ignore
export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided: any) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        // @ts-ignore
        option: (provided: any, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
        }),
    }
})`
  width: 100%;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;
  
  & > * {
    box-shadow: var(--shadow);
  }
  
  & * {
    color: var(--colors-text) !important;
  }
  
  & > [id] {
    background-color: var(--colors-ui-base);
  }
  
  @media(min-width: 767px) {
    width: 250px;
  }
`
