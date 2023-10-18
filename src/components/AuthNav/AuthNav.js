import { LinkWrapper, NavLinkStyled } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <LinkWrapper>
      <NavLinkStyled to="/register">
        Register
      </NavLinkStyled>
      <NavLinkStyled to="/login">
        Log In
      </NavLinkStyled>
    </LinkWrapper>
  );
};