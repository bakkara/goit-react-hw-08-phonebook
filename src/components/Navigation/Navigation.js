import { useAuth } from 'hooks';
import { LinkWrapper, NavLinkStyled } from './Navigation.styled';
import { BiSolidContact } from 'react-icons/bi';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkWrapper>
      <BiSolidContact size={24} /> 
       <NavLinkStyled to="/">
        Home
      </NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to="/contacts">
          Contacts
        </NavLinkStyled>
        )}
      </LinkWrapper>
      </nav>
  );
};