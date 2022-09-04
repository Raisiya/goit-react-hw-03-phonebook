import styled from 'styled-components';

export const StyleItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => `${p.theme.space[3]}px`};
  padding: ${p => `${p.theme.space[2]}px`};
  background-color: ${p => p.theme.colors.primary};
  
  border-radius: ${p => p.theme.radii.large};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  box-shadow: ${p => p.theme.shadows.darkBox};
`;


export const StyleBtn = styled.button`
border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.large};
  font-size: ${p => p.theme.fontSizes.s};
`