import styled from 'styled-components';

export const UserMenuText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;

  transition-property: color, background-color, transform;
  transition-duration: 0.2s;

  transform: scale(0.9);

`;