import styled from "styled-components";

export const FilterForm = styled.form`
width: 80%;
`

export const FilterLable = styled.label`
display: flex;
flex-direction: column;
align-items: center;
margin-top: ${p => `${p.theme.space[3]}px`};
`

export const FilterInput = styled.input`
padding: ${p => `${p.theme.space[3]}px`};
font-weight: ${p => p.theme.fontWeights.medium};
margin-top: ${p => `${p.theme.space[3]}px`};
border: ${p => p.theme.borders.normal};
border-radius: ${p => p.theme.radii.medium};
`