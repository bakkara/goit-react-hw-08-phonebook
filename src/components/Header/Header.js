import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { HeaderWrapper, NavBar } from './Header.styled';
import { Container } from 'components/App/App.styled';



export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <Container>
        
        <HeaderWrapper>
        <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderWrapper>
      </Container>
    </NavBar>
  );
};