import styled from "styled-components";


export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${p => `${p.theme.space[3]}px`};
`
export const FormLabel = styled.label`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-top: ${p => `${p.theme.space[3]}px`};
  font-size: ${p => p.theme.fontSizes.l};
`;
export const FormInput = styled.input`
  width: 80%;
  margin-top: ${p => `${p.theme.space[3]}px`};
  padding: ${p => `${p.theme.space[3]}px`};
  font-weight: ${p => p.theme.fontWeights.medium};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const FormBtn = styled.button`
margin-top: ${p => `${p.theme.space[4]}px`};
font-size: ${p => p.theme.fontSizes.m};

`