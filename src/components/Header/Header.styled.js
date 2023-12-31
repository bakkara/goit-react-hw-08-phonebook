import styled from 'styled-components';
import { theme } from 'theme';

export const NavBar = styled.header`
  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dark};
  background: ${theme.colors.headerBackground};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

